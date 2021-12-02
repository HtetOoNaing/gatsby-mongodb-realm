import React from "react"
import { graphql, Link } from "gatsby"

const CarTemplate = ({
  data: {
    allMongodbPixelycarCars: { nodes },
  },
}) => {
  return (
    <div>
			<h1>Cars</h1>
      {nodes.map(car => (
        <Link key={car.id} to={`/${car.code}`} style={{ padding: 10 }}>
          {car.name}
        </Link>
      ))}
    </div>
  )
}

export const query = graphql`
  query GetAllCars($countryCode: String, $manufacturerCode: String) {
    allMongodbPixelycarCars(
      filter: {
        country: { code: { eq: $countryCode } }
        manufacturer: { code: { eq: $manufacturerCode } }
      }
    ) {
      nodes {
        id
        name
				code
        mongodb_id
      }
    }
  }
`

export default CarTemplate
