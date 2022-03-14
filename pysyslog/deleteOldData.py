# 数据清除组件
# 删除 Backup 中超过一年的数据
# ENV: Python 3
# 依赖：pymongo datetime
# pip install -r requirements.txt

# Author:Luckykeeper <luckykeeper@luckykeeper.site>|https://luckykeeper.site>
# last modified:2022-03-14
# HBFU YYDS!

import datetime,os

from pymongo import MongoClient # MongoDB 连接器

################################ 基础设定 ################################
## 调试模式 True = ON; False = OFF
if "True" not in os.environ['debug']:
	debug_choice = False
else:
	debug_choice = True
debug = debug_choice

## MongoDB 数据库设定
MongoDB_host = os.environ['MongoDB_host'] # 数据库IP 形如："127.0.0.1"
MongoDB_port = int(os.environ['MongoDB_port']) # 数据库端口 形如："int(12345)"
MongoDB_user = os.environ['MongoDB_user'] # 数据库用户 形如："user"，请使用 root 账户，否则可能产生意外的问题
MongoDB_password = os.environ['MongoDB_password'] # 数据库密码 形如："password"
### 要读写的数据库名称和 collection
MongoDB_dbName = os.environ['MongoDB_Syslog_dbName'] # 数据库名称 默认："orgData"
MongoDB_col = os.environ['MongoDB_Backup_col'] # collection 名称 默认："backup"

## 删除数据的周期，以天为单位，可以是小数
deletePeriods = int(os.environ['deletePeriods'])

### 程序开始

# 获取当前时间
now_time = datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S')
if debug == True:
    print("当前时间:",now_time)

## 数据库连接模块
try:
	client = MongoClient(MongoDB_host, MongoDB_port)
	db = client.admin    # 先连接系统默认数据库admin进行认证
	db.authenticate(MongoDB_user, MongoDB_password,mechanism='SCRAM-SHA-1') 
	if debug == True:
		print(">>>>>>MongoDB数据库连接成功!")
	orgDb = client[MongoDB_dbName]
	orgCol = orgDb[MongoDB_col]

    
except:
	print("请检查数据库设定是否正确!或数据库是否已经建立!")

# 查找删除模块

for data in orgCol.find({},{ "_id": 1, "srcIp": 1, "attackTime": 1, "destName": 1, "destLocX": 1, "destLocY": 1, "dataSource": 1, "atkType": 1, "action": 1 }):
    checkTime = data['attackTime']
    # if debug == True:
    #     print("当前时间:",now_time)
    # if debug == True:
    #     print("将要检查的时间: ",checkTime)
    now_time_struct = datetime.datetime.strptime(now_time, "%Y-%m-%d %H:%M:%S")
    checkTime_struct = datetime.datetime.strptime(checkTime, "%Y-%m-%d %H:%M:%S")
    total_seconds = (now_time_struct - checkTime_struct).total_seconds()
    # print(total_seconds) #调试用
    # 86400 秒是一天
    if total_seconds > deletePeriods*86400:
        if debug == True:
            print("将要删除的过期数据id:",data['_id'])
            print("将要删除的过期数据时间:",data['attackTime'])
        dropData = { "_id": data['_id'] }
        orgCol.delete_one(dropData)
    else:
        pass
    