import { useRecoilState } from "recoil";
import { cartAtom } from "../data/atoms/cartAtom";

const addToCart = (product, cart, setCart) => {

	// Kollar om produkten finns i kundvagnen sen tidigare, lägger bara till en. Klickar man lägg till flera gånger på samma produkt läggs det till i amount i den produkten i varukorgen.

	const copy = [...cart]
	const check = copy.find(item => item.productid === product.productid)
	console.log(check);
	if (!check) {
		let modifiedProduct = { ...product, amount: 1 }
		console.log('Produkten finns inte i kundvagnen: ', modifiedProduct);
		setCart([...cart, modifiedProduct])
	} else {
		let modifiedProduct = { ...check }
		modifiedProduct.amount = modifiedProduct.amount + 1
		console.log('copy är: ', copy);
		const productIndex = copy.findIndex(x => x.productid == check.productid)
		const upDatedCart = copy.splice(productIndex, 1, modifiedProduct)
		console.log('Nya copy är: ', copy);
		setCart(copy)
	}
}

export default addToCart