import React from "react"
import { graphql, Link } from "gatsby"

const Manufacturer = ({
  data: {
    allMongodbPixelycarCountries: { nodes },
  },
}) => {
  return (
    <div>
      <h1>Countries</h1>
      {nodes.map(country => (
        <Link
          key={country.code}
          to={`/${country.code}`}
          style={{ padding: 10 }}
        >
          {country.name}
        </Link>
      ))}
    </div>
  )
}

export const query = graphql`
  query GetCountries($code: String) {
    allMongodbPixelycarCountries(
      filter: { manufacturers: { elemMatch: { code: { eq: $code } } } }
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

export default Manufacturer
