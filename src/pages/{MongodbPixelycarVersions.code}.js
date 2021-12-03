import React from "react"
import { graphql } from "gatsby"

const CarDetails = ({ data }) => {
	const car = data.mongodbPixelycarVersions;
  return (
    <div>
      <h1>{car.name}</h1>
			<p>{car.currency} - {car.price}</p>
    </div>
  )
}

export const query = graphql`
  query GetCarDetails($id: String) {
		mongodbPixelycarVersions(id: {eq: $id}) {
			id
			mongodb_id
			name
			price
			currency
		}
  }
`

export default CarDetails
