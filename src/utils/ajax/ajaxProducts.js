import testData from "../../data/testdata.js";
import { shopId } from "../../data/constants.js";


// const productLoader = () => testData
const productLoader = () => getProducts()

export async function getProducts() {

	const url = 'https://www.forverkliga.se/JavaScript/api/fe/'
	// const shop = shopId

	let urlWithQuery = url + '?action=get-products&shopid=' + shopId
	try {
		const response = await fetch(urlWithQuery)
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
	return null
}

export async function uploadProduct(name, description, price, id, picture) {

	const url = 'https://www.forverkliga.se/JavaScript/api/fe/?action=add-product'

	const data = {
		action: 'add-product',
		name: name,
		description: description,
		picture: picture,
		price: price,
		shopid: shopId
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	if (statusObject.status === 'success') {
		console.log('success');
		return true
	}
	console.log('failed', statusObject);
	return false  // if you get false, use console.log to inspect the object
}

export async function deleteProduct(productId) {
	const url = 'https://www.forverkliga.se/JavaScript/api/fe/?action=delete-product'

	const data = {
		action: 'delete-product',
		productid: productId,
		shopid: shopId
	}

	const options = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	if (statusObject.status === 'success') {
		console.log('success');
		return true
	}
	console.log('failed', statusObject);
	return false  // if you get false, use console.log to inspect the object
}


export default productLoader