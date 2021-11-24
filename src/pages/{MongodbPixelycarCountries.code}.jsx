import React from 'react'
import { graphql, Link } from "gatsby"

const Country = ({data: { allMongodbPixelycarManufacturers: { nodes } }}) => {
	return (<div>
		<h1>Manufacturers</h1>
		{nodes.map(manufacturer => (
			<Link key={manufacturer.code} to={`/${manufacturer.code}`} style={{padding: 10}}>{manufacturer.name}</Link>
		))}
	</div>)
}

export const query = graphql`
	query GetManufacturer($mongodb_id: String){
    allMongodbPixelycarManufacturers(
      filter: {countries: {elemMatch: {_id: {eq: $mongodb_id}}}}
    ) {
      nodes {
        id
        mongodb_id
        name
        code
      }
    }
  }
`

export default Country;