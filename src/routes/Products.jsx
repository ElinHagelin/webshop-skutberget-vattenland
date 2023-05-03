import styled from "styled-components";
import ProductCard from "../components/productComponents/ProductCard";
import testData from "../data/testdata";
import { useState } from "react";


const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
	@media (min-width: 400px) {
    gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }
	@media (min-width: 770px) {
		padding: 3em;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	}
	
	@media (min-width: 1000px) {
		padding: 3em 5em;
		gap:2em;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`

function stringIncludes(longString, shortString) {
	let ls = longString.toLowerCase()
	let ss = shortString.toLowerCase()
	return ls.includes(ss)
}
function productMatch(product, searchString) {
	if (stringIncludes(product.name, searchString)) {
		return true
	} else {
		return false
	}
}

const Products = () => {
	const [matches, setMatches] = useState(testData)

	const handleChange = event => {
		let searchString = event.target.value
		setMatches(testData.filter(product => productMatch(product, searchString)))
	}

	return (
		<div>
			<h1>Products</h1>
			<input
				type="text"
				placeholder="Sök efter produkt.."
				onChange={handleChange} />
			<ProductGrid>
				{matches.map(({ productid, name, price, picture }) => (
					<ProductCard key={productid} name={name} price={price} img={picture} />
				))}
			</ProductGrid>
		</div>
	)
}



export default Products