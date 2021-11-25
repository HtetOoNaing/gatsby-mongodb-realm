import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data: { allMongodbPixelycarCountries, allMongodbPixelycarManufacturers } }) {
	// const [countries, setCountries] = useState([]);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const REALM_APP_ID = process.env.REALM_APP_ID;
	// 		const app = new Realm.App({ id: REALM_APP_ID });
	// 		const credentials = Realm.Credentials.anonymous();
	// 		try {
	// 			const user = await app.logIn(credentials);
	// 			const allCountries = await user.functions.getAllCountries();
	// 			console.log(allCountries);
	// 			setCountries(allCountries)
	// 		} catch (err) {
	// 			console.error("Failed to log in", err);
	// 		}
	// 	}
	// 	fetchData()
	// }, [])
	return <div>
		<h1>Countries</h1>
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
			{allMongodbPixelycarCountries.nodes.map(country => (
				<Link key={country.code} to={`/${country.code}`} style={{ padding: 10 }}><div style={{ display: "flex", alignItems: 'center' }}><img src={country.flag} alt="flag" style={{ width: 50, height: 30, marginRight: 10 }} />{country.name}</div></Link>
			))}
		</div>
		<h1>Manufacturers</h1>
		{allMongodbPixelycarManufacturers.nodes.map(manufacturer => (
			<Link key={manufacturer.code} to={`/${manufacturer.code}`} style={{ padding: 10 }}>{manufacturer.name}</Link>
		))}
	</div>
}

export const query = graphql`
  {
    allMongodbPixelycarCountries {
      nodes {
        id
        code
        name
        mongodb_id
				flag
      }
    }
    allMongodbPixelycarManufacturers {
      nodes {
        id
        mongodb_id
        name
        code
      }
    }
  }
`