echo "Welcome to use attackMap By Luckykeeper in Docker!!!"
echo "github: https://github.com/luckykeeper/attackMap"
echo "当前系统参数如下所示:"
echo "后端服务器 IP 端口 = ${pysyslog_ip}"
echo "系统展示名称 = ${system_name}"

echo " —————————————————程序开始运行!———————————————————————"
echo "Powered By Luckykeeper<luckykeeper.site|luckykeeper@luckykeeper.site>"
echo " —————————————————正在配置基础参数———————————————————————"

sed -i 's/127.0.0.1:21109/'"$pysyslog_ip"'/g' /usr/src/app/attackmap/js/app/mainMap.js
sed -i 's/127.0.0.1:21109/'"$pysyslog_ip"'/g' /usr/src/app/attackmap/30min/js/app/mainMap.js
sed -i 's/127.0.0.1:21109/'"$pysyslog_ip"'/g' /usr/src/app/attackmap/60min/js/app/mainMap.js

sed -i 's/网络安全态势展示系统/'"$system_name"'/g' /usr/src/app/attackmap/index.html
sed -i 's/网络安全态势展示系统/'"$system_name"'/g' /usr/src/app/attackmap/30min/index.html
sed -i 's/网络安全态势展示系统/'"$system_name"'/g' /usr/src/app/attackmap/60min/index.html
echo " —————————————————基础参数配置成功!———————————————————————"
echo " —————————————————程序开始运行!———————————————————————"
nginx -g "daemon off;"