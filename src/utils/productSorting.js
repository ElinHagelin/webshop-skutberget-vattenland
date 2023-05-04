import { productsAtom } from "../data/atoms/productsAtom";
import testData from "../data/testdata";



const productSorting = (order, productsToShow, setProductsToShow) => {

	if (order == 'popular') {
		setProductsToShow(testData)
	} else {
		let valueToCompare = order == 'alpha-rising' || order == 'alpha-falling' ? 'name' : 'price'

		console.log('Inside sort, valueToCompare is: ', valueToCompare);
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
			console.log('inside sort, order is rising, sorted is: ', sorted);
			setProductsToShow(sorted)
		} else {
			const sortedReversed = sorted.reverse()
			console.log('inside sort, order is falling, sorted is: ', sortedReversed);
			setProductsToShow(sortedReversed)
		}
	}
}

export default productSorting