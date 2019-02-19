import React from 'react';
import { graphql } from "gatsby";
import styled from "styled-components";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout";
import Post from "../components/post";


const Paragraph = ({ location, data }) => {
    // <div style={{ color: `purple` }}>

    //     <Header location={location} headerText="Hello Gatsby!" />

    //     {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
    //     <Footer />
    // </div>
    // console.log(data);
   // console.log(location.pathname);
    const node = data.markdownRemark;
    //console.log(node);
    return (
        <div>
            <Layout location={location}>
                {/* <Helmet title={`mottox2 blog`}>
      <meta
        name="description"
        content={
          "mottox2のエンジニア・デザインブログ。RailsとかReactとかTypeScriptとかを中心に書いています。"
        }
      />
    </Helmet> */}

                <Container>
                    <MainColumn>
                        <article>
                            {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
                            <div key={node.frontmatter.id}>
                                <h3>
                                    {node.frontmatter.title}{" "}
                                    <span style={{ color: "#bbb" }}>
                                        — {node.frontmatter.date}
                                    </span>
                                </h3>

                                <Post picUrl={node.frontmatter.attachments}  rawMd={node.rawMarkdownBody} />
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
