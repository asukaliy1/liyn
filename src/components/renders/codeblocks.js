/** @jsx jsx */
import React, { Component } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/dracula.css";
//import 'highlight.js/styles/default.css';
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'


class CodeBlock extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
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
      <div css={codeblock}>
        <CodeFileName>test.javascript</CodeFileName>
        <div>
          <pre style={{ backgroundColor: "#1d1f21" }}>
            <code ref={this.setRef} className={`language-${this.props.language}`}>
              {this.props.value}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
const CodeFileName = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  right: auto;
  bottom: auto;
  left: auto;
  top: 4px;
  display: inline-block;
  background-color: #1d1f21;
  color: rgb(255, 255, 255);
  font-size: 85%;
  line-height: 1.5;
  margin-bottom: 0px;
  padding: 3px 10px
`;


const codeblock = css`
  display: flex;
  flex-direction: column;

`

export default CodeBlock;
