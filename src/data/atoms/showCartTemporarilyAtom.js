import { atom } from 'recoil'

const showCartTemporarilyAtom = atom({
	key: 'show-cart-temporarily',
	default: false
})


export { showCartTemporarilyAtom }