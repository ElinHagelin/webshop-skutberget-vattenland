
const addToCart = (product, cart, setCart) => {

	// Kollar om produkten finns i kundvagnen sen tidigare, lägger bara till en. Klickar man lägg till flera gånger på samma produkt läggs det till i amount i den produkten i varukorgen.

	const copy = [...cart]
	const check = copy.find(item => item.id === product.id)
	// console.log(check);
	if (!check) {
		let modifiedProduct = { ...product, amount: 1 }
		setCart([...cart, modifiedProduct])

	} else {
		let modifiedProduct = { ...check }
		modifiedProduct.amount = modifiedProduct.amount + 1

		const productIndex = copy.findIndex(x => x.id == check.id)
		const upDatedCart = copy.splice(productIndex, 1, modifiedProduct)

		setCart(copy)
	}
}

export default addToCart