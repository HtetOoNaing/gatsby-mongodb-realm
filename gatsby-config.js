/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
		{
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: "pixelycar",
        collection: [`cars`, `countries`, 'manufacturers', 'versions', 'companies'],
        connectionString: process.env.MONGODB_SERVER,
        preserveObjectIds: true,
        extraParams: {
          replicaSet: "realmcluster-shard-00",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
	],
}
