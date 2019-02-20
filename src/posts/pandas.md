---
title: "Sweet Pandas Eating Sweets（测试）"
date: "2017-08-10"
tag: "pandas"
link: "20170810"
---


Pandas are really sweet.

Here's a video of a panda eating sweets.

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