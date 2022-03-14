# 攻击行为计算组件
# 在 sysloger 的基础上统一计算攻击开始/结束时间，攻击计数，国家地区，以及经纬度
# ENV: Python version>=3.5

# 依赖：geoip2 pymongo re csv datetime
# pip install -r requirements.txt
# 需要在同目录存放 GeoLite2-City.mmdb

# Author:Luckykeeper <luckykeeper@luckykeeper.site>|https://luckykeeper.site>
# last modified:2022-03-13
# HBFU YYDS!

import re # 正则
from pymongo import MongoClient # MongoDB 连接器
import csv # csv库
import os
import datetime
import codecs # 防止乱码
import geoip2.database

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
# 读出
MongoDB_From_dbName = os.environ['MongoDB_Syslog_dbName']  # 数据库名称 默认："orgData"
MongoDB_From_col = os.environ['MongoDB_Syslog_col'] # collection 名称 默认："syslog"
# 写入
MongoDB_to_dbName = os.environ['MongoDB_show_dbName'] # 数据库名称 默认："show"
MongoDB_to_col = os.environ['MongoDB_show_col'] # collection 名称 默认："bigScreen"

## 输出文件
outputCsvName = os.environ['outputCsvName'] # 默认：'攻击IP.csv'

## mmdb 文件位置，可写相对位置，如使用 Cron 定时运行请写绝对位置
mmdbLocation = '/usr/src/app/pysyslog/GeoLite2-City.mmdb'

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


## 接下面展示数据库写入模块
# 先删除旧 Col
try:
    destDb = client[MongoDB_to_dbName]
    destCol = destDb[MongoDB_to_col]
    destCol.drop()
    if debug == True:
        print("检测到旧库存在,删除旧库!")
except:
    if debug == True:
        print("检测到旧库不存在,跳过!")
    pass


