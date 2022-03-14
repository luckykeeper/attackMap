# 数据备份组件
# 将 OrgData 的数据备份到 Backup，并清除 OrgData 数据，防止攻击行为计算组件运行过长时间
# 建议按需求选择定时运行（如一天、一周）
# ENV: Python 3
# 依赖：pymongo 
# pip install -r requirements.txt

# Author:Luckykeeper <luckykeeper@luckykeeper.site>|https://luckykeeper.site>
# last modified:2022-03-14
# HBFU YYDS!

from pymongo import MongoClient # MongoDB 连接器

################################ 基础设定 ################################
## 调试模式 True = ON; False = OFF
debug = False

## MongoDB 数据库设定
MongoDB_host = "127.0.0.1" # 数据库IP 形如："127.0.0.1"
MongoDB_port = int(27017) # 数据库端口 形如："int(12345)"
MongoDB_user = "root" # 数据库用户 形如："user"，请使用 root 账户，否则可能产生意外的问题
MongoDB_password = "password" # 数据库密码 形如："password"
### 要读写的数据库名称和 collection
# 读出
MongoDB_From_dbName = "orgData" # 数据库名称 默认："orgData"
MongoDB_From_col = "syslog" # collection 名称 默认："syslog"
# 写入
MongoDB_to_dbName = "orgData" # 数据库名称 默认："orgData"
MongoDB_to_col = "backup" # collection 名称 默认："backup"

################################ 程序开始 ################################

# attackCount IP 查询列表
attackCountIpList = []

# 攻击计数列表
attackCountListOrg = []


## 数据库连接模块
try:
	client = MongoClient(MongoDB_host, MongoDB_port)
	db = client.admin    # 先连接系统默认数据库admin进行认证
	db.authenticate(MongoDB_user, MongoDB_password,mechanism='SCRAM-SHA-1') 
	if debug == True:
		print(">>>>>>MongoDB数据库连接成功!")
	orgDb = client[MongoDB_From_dbName]
	orgCol = orgDb[MongoDB_From_col]

    
except:
	print("请检查数据库设定是否正确!或数据库是否已经建立!")

## 数据库读写备份模块
destDb = client[MongoDB_to_dbName]
destCol = orgDb[MongoDB_to_col]

for data in orgCol.find():
	try:
		destCol.insert_one(data)

	except:
		if debug == True:
			print(data,"备份出错,请检查是否有id重复数据")

if debug == True:
	print("数据备份成功完成!")

## 备份完成删除原始数据
orgCol.drop()
if debug == True:
	print("已清除备份完成的原始数据")