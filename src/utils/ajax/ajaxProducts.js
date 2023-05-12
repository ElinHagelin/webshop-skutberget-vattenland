import { shopId } from "../../data/constants.js";


export async function getProducts() {

	const url = 'https://www.forverkliga.se/JavaScript/api/fe/'

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

export async function uploadProduct(name, description, price, picture) {

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
	return false
}

export async function deleteProduct(productId) {
	const url = 'https://www.forverkliga.se/JavaScript/api/fe/?action=delete-product'

	const data = {
		shopid: shopId,
		productid: productId
	}

	const options = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	if (statusObject.status === 'success') {
		console.log('success');
		return true
	}
	console.log('failed', statusObject);
	return false
}