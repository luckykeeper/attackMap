# Py3Syslog 记录组件 For Docker
# ENV: Python 3.5+
# 依赖：socketserver pymongo re
# pip install -r requirements.txt

# Author:Luckykeeper <luckykeeper@luckykeeper.site>|https://luckykeeper.site>
# last modified:2022-03-14
# HBFU YYDS!

import re # 正则
import socketserver # 使用 socketserver 做服务器
from pymongo import MongoClient # MongoDB 连接器
import os # 读取 Docker 变量

################################ 基础设定 ################################
## 调试模式 True = ON; False = OFF
if "True" not in os.environ['debug']:
	debug_choice = False
else:
	debug_choice = True
debug = debug_choice

## Py3Syslog Server 设定
# 默认监听本机 UDP 514 端口
HOST = os.environ['syslog_host']
PORT = int(os.environ['syslog_port'])

## MongoDB 数据库设定
MongoDB_host = os.environ['MongoDB_host'] # 数据库IP 形如："127.0.0.1"
MongoDB_port = int(os.environ['MongoDB_port']) # 数据库端口 形如："int(12345)"
MongoDB_user = os.environ['MongoDB_user'] # 数据库用户 形如："user"，请使用 root 账户，否则可能产生意外的问题
MongoDB_password = os.environ['MongoDB_password'] # 数据库密码 形如："password"
### 要写入的数据库名称和 collection
MongoDB_dbName = os.environ['MongoDB_Syslog_dbName'] # 数据库名称 默认："orgData"
MongoDB_col = os.environ['MongoDB_Syslog_col'] # collection 名称 默认："syslog"

## 请把下面的 destLocX 改成系统所在位置的经度
# destLocY 改成系统所在位置的经度

################################ 程序开始 ################################

orgData = ""
data_db = []

