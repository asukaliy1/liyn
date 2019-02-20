---
title: "pgsql和spring框架构建"
date: "2019-02-20"
tag: "前端"
link: "20190220"
createdate: "2019-02-20"
updatedate: "2019-02-20"
---


## 博客介绍

### Gatsby
[Gatsby](https://www.gatsbyjs.org/)是一个使用React.js , Webpack , modern JavaScript and CSS的渐进式静态网页app开发集成方案。

#### feature特色
- Gatsby的核心功能是帮助用户快速开发静态网站；
- 基于graphql，提供了丰富的数据文档查询，搜索整理功能；
- 一系列基于nodejs开发的服务API，帮助开发者生成个性化模板页面；
- Rss，数据分析等常用功能可以通过插件的方式快速实现；
- Link路由组件，支持预加载功能算法，极大地提高了网页加载速度；
- 绝大多数功能或者API只是作用于Build阶段，最终页面真的是**静态页面**，Gatsby本身不提供任何后端服务，比如访问数据库；


#### 个人观点
- 与Wordpres不同，Gatsby自动化的支持少，功能实现需要撸代码，react的学习曲线比较陡峭，但是定制化也非常高；
- 文档数据转换页面能力非常强大，graphql可视化的能力使得查询调试非常便捷；
- 摆脱对数据库的依赖，无需后台管理页面，数据即页面；
- 实践react的极佳选择；

MVC架构过于笨重，纯静态页面数据整合过程发布十分不便，Gatsby通过node API的方式巧妙的扬长补短，开发者可以使用更多的时间专注前端开发，内容编写与展示~


## 后期功能To-Dos

- ~~markdown中图片的自动引入~~
- ~~分页功能的实现（基于插件）~~
- ~~增加代码文件头~~
- 添加路由错误页面
- 对markdown中<p></p>内容进行style={{textIndent:'2em'}}渲染，实现首行缩进，要不然太丑了。。。字体的调整
- 返回按钮的设计与实现
- 引入表情库
- 搜索窗口功能的实现（根据所有markdown文件生成searh.json文件，然后在该json文件中实现查找）
- logo的svg图片制作
- tag标签统计生成
- rss订阅实现（基于插件）
- 读取文件的更新信息，用于显示在页面中
- favicon更新
- 增加helmet应用


mvn install:install-file -Dfile=kaptcha-2.3.jar -DgroupId=com.google.code.kaptcha  -DartifactId=kaptcha -Dversion=2.3  -Dpackaging=jar

 <dependency>
            <groupId>org.csource</groupId>
            <artifactId>fastdfs-client-java</artifactId>
            <version>1.27-SNAPSHOT</version>
        </dependency>

        mvn install:install-file -Dfile=kfastdfs-client-java-1.27-SNAPSHOT.jar -DgroupId=org.csource  -DartifactId=fastdfs-client-java -Dversion=1.27-SNAPSHOT -Dpackaging=jar

        Zywlw@iot_!109)