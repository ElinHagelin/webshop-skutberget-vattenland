import styled from "styled-components"


const Card = styled.div`
	background-color: pink;
`

const ProductCard = ({ name, price }) => (
	<Card>
		<h3>{name}</h3>
		<p>{price}:-</p>
	</Card>
)

export default ProductCard