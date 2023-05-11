

const isValidUsername = (username, adminList) => {
	const checkNumber = adminList.find(admin => String(admin.username) == username)
	if (checkNumber) {
		// console.log('Rätt anställningsnummer')
		return true
	} else {
		return false
	}
}

const isValidPassword = (password, adminList) => {
	const checkPassword = adminList.find(admin => String(admin.password) == password)
	if (checkPassword) {
		// console.log('Rätt lösenord')
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