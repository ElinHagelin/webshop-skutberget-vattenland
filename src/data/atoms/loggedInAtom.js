import { atom } from 'recoil'

const loggedInAtom = atom({
	key: 'logged-in',
	default: 'false'
})


export { loggedInAtom }