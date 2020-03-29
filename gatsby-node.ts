import path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const locales = ['de', 'en', 'mk', 'al']

export async function createPages ({actions}) {
  actions.createPage({
    path: "/homepage/",
    component: path.resolve(__dirname, 'src/routes/Homepage/Homepage.tsx'),
  })
}

// export async function onCreateNode ({ node, actions, createNodeId }) {
//   if(node.sourceInstanceName === 'pages'){
//     const rawPage = require(node.absolutePath)
//     locales.forEach(locale => {
//       let page = {}
//       for(let key in rawPage) {
//         if(typeof rawPage[key] !== 'object') page[key] = rawPage[key]
//         else if(!rawPage[key].__localized) page[key] = rawPage[key]
//         else page[key] = rawPage[key][locale] || ''
//       }

//       actions.createNode({
//         ...page,
//         _locale: locale,
//         id: createNodeId(`Page-${node.id}-${locale}`),
//         parent: node.id,
//         internal: {
//           type: 'Page',
//           contentDigest: node.internal.contentDigest,
//           mediaType: `application/json`
//         }
//       })
//     })
//   }
// }