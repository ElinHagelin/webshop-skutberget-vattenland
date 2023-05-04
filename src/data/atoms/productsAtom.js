import testData from '../testdata'

import { atom } from 'recoil'

const productsAtom = atom({
	key: 'product-list',
	default: testData
})


export { productsAtom }