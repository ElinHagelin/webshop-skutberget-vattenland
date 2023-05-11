import styled from "styled-components"
import { Link } from "react-router-dom"
import addToCart from "../../utils/AddToCart"
import { useRecoilState } from "recoil"
import { cartAtom } from "../../data/atoms/cartAtom"
import { loggedInAtom } from "../../data/atoms/loggedInAtom"
import deleteBin from '../../assets/icons/delete-bin-line.png'
import { deleteProduct } from "../../utils/ajax/ajaxProducts"


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

const CardLink = styled(Link)`
	color: black;
	text-decoration: none;
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

// const CardHeading = styled(Link)`
// 	color: black;
// 	text-decoration: none;
// `

const CardPrice = styled.p`
	align-self: flex-end;
	margin-top: 0.5em;
	font-weight: bold;
	font-size: 1.2em;
`

export const AddButton = styled.button`
	max-width: fit-content;
	font-size: 1.1em;
	padding: 0.3em 0.8em;
	align-self: center;
	border-radius: 0.5em;
	background-color: #A7CBD2;
	border: 1px solid #90bcc4;
	box-shadow: 0.3em 0.3em 1em lightgray;
	cursor: pointer;

	&:hover {
		background-color: #89bdc7;
		border: 1px solid #7eb0b9;
	}
`

const DeleteButton = styled.button`
	max-width: fit-content;
	padding: 0.3em 0.8em;
	align-self: center;
	border-radius: 0.5em;
	background-color: #A7CBD2;
	border: 1px solid #90bcc4;
	box-shadow: 0.3em 0.3em 1em lightgray;

	&:hover {
		background-color: #89bdc7;
		border: 1px solid #7eb0b9;
	}
`

const ProductCard = ({ product }) => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [loggedIn] = useRecoilState(loggedInAtom)

	// console.log(product.picture[0]);

	if (product) {
		return (
			<Card>
				<CardLink to={'/details/' + product.id}>
					<CardImg src={product.picture} alt={product.name} />
					<CardContentContainer>
						<h3>{product.name}</h3>
						<CardPrice>{product.price}:-</CardPrice>
						{!loggedIn
							? <AddButton onClick={() => addToCart(product, cart, setCart)}>Lägg till</AddButton>
							: <DeleteButton onClick={() => deleteProduct(product.id)}> <img src={deleteBin} alt="Ta bort" /> </DeleteButton>
						}
					</CardContentContainer>
				</CardLink>
			</Card>
		)
	}
}

export default ProductCard