

const isValidProductName = (name) => {
	const regex = /^[a-ö]{3,}$/;

	if (regex.test(name)) {

		return true
	} else {
		return false
	}
}

const isValidProductDescription = (desc) => {
	const regex = /^[a-öA-Ö0-9.,!?"\s]{3,}$/

	if (regex.test(desc)) {

		return true
	} else {
		return false
	}
}

const isValidProductPrice = (price) => {
	const regex = /^[0-9]{1,}$/

	if (regex.test(price) && price > 0) {
		return true
	} else {
		return false
	}
}


const isValidProductUrl = (url) => {
	const regex = /^https:\/\/[\w\d+@#%\/?=~_|!:,.;-]*$/

	if (regex.test(url)) {
		return true
	} else {
		return false
	}
}

export { isValidProductName, isValidProductDescription, isValidProductPrice, isValidProductUrl }