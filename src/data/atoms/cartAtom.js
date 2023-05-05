import { atom } from 'recoil'

const cartAtom = atom({
	key: 'shopping-cart',
	default: []
})


export { cartAtom }