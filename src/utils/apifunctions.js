import testData from "../data/testdata.js"
import { deleteProduct, getProducts, uploadProduct } from "../utils/ajax.js";

const addAllProducts = () => {
	testData.forEach(({ name, description, price, productid, picture }) =>
		uploadProduct(name, description, price, productid, picture)
	)
}

async function deleteAllProducts() {
	const allProducts = await getProducts()

	allProducts.forEach(product => {
		deleteProduct(product.productid)
	})
}

export { addAllProducts, deleteAllProducts }