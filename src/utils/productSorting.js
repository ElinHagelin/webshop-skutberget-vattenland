import { productsAtom } from "../data/atoms/productsAtom";
import testData from "../data/testdata";


const productSorting = (order, productsToShow, setProductsToShow) => {

	if (order == 'popular') {
		setProductsToShow(testData)
	} else {
		let valueToCompare = order == 'alpha-rising' || order == 'alpha-falling' ? 'name' : 'price'

		let copy = [...productsToShow]
		let sorted = copy.sort(function (a, b) {
			if (a[valueToCompare] < b[valueToCompare]) {
				return -1;
			}
			if (a[valueToCompare] > b[valueToCompare]) {
				return 1;
			}
			return 0;
		});

		if (order == 'alpha-rising' || order == 'price-rising') {
			setProductsToShow(sorted)
		} else {
			const sortedReversed = sorted.reverse()
			setProductsToShow(sortedReversed)
		}
	}
}

export default productSorting