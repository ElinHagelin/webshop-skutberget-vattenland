import { useRecoilState } from "recoil";
import { cartAtom } from "../data/atoms/cartAtom";
import { showCartAtom } from "../data/atoms/showCartAtom";
import styled from "styled-components";

const CartStyled = styled.div`
	position: absolute;
	top: 7.6em;
	right: 0;
	border: 1px solid black;
	background-color: #b6b5b5;
`

const Cart = () => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [showCart, setShowCart] = useRecoilState(showCartAtom)

	if (showCart) {
		return (
			<CartStyled>
				<h3>Kundvagn</h3>
				{cart ? cart.map(product => <div key={product.productid}><p>{product.name}</p><p>Antal: {product.amount}</p></div>) : <div><p>Inga produkter..</p></div>}
			</CartStyled>
		)
	} else {
		return
	}
}

export default Cart