const { faWordpress } = require('@fortawesome/free-brands-svg-icons')

require('dotenv').config({
  path: '.env',
})


module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Starter`,
    description: `Kick off your next, great Gatsby project with this WordPress starter.`,
    author: `@tomphill`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_1.png`
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: 'wordpress.thefrenchflowercompany.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        restApiRoutePrefix: "index.php/wp-json",
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
          "**/*/gallery",
          "**/block-patterns"
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Taviraj`,
          `Open Sans\:300,400,400i,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-netlify`
  ],
}
