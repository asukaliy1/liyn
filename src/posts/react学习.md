---
title: "react学习路线(测试)"
date: "2018-12-11"
tag: "Gatsby,react"
link: "20181211"
---

# react学习路线(测试)

react 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。

以声明式编写UI，可以让你的代码更加可靠，且方便调试。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned |  |
| col 2 is      | centered      |    |
| zebra stripes | are neat      |     |


[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

```javascript
import React, { Component } from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/dracula.css';
//import 'highlight.js/styles/default.css';

class CodeBlock extends Component {
  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }

  setRef(el) {
    this.codeEl = el
  }

  componentDidMount() {
    this.highlightCode()
  }


}


export default CodeBlock;
```

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe> -->