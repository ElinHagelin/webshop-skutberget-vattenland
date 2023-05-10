import { useRecoilState } from "recoil"
import { Navigate, useNavigate, NavLink } from "react-router-dom"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import { Outlet } from "react-router-dom"
import styled from "styled-components"




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
			<main>
				<Outlet />
			</main>
		)
	}
}

export default AdminPage