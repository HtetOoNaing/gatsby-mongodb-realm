import React from "react"
import { graphql } from "gatsby"

const CarDetails = ({ data }) => {
	const car = data.mongodbPixelycarCars;
  return (
    <div>
      <h1>{car.name}</h1>
			<p>{car.currency} - {car.price}</p>
			<p>{car.country.name}</p>
			<p>{car.manufacturer.name}</p>
    </div>
  )
}

export const query = graphql`
  query GetCarDetails($id: String) {
		mongodbPixelycarCars(id: {eq: $id}) {
			id
			mongodb_id
			name
			price
			currency
			country {
				_id
				code
				name
			}
			manufacturer {
				_id
				code
				name
			}
		}
  }
`

export default CarDetails
