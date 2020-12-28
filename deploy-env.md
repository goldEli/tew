
## 安装 yum 工具包
```shell
yum install yum-utils device-mapper-persistent-data lvm2
```

## 设置一个下载docker的镜像源
```shell
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

## 安装docker
```shell
yum install docker-ce docker-ce-cli containerd.io
```

## 启动docker服务
```shell
systemctl start docker
```

## 开机自动启动docker
```shell
systemctl enable docker
```

## 测试
```shell
docker images
```

## set registy
```shell
echo '{"registry-mirrors": ["https://register.docker-cn.com/"]}' > /etc/docker/daemon.json
```

## 重启docker
```shell
systemctl daemon-reload
systemctl restart docker
```

## 安装mysql
```shell
docker pull daocloud.io/library/mysql:8.0.20
```

### 运行mysql
```shell
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD={pwd} 镜像id
```

### 设置node访问权限
```shell
docker exec -it mysql容器id sh

mysql -uroot -p

mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; 

mysql>FLUSH PRIVILEGES;

5.更改加密规则

mysql>ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
6.更新root用户密码

mysql>ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'abc123456'; 
7.刷新权限

mysql>FLUSH PRIVILEGES;
```

```shell
docker stop {mysqlId}
docker restart {mysqlId}
```

## Redis

```shell
docker pull daocloud.io/library/redis:6.0.3-alpine3.11

docker run -d -p 6379:6379 --name er_redis 镜像id --requirepass {pwd}
```

## Node

```shell
docker pull daocloud.io/library/node:12.18

docker run -itd --name node 镜像id
```

## Nginx

```shell
docker pull daocloud.io/library/nginx:1.13.0-alpine

# nginx配置文件
/etc/nginx/nginx.conf

# nginx中html目录
/usr/share/nginx/html

# 日志文件
/var/log/nginx/access.log

# 把文件有本地复制到远端
scp -rp dist root@remoteIP:/root

# 从宿主机拷文件到容器里面
docker cp dist nginx容器id:/usr/share/nginx/html

vi /etc/nginx/nginx.conf

# 添加内容
server {
  #监听端口
  listen 80;
  #监听地址
  server_name 阿里云公网IP;      

  location / {
    #根目录
    root   /usr/share/nginx/html; 
    #设置默认页
    index  index.html;
  }
  
  # 接口转发
  location ~ /api/ {
    proxy_pass http://阿里云公网IP:7001; # 7001为node服务的端口号
  }

# 正常运行nginx
docker run -d -p 80:80 --name nginx 镜像id

# 通过目录映射来运行nginx
# 冒号":"前面的目录是宿主机目录，后面的目录是容器内目录
docker run --name nginx -d -p 80:80 -v /root/nginx/log:/var/log/nginx -v /root/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /root/nginx/conf.d:/etc/nginx/conf.d -v /root/nginx/html:/usr/share/nginx/html 镜像id
}
```
## 生成镜像
docker build -t 镜像名称:版本 Dockerfile路径


## run server
docker run -d -p 7001:7001 --name server id
