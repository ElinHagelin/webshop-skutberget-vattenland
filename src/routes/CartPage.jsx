import { useRecoilState } from "recoil"
import styled from "styled-components"
import { cartAtom } from "../data/atoms/cartAtom"
import { ProductInCart, ProductName, Price, Amount, ChangeAmountButton, TotalPrice } from "../components/Cart"


const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding: 1em;
`

const CartHeading = styled.h1`
	margin-bottom: 0.5em;
`

const Name = styled(ProductName)`
	font-size: 1.1em;
`

const ProductOnCartPage = styled(ProductInCart)`
	min-width: 16em;
`

const TotalPriceInCart = styled(TotalPrice)`
	margin-top: 2em;
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
			<CartHeading>Kundvagnen</CartHeading>
			{cart != [] ? cart.map(product =>
				<ProductOnCartPage key={product.id}>
					<Name to={'/details/' + product.id}>{product.name}</Name>
					<Price>{product.price * product.amount}:-</Price>
					<Amount>
						<p>Antal: {product.amount}</p>
					</Amount>
				</ProductOnCartPage>)
				:
				<div><p>Inga produkter..</p></div>}
			{totalPrice > 0 && <TotalPriceInCart>Totalt: {totalPrice}:-</TotalPriceInCart>}

		</Content>
	)
}

export default CartPage