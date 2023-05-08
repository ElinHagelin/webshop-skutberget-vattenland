import { atom } from 'recoil'

const adminAtom = atom({
	key: 'admin-list',
	default: [
		{
			employeeNumber: 1234,
			password: 1234
		}
	]
})


export { adminAtom }