---
title: "Gatsby开发——图片管理"
date: "2019-02-18"
tag: "前端"
link: "20190218"
createdate: "2019-02-18"
updatedate: "2019-02-18"
attachments:
  - "test.png"
  - "table.png"
---

## 说明
编写的markdown文件中一般存在图片引用，在不想引入第三方如何基于gatsby提供的服务中实现这些引用呢？而有些图片的大小及格式可能会与页面中的layout以及样式发生冲突

## 实现原理

gatsby-remark-copy-linked-files

图片测试: 
![alt text](test.png "Logo Title Text 1")
![alt text](table.png "Logo Title Text 1")