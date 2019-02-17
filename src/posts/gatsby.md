---
title: "Gasty开发使用"
date: "2019-12-11"
tag: "Gatsby,react"
link: "20191215"
---

# Gasty开发使用

一直以来都是用之前比较流行的静态网站生成器Hexo加Markdown来更新自己的静态站博客。偶然的机会，遇到了又一静态网站生成神器Gatsby ，直接迷上了，根本停不下来，原来静态网站还可以用react来写，组件化的思想解放了我们对静态网站的想象空间，让我们更新网站的方式直接上了一个档次

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

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    console.log(this.codeEl);
    hljs.highlightBlock(this.codeEl)
  }

  render() {
    return (
      <pre style={{backgroundColor:'#1d1f21'}}>
        <code ref={this.setRef} className={`language-${this.props.language}`} >
          {this.props.value}
        </code>
      </pre>
    )
  }
}


export default CodeBlock;
```

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe> -->