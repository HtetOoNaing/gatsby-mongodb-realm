exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
	query CountriesWithManufacturers {
		allMongodbPixelycarCountries {
			nodes {
				id
				code
				manufacturers {
					_id
					code
				}
			}
		}
	}
  `)
  data.allMongodbPixelycarCountries.nodes.forEach(country => {
		country.manufacturers.forEach(manu => {
			actions.createPage({
				path: `${country.code}/${manu.code}`,
				component: require.resolve(`./src/templates/car-template.jsx`),
				context: { countryCode: country.code, manufacturerCode: manu.code },
			})
		})
  })
}