
/** @jsx jsx */
import { graphql } from "gatsby";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout";
import Post from "../components/post";
import dayjs from 'dayjs';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Helmet } from "react-helmet"

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 4px;
  color: #222;
  font-family: -apple-system, "Microsoft YaHei", "Helvetica Neue",
    "Hiragino Sans", "YuGothic",
    "Hiragino Kaku Gothic ProN","Meiryo,sans-serif";
  @media (min-width: 600px) {
    font-size: 30px;
  }
`
const blank = css`
  margin-top: 25px;
`

const Paragraph = ({ location, data }) => {

  const node = data.markdownRemark;
  //console.log(node);
  return (
    <div>
      <Layout location={location}>
        <Helmet title={`mottox2 blog`}>
          <meta
            name="description"
            content={
              "mottox2のエンジニア・デザインブログ。RailsとかReactとかTypeScriptとかを中心に書いています。"
            }
          />
          <link href="https://unpkg.com/nes.css@2.0.0/css/nes.min.css" rel="stylesheet" />
        </Helmet>

        <Container>
          <MainColumn>
            <article>
              {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
              <div key={node.frontmatter.id}>
                {/* <h3>
                                    {node.frontmatter.title}{" "}
                                    <span style={{ color: "#bbb" }}>
                                        — {node.frontmatter.date}
                                    </span>
                                </h3> */}
                <time
                  css={css`
                display: block;
                margin-bottom: 4px;
                font-weight: 600;
                letter-spacing: 0.5px;
                opacity: 0.6;
                font-size: 15px;
              `}
                >
                  {dayjs(node.frontmatter.date).format('YYYY.MM.DD')}
                </time>
                <Title dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
                {/* <Category to={`/categories/${category}`}>{category}</Category> */}
                <div css={blank}>
                  <Post picUrl={node.frontmatter.attachments} rawMd={node.rawMarkdownBody} />
                </div>
              </div>

            </article>

          </MainColumn>
          <Sidebar UserInformation={data.site.siteMetadata} />
        </Container>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query PostByLink($link: String!){
    site {
      ...UserInformation
    }
    markdownRemark(
        frontmatter:{
            link:{
                eq: $link
            }
        }
    ) {
        frontmatter {
            title
            date
            attachments {
              publicURL
            }
        }
        rawMarkdownBody
    }
  }
`;


const Container = styled.div`
  /* max-width: 980px; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  @media (min-width: 980px) {
    flex-direction: row;
  }
  
`;

const MainColumn = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
`;

// const Pagination = styled.article`
//   display: flex;
//   width: 100%;
//   margin: 24px 0;
//   padding: 0 12px;
// `;
export default Paragraph;
