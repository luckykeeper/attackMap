# 定时邮件告警组件，将攻击IP定时发送出去
# 定时功能请使用 crontab 实现
# 提示 # crontab -e
# ENV: Python 3
# 依赖：smtplib datetime
# pip install -r requirements.txt

# Author:Luckykeeper <luckykeeper@luckykeeper.site>|https://luckykeeper.site>
# last modified:2022-03-14
# HBFU YYDS!

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
from email.utils import formataddr
import datetime

################################ 基础设定 ################################
## 调试模式 True = ON; False = OFF
debug = False

# 发送邮件的名称
sendFileName = '攻击IP.csv' # 默认：'攻击IP.csv'

# 邮件 smtp 服务相关设定
sender='username@address.domain'   # 发件人邮箱账号，如果使用非QQ邮箱（foxmail也是QQ邮箱）需要到下面修改服务器地址
mailPassword = 'password'  # 发件人邮箱密码，QQ邮箱需要使用授权码而不是密码
user='username@address.domain'  # 收件人邮箱账号

# 邮件标题
now_time = datetime.datetime.today().strftime('%Y-%m-%d')
title = now_time + ' 网络安全态势系统邮件告警'

if debug == True:
    print ("将发送的邮件标题",title)

### 程序开始 ###

def mail():
    ret=True
    try:
        msg = MIMEMultipart()
        msg['From']=formataddr(["Luckykeeper",sender])  # 括号里的对应发件人昵称、请按实际修改
        msg['To']=formataddr(["Luckykeeper",user])              # 括号里的对应收件人昵称、请按实际修改
        subject =  title # 主题
        msg['Subject']= Header(subject, 'utf-8')  # 邮件的主题

        # 构造附件
        attach = MIMEText(open(sendFileName, 'rb').read(), 'base64', 'gbk')
        attach["Content-Type"] = 'application/octet-stream'
        attach["Content-Disposition"] = 'attachment; filename="atkIP.csv"'

        msg.attach(attach)

 
        server=smtplib.SMTP_SSL("smtp.qq.com", 465)  # 发件人邮箱中的SMTP服务器，端口是465
        server.login(sender, mailPassword)  # 括号中对应的是发件人邮箱账号、邮箱密码
        server.sendmail(sender,[user,],msg.as_string())  # 括号中对应的是发件人邮箱账号、收件人邮箱账号、发送邮件
        server.quit()  # 关闭连接
    except Exception:  # 如果 try 中的语句没有执行，则会执行下面的 ret=False
        ret=False
    return ret
 
ret=mail()
if debug == True:
    if ret:
        print("邮件发送成功")
    else:
        print("邮件发送失败")
else:
    pass