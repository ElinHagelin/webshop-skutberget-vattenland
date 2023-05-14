import styled from "styled-components"
import { Link } from "react-router-dom"
import addToCart from "../../utils/AddToCart"
import { useRecoilState } from "recoil"
import { cartAtom } from "../../data/atoms/cartAtom"
import { loggedInAtom } from "../../data/atoms/loggedInAtom"
import deleteBin from '../../assets/icons/delete-bin-line.png'
import { deleteProduct, getProducts } from "../../utils/ajax/ajaxProducts"
import { Button } from "../BasicStyles"
import { productsAtom } from "../../data/atoms/productsAtom"
import { showCartAtom } from "../../data/atoms/showCartAtom"
import { showCartTemporarilyAtom } from "../../data/atoms/showCartTemporarilyAtom"
import { useEffect } from "react"


const Card = styled.div`
	padding: 1em;
	border-radius:1em;
	display: flex;
	flex-direction:column;
	background-color: #f1fbfc;
	
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

const CardPrice = styled.p`
	align-self: flex-end;
	margin-top: 0.5em;
	font-weight: bold;
	font-size: 1.2em;
`

const DeleteButton = styled(Button)`
	background-color: #A7CBD2;
	border: 1px solid #90bcc4;

	&:hover {
		background-color: #89bdc7;
		border: 1px solid #7eb0b9;
	}
`

const ProductCard = ({ product }) => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [showCart, setShowCart] = useRecoilState(showCartAtom)
	const [loggedIn] = useRecoilState(loggedInAtom)
	const [products, setProducts] = useRecoilState(productsAtom)
	const [showCartTemporarily, setShowCartTemporarily] = useRecoilState(showCartTemporarilyAtom);

	useEffect(() => {
		if (showCartTemporarily) {
			const timer = setTimeout(() => {
				setShowCartTemporarily(false)
				setShowCart(false)
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [showCartTemporarily])

	const handleAddToCart = (e) => {
		e.preventDefault()
		addToCart(product, cart, setCart, showCart, setShowCart, setShowCartTemporarily)
	}
	const handleDeleteFromProductList = async (e, productId) => {
		e.preventDefault()
		const remove = await deleteProduct(productId)
		if (remove) {
			const newProductList = await getProducts()
			setProducts(newProductList)
			console.log('newProductList är: ', newProductList);
		} else {
			console.log('failed to remove');
		}
	}

	if (product) {
		return (
			<Card>
				<CardLink to={'/details/' + product.id}>
					<CardImg src={product.picture} alt={product.name} />
					<CardContentContainer>
						<h3>{product.name}</h3>
						<CardPrice>{product.price}:-</CardPrice>
						{loggedIn === true
							? <DeleteButton onClick={(e) => handleDeleteFromProductList(e, product.id)}><img src={deleteBin} alt="Ta bort" /> </DeleteButton>
							:
							<Button onClick={handleAddToCart}>Lägg till</Button>
						}
					</CardContentContainer>
				</CardLink>
			</Card>
		)
	}
}

export default ProductCard