/** @jsx jsx */
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { jsx,css } from '@emotion/core';
import styled from '@emotion/styled'
import 'github-markdown-css/github-markdown.css';
import CodeBlock from './renders/codeblocks';
//import Pic from './renders/pic';


const test = css`
  text-indent: 2em;
`

const Pa = styled.p`
  text-indent: 2em; 
`
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }


  render() {
    const Pic = (props) => {
      //console.log(props.src);
      const urlList = this.props.picUrl;
      const regex = /\w*/g;
      const res = urlList.filter((url)=>{
          const res = url.publicURL.match(regex);
          //console.log(res);
          const name = `${res[3]}.${res[7]}`;
         // console.log(name);
          return (name === props.src);
      })
      const picSrc = res[0].publicURL;
     // console.log(src1);
      return (
        // <img src={withPrefix(props.src)}></img>
         <img src={picSrc} />
       
      )
    }
    const parag = (props) => {
      console.log(props);
      return (
        <Pa>{props.children}</Pa>
      )
    }
    return (     
      <div className="markdown-body" >     
        <ReactMarkdown source={this.props.rawMd} skipHtml={true}
          renderers={{paragraph:parag, image: Pic, code: CodeBlock }} />
      </div>    
    );
  }
}


export default Post;
