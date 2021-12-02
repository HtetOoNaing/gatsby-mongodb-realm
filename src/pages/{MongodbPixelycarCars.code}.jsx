import React from "react"
import { graphql, Link } from "gatsby"

const Car = ({
  data: {
    allMongodbPixelycarVersions: { nodes },
  },
}) => {
	return (
    <div>
			<h1>Cars</h1>
      {nodes.map(version => (
        <Link key={version.id} to={`/${version.code}`} style={{ padding: 10 }}>
          {version.name}
					<p>{version.currency} - {version.price}</p>
        </Link>
      ))}
    </div>
  )
}

export const query = graphql`
  query GetCarVersions($code: String) {
		allMongodbPixelycarVersions(
    filter: {car: {code: {eq: $code}}}
    sort: {order: ASC, fields: name}
  ) {
    nodes {
      id
      name
      code
      image
      price
      currency
      car {
        code
      }
    }
  }
  }
`

export default Car
