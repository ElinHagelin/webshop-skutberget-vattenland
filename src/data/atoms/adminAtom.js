import { atom } from 'recoil'

const adminAtom = atom({
	key: 'admin-list',
	default: [
		{
			username: 'admin',
			password: 'password'
		}
	]
})


export { adminAtom }