import { useRecoilState } from "recoil";
import { Link, NavLink } from "react-router-dom";
import { cartAtom } from "../data/atoms/cartAtom";
import { showCartAtom } from "../data/atoms/showCartAtom";
import styled from "styled-components";
import addToCart from "../utils/AddToCart";
import removeFromCart from "../utils/removeFromCart";
import { Button } from "./BasicStyles";

const CartStyled = styled.div`
	position: absolute;
	top: 7.6em;
	right: 0;
	border: 1px solid black;
	background-color: #ffffff;
	padding: 1rem 2rem;
	min-width: 15rem;
	z-index: 1;
	display: flex;
	flex-direction: column;
	border-radius: 0 0 0 1em;
	min-width: 18rem;
`

export const ProductInCart = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.5fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: 
	'name price'
	'amount amount';
	margin: 0.5em 0;
	border: 1px solid black;
	border-radius: 0.5em;
	padding: 0.5em;
`

export const ProductName = styled(Link)`
	grid-area: name;
	color: black;
`

export const Price = styled.p`
	grid-area: price;
	place-self: start end;
`

export const Amount = styled.div`
	grid-area: amount;
`

const ChangeAmountButton = styled.button`
	padding: 0.2em 0.3em;
	margin: 0 0.2em;
`

const TotalPrice = styled.p`
	font-weight: bold;
	align-self: center;
`

const GoToCartButton = styled(Button)`
	margin-top: 1em;

	& a {
		color: black;
		text-decoration: none;
	}
`

const Cart = () => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [showCart] = useRecoilState(showCartAtom)


	let totalPrice = 0
	cart && cart.map(product => {
		let productPrice = product.price * product.amount
		totalPrice = totalPrice + productPrice
	})

	if (showCart) {
		return (
			<CartStyled>
				<h3>Kundvagn</h3>
				{cart ? cart.map(product =>
					<ProductInCart key={product.id}>
						<ProductName to={'/details/' + product.id}>{product.name}</ProductName>
						<Price>{product.price * product.amount}:-</Price>
						<Amount>
							<p>Antal: <span><ChangeAmountButton onClick={() => removeFromCart(product, cart, setCart)}>-</ChangeAmountButton></span> {product.amount} <span><ChangeAmountButton onClick={() => addToCart(product, cart, setCart)}>+</ChangeAmountButton></span></p>
						</Amount>
					</ProductInCart>)
					:
					<div><p>Inga produkter..</p></div>}
				{<TotalPrice>Totalt: {totalPrice}:-</TotalPrice>}
				<GoToCartButton><NavLink to={'/cart'}>Gå till kundvagen</NavLink></GoToCartButton>
			</CartStyled>
		)
	} else {
		return
	}
}

export default Cart