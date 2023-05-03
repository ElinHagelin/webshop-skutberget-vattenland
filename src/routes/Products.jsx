import styled from "styled-components";
import ProductCard from "../components/productComponents/ProductCard";
import testData from "../data/testdata";


const Products = () => (
	<div>
		<h1>Products</h1>
		{testData.map(product => (
			<ProductCard name={product.name} price={product.price} />
		))}
	</div>
)


export default Products