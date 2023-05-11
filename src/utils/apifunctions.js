import testData from "../data/testdata.js"
import { deleteProduct, getProducts, uploadProduct } from "./ajax/ajaxProducts.js";

const addAllProducts = () => {
	testData.forEach(({ name, description, price, id, picture }) =>
		uploadProduct(name, description, price, id, picture)
	)
}

async function deleteAllProducts() {
	const allProducts = await getProducts()
	console.log('allProducts är: ', allProducts);

	allProducts.forEach(product => {
		deleteProduct(product.id)
	})
}

export { addAllProducts, deleteAllProducts }