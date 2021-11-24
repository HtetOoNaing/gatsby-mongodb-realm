import React, { useEffect, useState } from "react"
import * as Realm from 'realm-web'

export default function Home() {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const REALM_APP_ID = process.env.REALM_APP_ID;
			const app = new Realm.App({ id: REALM_APP_ID });
			const credentials = Realm.Credentials.anonymous();
			try {
				const user = await app.logIn(credentials);
				const allCountries = await user.functions.getAllCountries();
				console.log(allCountries);
				setCountries(allCountries)
			} catch(err) {
				console.error("Failed to log in", err);
			}
		}
		fetchData()
	}, [])
	return <div>
		{countries.map(country => <p key={country.code}>{country.name}</p>)}
	</div>
}
