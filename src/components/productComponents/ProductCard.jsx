import styled from "styled-components"
import { Link } from "react-router-dom"


const Card = styled.div`
	padding: 1em;
	border-radius:1em;
	display: flex;
	flex-direction:column;
	
	@media (min-width: 400px) {
		box-shadow: 0.3em 0.3em 1em lightgray;
	}  

	@media (min-width: 1000px) {
	&:hover {
		box-shadow: 0.2em 0.2em 0.6em lightgray;
		transform: scale(1.075)
	}
}
`

const CardImg = styled.img`
	width: 100%;
	aspect-ratio: 1/1;
	object-fit: cover;

`

const CardContentContainer = styled.div`
	padding: 1em;
	display: flex;
	flex-direction:column;
	justify-content: space-between;
	flex-grow: 1;
`

const CardPrice = styled.p`
	align-self: flex-end;
	margin-top: 0.5em;
	font-weight: bold;
	font-size: 1.2em;
`

const ProductCard = ({ name, price, img, id }) => (
	<Card>
		<CardImg src={img[0]} alt={name} />
		<CardContentContainer>
			<h3><Link to={'/details/' + id}>{name}</Link></h3>
			<CardPrice>{price}:-</CardPrice>
		</CardContentContainer>
	</Card>
)

export default ProductCard