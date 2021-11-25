import React from "react"
import { graphql, Link } from "gatsby"

const Country = ({
  data: {
    allMongodbPixelycarManufacturers: { nodes },
  },
  params: { code },
}) => {
  return (
    <div>
      <h1>Manufacturers</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {nodes.map(manufacturer => (
          <Link
            key={manufacturer.code}
            to={`/${code}/${manufacturer.code}`}
            style={{ padding: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={manufacturer.logo}
                alt="flag"
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
              {manufacturer.name}
            </div>
          </Link>
        ))}
      </div>
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
        logo
      }
    }
  }
`

export default Country