# 先进行 attackCount 的计算
for orgData in orgCol.find({},{ "_id": 0, "srcIp": 1, "attackTime": 1, "destName": 1, "destLocX": 1, "destLocY": 1, "dataSource": 1, "atkType": 1, "action": 1 }):
    # print(orgData) # 调试用
    # print(type(orgData)) # 调试用
    # 如果 srcIp 在列表里面，就跳过，不在列表里面进行统计操作
    if attackCountIpList.count(orgData['srcIp']) == 0:
        attackCountIpList.append(orgData['srcIp'])
        # if debug == True:
        #     print("当前 IP 列表:",attackCountIpList) # 调试用

        # infoQuery 要查询的条件
        infoQuery = {"srcIp": orgData['srcIp'], "destName": orgData['destName'], "dataSource": orgData['dataSource'], "atkType": orgData['atkType'], "action": orgData['action'] }
        
        # attackCount = orgCol.find(infoQuery).count()
        # https://blog.csdn.net/weixin_37560085/article/details/89002354
        # 上面注释的方法过时，会弹 Warning，用下面的方法

        # 计算该 IP 的攻击计数
        attackCount = orgCol.count_documents(infoQuery)
        # if debug == True:
        #     print(orgData['srcIp']," 的攻击计数为",attackCount)

        # 把攻击计数排序，用于下面的 CSV 输出模块进行输出
        attackCountListOrg.append({'攻击IP':orgData['srcIp'],'攻击次数':attackCount})
        # if debug == True:
        #     print("待输出原始列表",attackCountListOrg)

        # 计算其它信息并整合
        # 攻击者所在国家和经纬度信息

        ## IP 转经纬度模块
        pattern = re.compile('(?:(?:10(?:(?:\.1[0-9][0-9])|(?:\.2[0-4][0-9])|(?:\.25[0-5])|(?:\.[1-9][0-9])|(?:\.[0-9])))|(?:172(?:\.(?:1[6-9])|(?:2[0-9])|(?:3[0-1])))|(?:192\.168))(?:(?:\.1[0-9][0-9])|(?:\.2[0-4][0-9])|(?:\.25[0-5])|(?:\.[1-9][0-9])|(?:\.[0-9])){2}')
        # 定义存放结果的list
        locData = []
        writer = 0

        id = orgData['srcIp']
        # 根据srcIp返回地理位置和经纬度信息
        # 需要先处理保留地址,保留地址不显示在大地图上面，LocX、Y均置为''
        # 先处理内网
        # print(pattern.search(id)) #调试用
        if pattern.search(id) != None:
            srcPhyLoc = '局域网'
            srcLocX = ''
            srcLocY = ''
            srcCountry = '中国'
        else:
        # 调试发现这里加''多此一举了，因为str自带一个看不见的“''”
        # ipId = '\''+id+'\''
            ipId = id
            # print("else",ipId) #调试用
        # 处理无法识别的ip
            try:
                if debug == True:
                    print("trying!",ipId,type(ipId)) #调试用
                with geoip2.database.Reader(mmdbLocation) as reader:
                    if debug == True:
                        print("s1 normal")
                    # print("cocoa") #调试用
                    response = reader.city(ipId)
                    # print (ipId) #调试用
                    countryName = response.country.names['zh-CN']
                    specificName = response.subdivisions.most_specific.name
                    cityName = response.city.name
                    srcLocX = response.location.longitude
                    srcLocY = response.location.latitude
                    srcCountry = countryName
                    if debug == True:
                        print("s1 done")

                # countryName 是国家名，specificName是省份名，cityName是城市名，可能的数据格式是'str'和'NoneType'
                # 当countryName为空时，返回“未知”
                # 当specificName和cityName为空时，返回空字符串
                if debug == True:
                    print("国家",countryName,type(countryName))
                    print("地区",specificName,type(specificName))
                    print("城市",cityName,type(cityName))
                    print("LocX",srcLocX,type(srcLocX))
                    print("LocY",srcLocY,type(srcLocY))
                if countryName is None:
                    if debug == True:
                        print("来自未知国家")
                    srcPhyLoc ='未知地点'
                    srcCountry = '未知国家'
                elif specificName is None:
                    if debug == True:
                        print("地区未知")
                    srcPhyLoc = countryName
                elif cityName is None:
                    if debug == True:
                        print("城市未知")
                    srcPhyLoc = countryName+specificName
                else:
                    if debug == True:
                        print("全部已知")
                    srcPhyLoc = countryName+specificName+cityName
                    # srcPhyLoc = countryName+cityName+specificName

                if debug == True:
                    print("查询正常!")

                    print("经纬度是否正常",isinstance(srcLocX,float))

                # 防止经纬度查不到报错，手动处理一下
                if isinstance(srcLocX,float) == True:
                    if debug == True:
                        print("浮点校验通过")
                    pass
                
                else:
                    if debug == True:
                        print("来自未知地点")
                    srcPhyLoc = '未知地点'
                    srcLocX = ''
                    srcLocY = ''
                    srcCountry = '未知国家'
            except:
                if debug == True:
                    print("程序寄了")
                # 如果你看到特别多的这样的报错，那可能是你上游的数据不对，检查一下
                # print("excepting!") #调试用
                srcPhyLoc = '未知地点'
                srcLocX = ''
                srcLocY = ''
                srcCountry = '未知国家'

        if debug == True:
            print("IP转经纬度完成")
        # 生成一个新的字典存放新产生的数据
        # print("locResult!!!!!") #调试用
        locResult = {}
        locResult['srcPhyLoc'] = srcPhyLoc
        locResult['srcLocX'] = srcLocX
        locResult['srcLocY'] = srcLocY
        locResult['srcCountry'] = srcCountry
        locData.append(locResult)
        # print (locResult) #调试用

        # 攻击开始结束时间
        timeOrgData = orgCol.find(infoQuery)
        calcTimeList = []

        for timeOrgDataFull in timeOrgData:
            calcTimeList.append(timeOrgDataFull['attackTime'])
            # print("calcTimeList",calcTimeList) # 调试用
        startTime = min(calcTimeList) # 开始时间，最小的那个
        lastTime = max(calcTimeList) # 结束时间，最大的那个

        # 合并两个字典，准备写入新库
        # 参考：https://zhuanlan.zhihu.com/p/108968254
        # 先生成一个新的字典，再合并到一起
        # 要求：python version>=3.5
        # locData 包含新数据的列表[{字典}]
        outputData = []

        # 在装入列表之前装入额外数据
        orgData['attackCount'] = attackCount
        orgData['startTime'] = startTime
        orgData['lastTime'] = lastTime
        # if debug == True:
        #     print ("orgData:",orgData)
        # orgData 字典装入列表准备合并
        orgDataDictInList = []
        orgDataDictInList.append(orgData)
        # print("orgData",type(orgData))
        # print("locData",type(locData))
        for x, y in zip(orgDataDictInList,locData):     	
            outputData.extend([{**x, **y}])  
        if debug == True:
            print ("将要写入新数据库的数据:",outputData)
        # print(type(outputData)) # 调试用，此时是 list ，里面装了一个单个字典
        # 取出 list 中 dict ，以便写入
        writeToDatabase = outputData[0]
        
        # 写入展示数据库模块
        destDb = client[MongoDB_to_dbName]
        destCol = destDb[MongoDB_to_col]
        
        # 再写入新 Col
        destCol.insert_one(writeToDatabase)



    else:
        pass

attackCountList = sorted(attackCountListOrg,key = lambda attackCountListOrg:attackCountListOrg['攻击次数'],reverse = True)

## CSV 输出模块 
# 依赖：csv
# 0.检查文件是否已经存在，存在就删

if os.path.exists(outputCsvName):
    if debug == True:
        print("检测到输出文件已经存在,将删除旧文件!")
    os.remove(outputCsvName)

else:
    if debug == True:
        print("没有检测到输出文件存在,将创建新文件!")
    pass
    
now_time = datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S')

# 1. 创建文件对象
# f = open(outputCsvName,'w',encoding='utf-8',newline='')
## codecs 防止中文乱码
f = codecs.open(outputCsvName,'wb','gbk')
# 2. 基于文件对象构建 csv写入对象
csv_writer = csv.writer(f)

# 3. 构建列表头
csv_writer.writerow(['创建时间',now_time,"","","AutoCreat By Luckykeeper <luckykeeper@luckykeeper.site>|https://luckykeeper.site>"])

csv_writer.writerow(["攻击IP","攻击次数"])


# 4. 写入csv文件内容
for attackIpData in attackCountList:
    csv_writer.writerow([attackIpData['攻击IP'],attackIpData['攻击次数']])

# 5. 关闭文件
if debug == True:
    print("文件输出到: ",outputCsvName," 已经成功!")
f.close()

