module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`default`]
      }
    },
    `babel-plugin-styled-components`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Audiowide'
          }
        ]
      }
    }
  ],
}