
const path = require('path');


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
            result.data.allMarkdownRemark.edges.forEach(( {node}) => {
                //console.log(node.frontmatter.link);
                // const { title,date,link} = node.frontmatter;
                // console.log(link);
                createPage({
                    path: node.frontmatter.link,
                    component: path.resolve(`./src/templates/paragraphs.js`),
                     context: {
                       link: node.frontmatter.link,
                     },
                })
            })
            resolve()
        })
    })
}