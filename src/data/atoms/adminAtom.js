import { atom } from 'recoil'

const adminAtom = atom({
	key: 'admin-list',
	default: [
		{
			employeeNumber: 0000,
			password: 0000
		}
	]
})


export { adminAtom }