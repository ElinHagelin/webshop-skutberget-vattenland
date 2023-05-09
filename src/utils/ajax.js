import testData from "../data/testdata";


// const productLoader = () => testData
const productLoader = () => getProducts()

export async function uploadProduct(name, description, price, productid, picture) {
	const data = {
		action: 'add-product',
		name: name,
		description: description,
		picture: picture,
		price: price,
		productid: productid,
		shopid: 1006
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	if (statusObject.stats === 'success') {
		console.log('success');
		return true
	}
	console.log('failed', statusObject);
	return false  // if you get false, use console.log to inspect the object
}

// Get all products

async function getProducts() {

	const url = 'https://www.forverkliga.se/JavaScript/api/fe/'
	const shopId = 1006

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

export default productLoader