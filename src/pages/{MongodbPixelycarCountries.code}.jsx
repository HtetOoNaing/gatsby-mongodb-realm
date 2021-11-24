import React from "react"
import { graphql, Link } from "gatsby"

const Country = ({
  data: {
    allMongodbPixelycarManufacturers: { nodes },
  },
	params: { code }
}) => {
  return (
    <div>
      <h1>Manufacturers</h1>
      {nodes.map(manufacturer => (
        <Link
          key={manufacturer.code}
          to={`/${code}/${manufacturer.code}`}
          style={{ padding: 10 }}
        >
          {manufacturer.name}
        </Link>
      ))}
    </div>
  )
}

export const query = graphql`
  query GetManufacturers($code: String) {
    allMongodbPixelycarManufacturers(
      filter: { countries: { elemMatch: { code: { eq: $code } } } }
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

export default Country
