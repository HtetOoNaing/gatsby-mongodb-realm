import React from "react"
import { graphql, Link } from "gatsby"

const Manufacturer = ({
  data: {
    allMongodbPixelycarCountries: { nodes },
  },
  params: { code },
}) => {
  return (
    <div>
      <h1>Countries</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {nodes.map(country => (
          <Link
            key={country.code}
            to={`/${country.code}/${code}`}
            style={{ padding: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={country.flag}
                alt="flag"
                style={{ width: 50, height: 30, marginRight: 10 }}
              />
              {country.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query GetCountries($code: String) {
    allMongodbPixelycarCountries(
			sort: {fields: name, order: ASC}
      filter: { manufacturers: { elemMatch: { code: { eq: $code } } } }
    ) {
      nodes {
        id
        mongodb_id
        name
        code
        flag
      }
    }
  }
`

export default Manufacturer
