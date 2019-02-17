import React, { Component } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/dracula.css";
//import 'highlight.js/styles/default.css';

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(el) {
    this.codeEl = el;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    //console.log(this.codeEl);
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    return (
      <pre style={{ backgroundColor: "#1d1f21" }}>
        <code ref={this.setRef} className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </pre>
    );
  }
}

export default CodeBlock;
