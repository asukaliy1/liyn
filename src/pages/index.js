
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout";
// import { jsx,css } from '@emotion/core'
// import styled from '@emotion/styled'
import PostCell from "../components/postcell";

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


const HomePage = ({ location, data }) => {
  // <div style={{ color: `purple` }}>

  //     <Header location={location} headerText="Hello Gatsby!" />

  //     {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
  //     <Footer />
  // </div>
  // console.log(data);
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

        <Container >
          <MainColumn >

            {data.allMarkdownRemark.edges.map(({ node }) => (
                       
                <PostCell post={node.frontmatter} excerpt={node.excerpt} />
              
            ))}
           
          </MainColumn>
          <Sidebar UserInformation={data.site.siteMetadata} />
        </Container>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query {
    site {
      ...UserInformation
    }
    allMarkdownRemark {
      ...PostExcert
    }
  }
`;


// const Pagination = styled.article`
//   display: flex;
//   width: 100%;
//   margin: 24px 0;
//   padding: 0 12px;
// `;fin
export default HomePage;
