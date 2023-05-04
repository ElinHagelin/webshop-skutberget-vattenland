

function stringIncludes(longString, shortString) {
	let ls = longString.toLowerCase()
	let ss = shortString.toLowerCase()
	return ls.includes(ss)
}
function productMatch(product, searchString) {
	if (stringIncludes(product.name, searchString)) {
		return true
	} else {
		return false
	}
}

export default productMatch