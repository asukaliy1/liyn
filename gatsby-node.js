
const path = require('path');

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
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                    title
                    date
                    tag
                    link
                }
                rawMarkdownBody
              }
            }
          }
        }
      `).then(result => {
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