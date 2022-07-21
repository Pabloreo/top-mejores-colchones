module.exports = {
  siteMetadata: {
    title: `Top 5 mejores colchones`,
    description: `Descubre los mejores colchones de México.`,
    author: `@Peibol`,
    siteUrl: `http://localhost:8000`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
          "YOUR GA-TRACKING_ID", // Google Analytics / GA
          ],
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true
          },
        },
      }
  ]
};
