

const isValidUsername = (username) => {
	const regex = /^[a-ö]{3,}$/;

	if (regex.test(username)) {
		return true
	} else {
		return false
	}
}

const isValidPassword = (password) => {
	const regex = /^[a-öA-Ö0-9]{6,}$/

	if (regex.test(password)) {
		return true
	} else {
		return false
	}
}

const isValidLogin = (username, password, adminList) => {
	const checkInput = adminList.find(admin => String(admin.username) == username && String(admin.password) == password)
	if (checkInput) {
		// console.log('Inloggning lyckades')
		return true
	} else {
		return false
	}
}

export { isValidUsername, isValidPassword, isValidLogin }