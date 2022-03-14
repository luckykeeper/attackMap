# file:./apiv1.py
# Flask API 用于向前端动态传递要展示的数据
# 依赖：flask pymongo
# pip install -r requirements.txt
# Author:Luckykeeper <luckykeeper@luckykeeper.site>|https://luckykeeper.site>
# last modified:2022-03-14
# HBFU YYDS!

import json
from flask import Flask
# from flask import abort
from flask import render_template
# from pymongo import MongoClient
from flask_cors import CORS
import os

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
MongoDB_From_dbName = os.environ['MongoDB_show_dbName'] # 数据库名称 默认："show"
MongoDB_From_col = os.environ['MongoDB_show_col'] # collection 名称 默认："bigScreen"

apiv1 = Flask(__name__)
CORS(apiv1,support_credentials=True)


@apiv1.route('/api/v1/attackAllCount', methods=['GET'])
def attackAllCount():
    return "attackAllCount"

@apiv1.route('/api/v1/attackIpCount', methods=['GET'])
def attackIpCount():
    return "attackIpCount"

@apiv1.route('/api/v1/attackKind', methods=['GET'])
def attackKind():
    return "attackKind"

@apiv1.route('/api/v1/attackCountry', methods=['GET'])
def attackCountry():
    return "attackCountry"

@apiv1.route('/api/v1/attackFlowHourTime', methods=['GET'])
def attackFlowHourTime():
    return "attackFlowHourTime"

@apiv1.route('/api/v1/attackFlowDayTime', methods=['GET'])
def attackFlowDayTime():
    return "attackFlowDayTime"

@apiv1.route('/api/v1/securityType', methods=['GET'])
def securityType():
    return "securityType"

@apiv1.route('/api/v1/defenseAction', methods=['GET'])
def defenseAction():
    return "defenseAction"

@apiv1.route('/api/v1/attackCnMap', methods=['GET'])
def attackCnMap():
    return "attackCnMap"

@apiv1.route('/api/v1/attackGlobalMap/<int:apiv1QueryTimeMinutes>', methods=['GET'])
def attackGlobalMap(apiv1QueryTimeMinutes):
    if debug == True:
        print("查询近",apiv1QueryTimeMinutes,"分钟的数据")
    # import json
    from pymongo import MongoClient

    # from bson import json_util
    
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
    attackGlobalMapData=[]
    #排序做好了，接下来做传参，传递的参数是 ?[分钟数] ，参考之前的分钟排序程序，但是数据不写死

    import datetime

    now_time = datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S')
    # print("现在时间是：",now_time)
    # apiv1QueryTimeMinutes = 60
    apiv1QueryTimeSeconds = apiv1QueryTimeMinutes*60


    for i in orgCol.find({},{ "_id": 0,"srcIp":1,"attackCount":1,"startTime":1,"lastTime":1,"destName":1,"destLocX":1,"destLocY":1,"dataSource":1,"srcPhyLoc":1,"srcLocX":1,"srcLocY":1,"srcCountry":1,"atkType":1,"action":1 }):
        # if debug == True:
        #     print(i) #调试用
        # 取出字典里的时间
        checkTime = i["lastTime"]
        # print(checkTime) #调试用
        # print(i) #调试用
        # 现在时间
        now_time_struct = datetime.datetime.strptime(now_time, "%Y-%m-%d %H:%M:%S")
        # 取出的时间
        checkTime_struct = datetime.datetime.strptime(checkTime, "%Y-%m-%d %H:%M:%S")
        # 计算时间差
        total_seconds = (now_time_struct - checkTime_struct).total_seconds()
        # 近7200s数据
        # if total_seconds > 7200:
        if total_seconds > apiv1QueryTimeSeconds:
            pass
        else:
            attackGlobalMapData.append(i)
    # 这里不能直接dump，Python处理mongodb数据时，取出的数据中有 '_id': ObjectId('5c2713d97d75734070fe9e39')。
    # 因为_id是ObjectId类型，然后返回时用json.dumps(数据)时会有报错：
    # TypeError: Object of type 'ObjectId' is not JSON serializable。
    # 正确处理方法是自己写一个encoder去继承jsonencoder ，这样就能够进行编码了。
    # 另一种解决方法是用bson

    #我们选择不取出_id这个值来解决这个问题

    # 在下面加个排序算法，attackCount大的往前面排
    # 参考资料：https://blog.csdn.net/qq_33036061/article/details/109175549
    attackGlobalMapDataSortd = sorted(attackGlobalMapData, key=lambda k: k['attackCount'],reverse=True)
    # print(attackGlobalMapDataSortd)
    # 这里，json转字符串，我们通过写个缓存文件来解决
    attackGlobalMapDataJson = json.dumps(attackGlobalMapDataSortd,ensure_ascii=False)
    attackGlobalMapCacheFile = './attackGlobalMapCache.js'

    # with open(attackGlobalMapCacheFile, 'w',encoding='utf-8') as attackGlobalMapCache_file_object:
    #     attackGlobalMapCache_file_object.write("define(function(){return {data:")
    # attackGlobalMapCache_file_object.close()
    with open(attackGlobalMapCacheFile, 'w',encoding='utf-8') as attackGlobalMapCache_file_object:
        attackGlobalMapCache_file_object.write(attackGlobalMapDataJson)
    attackGlobalMapCache_file_object.close()
    # with open(attackGlobalMapCacheFile, 'a',encoding='utf-8') as attackGlobalMapCache_file_object:
    #     attackGlobalMapCache_file_object.write("}});")
    # attackGlobalMapCache_file_object.close()

    if debug == True:
        print(">>>>>>输出数据缓存成功，缓存文件./attackGlobalMapCache.js")

    # 准备读取文件用于输出
    with open(attackGlobalMapCacheFile, 'r',encoding='utf-8') as attackGlobalMapCache_file_object:
        attackGlobalMapDataOutput = attackGlobalMapCache_file_object.read()
    attackGlobalMapCache_file_object.close()
    # print(attackGlobalMapDataOutput)
    # 2021年11月11日，mock.js 模式测试通过，接下来做ajax
    return attackGlobalMapDataOutput


@apiv1.route('/', methods=['GET'])
def index():
    return render_template('接口文档.html')

if __name__ == '__main__':
    apiv1.run(host='0.0.0.0',port=21109)