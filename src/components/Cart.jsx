import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { cartAtom } from "../data/atoms/cartAtom";
import { showCartAtom } from "../data/atoms/showCartAtom";
import styled from "styled-components";

const CartStyled = styled.div`
	position: absolute;
	top: 7.6em;
	right: 0;
	border: 1px solid black;
	background-color: #b6b5b5;
	padding: 1rem;
	min-width: 15rem;
`

const ProductInCart = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5em 0;
`

const Cart = () => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [showCart, setShowCart] = useRecoilState(showCartAtom)


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
					<ProductInCart key={product.productid}>
						<Link to={'/details/' + product.productid}>{product.name}</Link>
						<p>Antal: {product.amount}</p>
						<p>{product.price * product.amount}:-</p>
					</ProductInCart>)
					:
					<div><p>Inga produkter..</p></div>}
				{<p>Totalt: {totalPrice}:-</p>}
			</CartStyled>
		)
	} else {
		return
	}
}

export default Cart