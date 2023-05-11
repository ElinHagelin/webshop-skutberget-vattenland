import { shopId } from "../../data/constants"


export async function getUsers() {

	const url = `https://www.forverkliga.se/JavaScript/api/fe/`
	// const shop = shopId

	let urlWithQuery = url + '?action=get-users&shopid=' + shop
	try {
		const response = await fetch(urlWithQuery)
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
	return null
}

async function addNewUser(username, password) {

	const url = 'https://www.forverkliga.se/JavaScript/api/fe/?action=add-user'

	const data = {
		action: 'add-user',
		username: username,
		password: password,
		shopid: shopId
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

async function loginUser(username, password) {

	const url = 'https://www.forverkliga.se/JavaScript/api/fe/?action=login-user'

	const data = {
		action: 'login-user',
		username: username,
		password: password,
		shopid: shopId
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

export async function deleteProduct(username, password) {

	// Gör en find-funktion för att hitta user-id:t på rätt användare

	const url = 'https://www.forverkliga.se/JavaScript/api/fe/?action=delete-user'

	const data = {
		action: 'delete-user',
		id: userId,
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



export { getUsers, addNewUser }