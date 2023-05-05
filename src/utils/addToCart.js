import { useRecoilState } from "recoil";
import { cartAtom } from "../data/atoms/cartAtom";

const addToCart = (product, cart, setCart) => {

	// Kollar om produkten finns i kundvagnen sen tidigare, lägger bara till en.
	// TODO: fixa så att man kan se antal produkter av samma sort!
	const check = cart.find(item => item.productid === product.productid)
	check === undefined && setCart([...cart, product])
}

export default addToCart