

const isValidENumber = (eNumber, adminList, password, passwordIsDirty) => {
	const checkNumber = adminList.find(admin => admin.employeeNumber == eNumber)
	checkNumber ? true : false
	//TODO: kollar om Anställningsnummer och lösenord hör ihop.
	// OM passwordIsDirty- kolla om de matchar
}

const isValidPassword = (password, adminList, eNumber, eNumberIsDirty) => {
	const checkPassword = adminList.find(admin => admin.password == password)
	checkPassword ? true : false

	// OM eNumberIsDirty- kolla om de matchar
}