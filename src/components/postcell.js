
/** @jsx jsx */
import { Link } from 'gatsby'

import { graphql } from "gatsby";
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import dayjs from 'dayjs';


const cell = css`
  height: 100%;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  padding: 20px 12px;
  @media (min-width: 624px) {
    padding-left: 0;
    padding-right: 0;
  }
  &:hover .title {
    color: #4d9abf;
  }
`

const Category = styled.div`
  background-color: white;
  font-weight: 600;
  display: inline-block;
  font-size: 12px;
  background-image: linear-gradient(
    45deg,
    rgb(77, 154, 191) 0px,
    rgb(0, 162, 199) 100%
  );
  color: white;
  text-transform: capitalize;
  letter-spacing: 0.2px;
  border-style: solid;
  border-color: rgb(221, 221, 221);
  border-image: initial;
  margin: 0px 8px 4px 0px;
  padding: 4px 6px;
  border-radius: 3px;
  border-width: 0px;
`

const CellContent = styled.div`
  margin-bottom: 8px;
`

const PostTitle = styled.h3`
  margin-bottom: 1px;
  font-size: 18px;
  line-height: 1.48;
  color: #222;
`

const PostDescription = styled.p`
  opacity: 0.58;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
  overflow-y: hidden;
  max-height: ${14 * 1.6 * 3}px;
  text-decoration: none;
`

const CellFooter = styled.div`
  /* border-top: 1px solid #eee; */
  margin-top: auto;
`

const Day = styled.time`
  font-size: 12px;
  font-weight: 700;
  color: #666;
  &:after {
    content: " ";
    width: 1px;
    height: 100%;
    background-color: #ddd;
    display: inline-block;
  }
`

const Tag = styled.span`
  font-size: 12px;
  margin-left: 4px;
  &:before {
    content: "#";
  }
`

const PostLink = ({ node, children }) => {
  const link = css`
    box-shadow: none;
    color: inherit;
    display: block;
    text-decoration: none;
  `;

  //console.log(node.link);
  return node.link ? (
    // <a href={node.link} css={link} target="_blank" rel="noopener noreferrer">
    //   {children}
    // </a>
    <Link css={link} to={`/${node.link}`}>
      {children}
    </Link>
  ) : (
      <Link css={link} to={`/posts/${node.number}`}>
        {children}
      </Link>
    )
}



const PostCell = ({ post, excerpt }) => {
  const postNode = post;
  const { tag, date } = post;

  //console.log(excerpt);

  return (
    <div>
      <PostLink node={postNode} key={postNode.number || postNode.link}>
        <div css={cell}>
          <CellContent>
            {postNode.link ? (
              <Category type={'note'}>note</Category>
            ) : (
                <Category type={'blog'}>
                  {postNode.relative_category || 'blog'}
                </Category>
              )}
            <PostTitle
              className="title"
              dangerouslySetInnerHTML={{ __html: postNode.title }}
            />
            <PostDescription>
              {/* {postNode.excerpt.slice(0, 100)} */}
              {excerpt}
            </PostDescription>
          </CellContent>
          <CellFooter>
            <Day>
              {dayjs(date).format(
                'YYYY/MM/DD',
              )}
            </Day>
            {tag &&
              tag.split(',').map((tagName) => {

                return <Tag key={tagName}>{tagName}</Tag>
              })}
          </CellFooter>
        </div>
      </PostLink>
      <div></div>
    </div>
  );
};



export const query = graphql`
  fragment PostExcert on MarkdownRemarkConnection {
    edges {
        node {
          frontmatter {
            title
            date
            tag
            link
          }
          rawMarkdownBody
          excerpt
          timeToRead
          html
        }
    }
  }
`;

export default PostCell

