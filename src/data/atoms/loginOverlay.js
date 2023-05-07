import { atom } from 'recoil'

const loginOverlayAtom = atom({
	key: 'login-overlay',
	default: 'false'
})


export { loginOverlayAtom }