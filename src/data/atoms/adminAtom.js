import { atom } from 'recoil'

const adminAtom = atom({
	key: 'admin-list',
	default: null
})


export { adminAtom }