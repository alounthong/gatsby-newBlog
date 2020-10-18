/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config(
  {
    path:`.env.${process.env.NODE_ENV}`,
  }
)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Blog Test",
    description: "new test blog made by alounthong",
    author: "Alounthong",
    data: ["item1", "item2"],
    person: {
      name: "peter", 
      age: 24
    }
  },
  plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f39bp82totf8`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN
      },
    },
  ],
}
