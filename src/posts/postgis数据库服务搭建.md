---
title: "postgis数据库服务搭建"
date: "2019-02-18"
tag: "gis,后端"
link: "20181111"
createdate: "2019-02-18"
updatedate: "2019-02-18"
attachments:

---


PostGIS is a spatial database extender for PostgreSQL object-relational database. It adds support for geographic objects allowing location queries to be run in SQL.

## 工具链说明
PostGis目前最新版本为2.5.1，为了尽可能利用其功能，官方建议对应的PostgreSql版本因为11以上。**Best served with PostgreSQL 11.1 and pgRouting 2.6.1.**

## PostgreSQL11安装

1. `cat /etc/redhat-release`查询系统版本，目前发现有些主机系统类型为redhat或者centos，更新源(手动下载)
```sh
yum install https://download.postgresql.org/pub/repos/yum/11/redhat/rhel-7-x86_64/pgdg-redhat11-11-2.noarch.rpm
```
or
```sh
yum install https://download.postgresql.org/pub/repos/yum/11/redhat/rhel-7-x86_64/pgdg-centos11-11-2.noarch.rpm
```

2. 开始安装
手动下载
```
https://download.postgresql.org/pub/repos/yum/11/redhat/rhel-7-x86_64/postgresql11-server-11.2-1PGDG.rhel7.x86_64.rpm
```
```sh
yum install postgresql11
sudo yum install ./postgresql11-server-11.2-1PGDG.rhel7.x86_64.rpm
```

1. 安装完毕之后, 执行执行：`vim /etc/profile`，文件末尾添加以下内容，最后执行`source /etc/profile`
```sh
export PGSQL_HOME=/usr/pgsql-11
export PATH=$PGSQL_HOME/bin:$PATH
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

7. 修改postgresql.conf
文件位于之前创建的数据库文件夹。

```
listen_addresses = '*'
port = 18083 

log_directory = '/data/pgsql11/log'
```

8. 修改pg_hba.conf
增加
```
host    all           smoke           0.0.0.0/0               trust
```

1.  基本操作
After you’ve installed PostgreSQL, before you do anything else, you should log in as postgres and create other roles. 
```sh



createdb -h localhost -p 18083 gisdb #创建gisdb的数据库
psql -h localhost -p 18083 -d gisdb #连接gisdb数据库
```

## PostGis2.5.1安装

postgis是属于pgsql其中的一个插件
```shell
#sudo yum install postgresql11-devel

sudo rpm -ivh http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

sudo yum install epel-release

sudo yum install postgis25_11-client.x86_64 postgis25_11.x86_64
```

```
psql -h 172.16.3.2 -p 5432 -d gisdb

gisdb=# CREATE EXTENSION postgis;
CREATE EXTENSION
gisdb=# SELECT postgis_full_version();
                                                                                      postgis_full_version

-----------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------
 POSTGIS="2.5.1 r17027" [EXTENSION] PGSQL="110" GEOS="3.7.0-CAPI-1.11.0 673b9939" PROJ="Rel. 4.9.3, 15 August 2016" GDAL="GDAL 1.11.4, released 2016/01/25"
 LIBXML="2.9.1" LIBJSON="0.11" RASTER
(1 row)

```
## 参考Page



