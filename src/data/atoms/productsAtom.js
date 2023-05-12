
import { atom } from 'recoil'

const productsAtom = atom({
	key: 'product-list',
	default: null
})


export { productsAtom }