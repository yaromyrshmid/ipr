require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Інститут просторового розвитку",
    description:
      "Львівське комунальне підприємство Інститут просторового розвитку здійснює проектування вулиць, доріг, громадських просторів, парків, об’єктів житлового та господарського призначення",
    author: "yaromyr.shmid",
    twitterUsername: "@yaromyr.shmid",
    image: "/dvirtseva5.jpg",
    siteUrl: "https://ipr-gatsby.netlify.com",
  },
  plugins: [
    "gatsby-plugin-styled-components",
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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ipr-gatsby.netlify.com",
        sitemap: "https://ipr-gatsby.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
