import { atom } from 'recoil'

const adminAtom = atom({
	key: 'admin-list',
	default: [
		{
			employeeNumber: 'admin',
			password: 'password'
		}
	]
})


export { adminAtom }