# 定义 SyslogUDPHandler 类
class SyslogUDPHandler(socketserver.BaseRequestHandler):
	def handle(self):
		orgData = bytes.decode(self.request[0].strip())  # 读取数据
		if debug == True:
			print("Syslog 原始数据:",orgData) # Debug:输出接收的数据
			# print(type(orgData)) # type class 'str'
			print("—————————————————————————————————————————————————————————————————————————————")

		# 判断数据来源

		# 来自蜜罐的数据
		honeypotRe = re.compile('HFish')
		# 来自 WAF 的数据
		wafRe = re.compile('DPTECH')

		# 判断蜜罐数据
		if honeypotRe.search(orgData) != None:
			if debug == True:
				print("数据来自蜜罐!")
			# 打上蜜罐 Tag
			dataTag = "honeypotTag"

		# 来自 WAF 的数据
		elif wafRe.search(orgData) != None:
			if debug == True:
				print("数据来自 WAF !")
			# 打上 WAF Tag
			dataTag = "wafTag"

		# 异常处理
		else:
			if debug == True:
				print("不是本系统需要接收的数据")
			pass

		# 接收数据的处理——蜜罐
		if dataTag == "honeypotTag":
			# 切分初始数据
			msg = orgData.split("HFish Threat Alert | ")[1]
			if debug == True:
				print("需要处理的数据",msg)
				print("—————————————————————————————————————————————————————————————————————————————")
			
			# 按照系统规划提取相应数据
			## srcIp
			preSrcIp = msg.split(" | src_ip: ")[1]
			srcIp = preSrcIp.split(" | src_port: ")[0]
			if debug == True:
				print("攻击源IP:",srcIp)

			## attackTime
			preAttackTime = msg.split(" | time: ")[1]
			attackTime = preAttackTime.split(" | info:")[0]
			if debug == True:
				print("攻击时间:",attackTime)

			## destName
			preDestName = msg.split(" | client_ip: ")[1]
			destName = preDestName.split(" | attack_type:")[0]
			if debug == True:
				print("攻击目标:",destName)

			## destLocX(固定)
			destLocX = "115.506601"

			## destLocY（固定）
			destLocY = "38.926478"

			## dataSource
			preDataSource = msg.split("client: ")[1]
			dataSource = preDataSource.split(" | client_ip:")[0]
			if debug == True:
				print("数据来源",dataSource)

			## atkType
			preAtkType = msg.split(" | attack_type: ")[1]
			atkType = preAtkType.split(" | scan_type: ")[0]
			if debug == True:
				print("攻击事件:",atkType)

			## action（固定）
			action = "记录"

			# 整理将要写入数据库的数据
			result_db = {}
			result_db['srcIp'] = srcIp
			result_db['attackTime'] = attackTime
			result_db['destName'] = destName
			result_db['destLocX'] = destLocX
			result_db['destLocY'] = destLocY
			result_db['dataSource'] = dataSource
			result_db['atkType'] = atkType
			result_db['action'] = action

			## Debug 输出将要写入数据库的数据
			if debug == True:
				print("将要写入数据库的数据",result_db)

			# 数据统一写入 MongoDB 的 orgData/syslog 数据库
			try:
				client = MongoClient(MongoDB_host, MongoDB_port)
				db = client.admin    # 先连接系统默认数据库admin进行认证
				db.authenticate(MongoDB_user, MongoDB_password,mechanism='SCRAM-SHA-1') 
				if debug == True:
					print(">>>>>>MongoDB数据库连接成功!")
				newDb = client[MongoDB_dbName]
				newCol = newDb[MongoDB_col]
				newCol.insert_one(result_db)
				if debug == True:
					print("数据成功写入!")

			except:
				print("请检查数据库设定是否正确!")




		# 接收数据的处理—— WAF
		elif dataTag == "wafTag":
			# 切分初始数据
			msg = orgData.split(">")[1]
			if debug == True:
				print("需要处理的数据",msg)

				print("—————————————————————————————————————————————————————————————————————————————")

			# 按照系统规划提取相应数据
			## srcIp
			preSrcIp = msg.split("``source-ip:")[1]
			srcIp = preSrcIp.split(";``source-port:")[0]
			try:
				srcIp = srcIp.split(";``destination-ip:")[0]
			except:
				pass
			if debug == True:
				print("攻击源IP:",srcIp)

			## attackTime
			### WAF 需要首先对时间进行初步处理
			# now_year = datetime.datetime.today().strftime('%Y')
			dataSourceLan = msg
			timeInfo = dataSourceLan.split(' DPTECH')[0]
			atkOrgTime = timeInfo
			now_year = timeInfo[-4:]
    		# print(atkOrgTime)
    		# 转换方法：将时间切片切成三部分，前3个必是表示月份的，用if判断，后面是标准时间格式，不用判断，中间从两头截取能取到正好的日期
			month = atkOrgTime[0:3]
			day = atkOrgTime[4:-14]
			accuTime = atkOrgTime[-13:-5]
    		# print(month)
    		# print(day)
    		# print(accuTime)
    		# 月份的转换
			if month == "Jan":
				atkMonth = "01"
			elif month == "Feb":
				atkMonth = "02"
			elif month == "Mar":
				atkMonth = "03"
			elif month == "Apr":
				atkMonth = "04"
			elif month == "May":
				atkMonth = "05"
			elif month == "Jun":
				atkMonth = "06"
			elif month == "Jul":
				atkMonth = "07"
			elif month == "Aug":
				atkMonth = "08"
			elif month == "Sep":
				atkMonth = "09"
			elif month == "Oct":
				atkMonth = "10"
			elif month == "Nov":
				atkMonth = "11"
			else:
				atkMonth = "12"
    		# 单位数日期的处理
			if len(day) == 1:
				day = "0"+day
			attackTime = now_year+"-"+atkMonth+"-"+day+" "+accuTime
			if debug == True:
				print("攻击时间:",attackTime)

			## destName
			preDestName = msg.split("``destination-ip:")[1]
			destName = preDestName.split(';``destination-port:')[0]
			try:
				destName = destName.split(';``ifname-inside:')[0]
			except:
				pass
			if debug == True:
				print("攻击目标:",destName)

			## destLocX(固定)
			destLocX = "115.506601"

			## destLocY（固定）
			destLocY = "38.926478"

			## dataSource（固定）
			dataSource = "DPTECH"
			if debug == True:
				print("数据来源",dataSource)

			## atkType
			preAtkType = msg.split("``attack-name:")[1]
			atkType = preAtkType.split(";``attack-type:")[0]
			try:
				atkType = atkType.split(";``source-ip:")[0]
			except:
				pass
			if debug == True:
				print("攻击事件:",atkType)

			## action
			preAction = msg.split("``event:")[1]
			action = preAction.split(";``attack-name:")[0]
			if debug == True:
				print("动作:",action)

			# 整理将要写入数据库的数据
			result_db = {}
			result_db['srcIp'] = srcIp
			result_db['attackTime'] = attackTime
			result_db['destName'] = destName
			result_db['destLocX'] = destLocX
			result_db['destLocY'] = destLocY
			result_db['dataSource'] = dataSource
			result_db['atkType'] = atkType
			result_db['action'] = action

			## Debug 输出将要写入数据库的数据
			if debug == True:
				print("将要写入数据库的数据",result_db)		
			# 数据统一写入 MongoDB 的 orgData/syslog 数据库
			try:
				client = MongoClient(MongoDB_host, MongoDB_port)
				db = client.admin    # 先连接系统默认数据库admin进行认证
				db.authenticate(MongoDB_user, MongoDB_password,mechanism='SCRAM-SHA-1') 
				if debug == True:
					print(">>>>>>MongoDB数据库连接成功!")
				newDb = client[MongoDB_dbName]
				newCol = newDb[MongoDB_col]
				newCol.insert_one(result_db)
				if debug == True:
					print("数据成功写入!")

			except:
				print("请检查数据库设定是否正确!")
		else:
			pass

# Syslog 服务器
try:
	server = socketserver.UDPServer((HOST, PORT), SyslogUDPHandler)  # 绑定本地地址，端口和syslog处理方法
	print("Py3Syslog By Luckykeeper Service Started And Ready to Handle Syslog Data!!!")
	print("Py3Syslog Server listening on:",HOST,PORT,"(udp)")
	if debug == False:
		print("Debug Mode:OFF!")
	else:
		print("Debug Mode:ON!")
	print("—————————————————————————————————————————————————————————————————————————————")
	server.serve_forever(poll_interval=0.5)  # 运行服务器，轮询间隔0.5

except (IOError, SystemExit): # 崩溃处理
	raise
