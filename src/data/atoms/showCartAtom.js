import { atom } from 'recoil'

const showCartAtom = atom({
	key: 'show-cart',
	default: false
})


export { showCartAtom }