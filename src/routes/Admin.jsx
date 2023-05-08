import { useRecoilState } from "recoil"
import { Navigate, useNavigate } from "react-router-dom"
import { loggedInAtom } from "../data/atoms/loggedInAtom"


const AdminPage = () => {
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
	const navigate = useNavigate()

	const handleLogout = () => {
		setLoggedIn(false)
		navigate('/')
	}

	if (!loggedIn) {
		<Navigate replace to="/" />
	}
	else if (loggedIn) {
		return (
			<div>
				<button onClick={handleLogout}>Logga ut</button>
				<h1>Admin</h1>
			</div>
		)
	}
}

export default AdminPage