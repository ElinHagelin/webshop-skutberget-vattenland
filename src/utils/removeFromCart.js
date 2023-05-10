

const removeFromCart = (product, cart, setCart) => {

	const copy = [...cart]
	const check = copy.find(item => item.productid === product.productid)

	if (check.amount > 1) {
		let modifiedProduct = { ...check }
		modifiedProduct.amount = modifiedProduct.amount - 1
		const productIndex = copy.findIndex(x => x.productid == check.productid)
		copy.splice(productIndex, 1, modifiedProduct)
		// console.log('Nya mängden av ' + product.name + ' är: ' + modifiedProduct.amount);
		// console.log('copy är: ', copy);
		setCart(copy)
	} else {
		const productIndex = copy.findIndex(x => x.productid == check.productid)
		copy.splice(productIndex, 1)
		// console.log('tar bort ' + product.name + ' från varukorgen');
		// console.log('copy är: ', copy);
		setCart(copy)
	}
}

export default removeFromCart