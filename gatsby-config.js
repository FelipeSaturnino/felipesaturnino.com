require('dotenv').config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Felipe Saturnino`,
    position: `Psicólogo`,
    description: `Um blog que trata de assuntos variados sob a luz da Psicologia.`,
    author: `@FelipeSaturnino`,
    authorDescription: `CRP | 06/168338`,
    siteUrl: `https://www.felipesaturnino.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // needs to be the first one to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-relative-images",
              options: {
                name: "uploads"
              }
            },
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 960,
                linkImagesToOriginal: false,
              },
            },
            `gatsby-remark-emoji`,
            `gatsby-remark-lazy-load`,
            `gatsby-remark-prismjs`,
          ],
        },
      },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felipe Saturnino`,
        short_name: `Felipe S`,
        start_url: `/`,
        background_color: `#f0f0f3`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `static/assets/img/felipesaturnino-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
