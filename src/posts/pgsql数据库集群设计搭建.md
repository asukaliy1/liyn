---
title: "pgsql数据库集群搭建"
date: "2019-02-19"
tag: "pgsql,后端"
link: "20190219"
createdate: "2019-02-19"
updatedate: "2019-02-19"
attachments:

---

# pgsql数据库集群搭建

PostGIS is a spatial database extender for PostgreSQL object-relational database. It adds support for geographic objects allowing location queries to be run in SQL.

## 工具链说明
PostGis目前最新版本为2.5.1，为了尽可能利用其功能，官方建议对应的PostgreSql版本因为11以上。**Best served with PostgreSQL 11.1 and pgRouting 2.6.1.**

## PostgreSQL11安装

1. `cat /etc/redhat-release`查询系统版本，目前发现有些主机系统类型为redhat或者centos，更新源
```sh
yum install https://download.postgresql.org/pub/repos/yum/11/redhat/rhel-7-x86_64/pgdg-redhat11-11-2.noarch.rpm
```
2. 开始安装
```sh
yum install postgresql11
yum install postgresql11-server
```

3. 安装完毕之后, 执行执行：`vim /etc/profile`，文件末尾添加以下内容，最后执行`source /etc/profile`
```sh
export PGSQL_HOME=/usr/pgsql-11
export PATH=PGSQL_HOME/bin:PATH
```

4. 初始化数据库集群，这个集群是指单机下的数据库集合，初始化后存在两个自带的数据库postgres和template1，指令如下：
```
initdb -D /data/pgsql11/data
```
5. 注意/data/pgsql11/data/postgresql.conf该文件包含了postgresql的所有配置信息，在这里我们修改log路径，绑定端口号等等功能。
   
6. 启动postgresql服务
   
```sh
chown -R user:user /var/run/postgresql

pg_ctl -D /data/pgsql11/data -l /data/pgsql11/log/pgsql.log start
```

7. 基本操作
```sh
createdb -h localhost -p 5432 gisdb #创建gisdb的数据库
psql -h localhost -p 5432 -d gisdb #连接gisdb数据库
```

## PostGis2.5.1安装

```shell
#sudo yum install postgresql11-devel

sudo rpm -ivh http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

sudo yum install epel-release

sudo yum install postgis25_11-client.x86_64 postgis25_11.x86_64
```
)