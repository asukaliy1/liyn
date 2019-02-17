import React, { Component } from "react";

import ReactMarkdown from "react-markdown";


import 'github-markdown-css/github-markdown.css';

import CodeBlock from './codeblocks';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    // marked.setOptions({
    //     renderer: new marked.Renderer(),
    //     highlight: function(code) {
    //       return hljs.highlightAuto(code).value;
    //     },
    //     pedantic: false,
    //     gfm: true,
    //     tables: true,
    //     breaks: false,
    //     sanitize: false,
    //     smartLists: true,
    //     smartypants: false,
    //     xhtml: false
    //   });
  }
  render() {
    return (
      <div className="markdown-body" >
        <ReactMarkdown source={this.props.rawMd} skipHtml={true} renderers={{code: CodeBlock}}/>
      </div>
     
    );
  }
}

export default Post;
