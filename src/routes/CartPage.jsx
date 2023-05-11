import { useRecoilState } from "recoil"
import styled from "styled-components"
import { cartAtom } from "../data/atoms/cartAtom"
import { ProductInCart, ProductName, Price, Amount } from "../components/Cart"


const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Name = styled(ProductName)`
	font-size: 1.1em;
`



const CartPage = () => {
	const [cart, setCart] = useRecoilState(cartAtom)

	let totalPrice = 0
	cart && cart.map(product => {
		let productPrice = product.price * product.amount
		totalPrice = totalPrice + productPrice
	})

	return (
		<Content>
			<h1>Kundvagnen</h1>
			{cart != [] ? cart.map(product =>
				<ProductInCart key={product.id}>
					<Name to={'/details/' + product.id}>{product.name}</Name>
					<Price>{product.price * product.amount}:-</Price>
					<Amount>
						<p>Antal: <span><button onClick={() => removeFromCart(product, cart, setCart)}>-</button></span> {product.amount} <span><button onClick={() => addToCart(product, cart, setCart)}>+</button></span></p>
					</Amount>
				</ProductInCart>)
				:
				<div><p>Inga produkter..</p></div>}
			{totalPrice > 0 && <p>Totalt: {totalPrice}:-</p>}

		</Content>
	)
}

export default CartPage