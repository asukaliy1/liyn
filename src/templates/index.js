/** @jsx jsx */
import { graphql } from "gatsby";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout";
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import PostCell from "../components/postcell";
import { Link } from 'gatsby'
//require('nes.css');
import { Helmet } from "react-helmet"


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


const HomePage = ({ data, location, pageContext }) => {

  const { group, index, first, last, additionalContext } = pageContext;
  const previousUrl = index - 1 === 1 ? '/' : `/page/${index - 1}`;
  const nextUrl = `/page/${index + 1}`;
 // console.log(pageContext);
  return (
    <div>
      <Layout location={location}>
        <Helmet title={`liy的博客`}>
          <meta
            name="description"
            content={
              "mottox2のエンジニア・デザインブログ。RailsとかReactとかTypeScriptとかを中心に書いています。"
            }
          />

          <link href="https://unpkg.com/nes.css@2.0.0/css/nes.min.css" rel="stylesheet" />
        </Helmet>

        <Container >
          <MainColumn >

            {group.map(({ node }) => (

              <PostCell post={node.frontmatter} excerpt={node.excerpt} />

            ))}
            <Pagination>
              {!first && <Link className='nes-btn is-primary' style={{padding:'0px 2px'}} to={previousUrl}>{'< Previous'}</Link>}
              {!last && (
                <Link  className='nes-btn is-primary' style={{ marginLeft: 'auto', padding:'0px 2px'}} to={nextUrl}>
                  {'Next >'}
                </Link>
              )}
            </Pagination>
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
      siteMetadata {
          authorName
          role
      }
    }
  }
`;

//style={{ marginLeft: 'auto' }}
const Pagination = styled.div`
  display: flex;
  width: 100%;
  margin: 24px 0;
  padding: 0 12px;
`

const btnPos = css`
  margin-left: auto;
`;

export default HomePage;
