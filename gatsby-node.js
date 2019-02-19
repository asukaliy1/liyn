
const path = require('path');
const createPaginatedPages = require('gatsby-paginate')

// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   console.log(node);
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
        {
          allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
        }
      `).then(result => {
       // console.log(result);
        createPaginatedPages({
          edges: result.data.allMarkdownRemark.edges,
          createPage: createPage,
          pageTemplate: 'src/templates/index.js',
          pageLength: 5, // This is optional and defaults to 10 if not used
          pathPrefix: '', // This is optional and defaults to an empty string if not used
          buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/page/${index}` : `/${pathPrefix}`,
          context: {

          }, // This is optional and defaults to an empty object if not used
        })

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          //console.log(node.frontmatter.link);
          // const { title,date,link} = node.frontmatter;
          // console.log(link);
          createPage({
            path: node.frontmatter.link,
            component: path.resolve(`./src/templates/paragraphs.js`),
            //component: paragraphs,
            context: {
              link: node.frontmatter.link,
              attachments: node.frontmatter.attachments,
            },
          })
        })
        resolve()
    })
  })
}