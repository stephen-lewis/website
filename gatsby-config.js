module.exports = {
  siteMetadata: {
    siteUrl: "https://stephen-lewis.me.uk"
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-top-layout",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-manifest",
    "gatsby-plugin-offline",
    "gatsby-source-filesystem",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/"
      }
    }
  ]
};
