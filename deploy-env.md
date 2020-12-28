
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