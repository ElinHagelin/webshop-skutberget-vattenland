import styled from "styled-components";
import ProductCard from "../components/productComponents/ProductCard";
import testData from "../data/testdata";
import productSorting from "../utils/productSorting";
import productMatch from "../utils/searchFunctions";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { productsAtom } from "../data/atoms/productsAtom";


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

// function stringIncludes(longString, shortString) {
// 	let ls = longString.toLowerCase()
// 	let ss = shortString.toLowerCase()
// 	return ls.includes(ss)
// }
// function productMatch(product, searchString) {
// 	if (stringIncludes(product.name, searchString)) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

const Products = () => {
	const [productsToShow, setProductsToShow] = useRecoilState(productsAtom)

	const handleSearchChange = event => {
		let searchString = event.target.value
		setProductsToShow(testData.filter(product => productMatch(product, searchString)))
	}

	const handleSortingChange = event => {
		console.log(event.target.value);
		productSorting(event.target.value, productsToShow, setProductsToShow)
	}

	return (
		<div>
			<h1>Products</h1>
			<input
				type="text"
				placeholder="Sök efter produkt.."
				onChange={handleSearchChange} />
			<select name="sort" id="sort-select" onClick={handleSortingChange}>
				<option value="popular">Mest populära</option>
				<option value="alpha-rising" >A till Ö</option>
				<option value="alpha-falling">Ö till A</option>
				<option value="price-rising">Lägst pris</option>
				<option value="price-falling">Högst pris</option>
			</select>
			<ProductGrid>
				{productsToShow.map(({ productid, name, price, picture }) => (
					<ProductCard key={productid} name={name} price={price} img={picture} />
				))}
			</ProductGrid>
		</div>
	)
}



export default Products