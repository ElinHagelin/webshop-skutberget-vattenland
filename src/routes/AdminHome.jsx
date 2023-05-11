import { NavLink, Navigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import AdminLogin from "../components/AdminLogin"

const AdminHeading = styled.div`
	text-align: center;
	margin: 1em;
`

const AdminHome = () => {
	const [loggedIn] = useRecoilState(loggedInAtom)

	console.log('loggedIn i AdminHome är: ', loggedIn);

	if (!loggedIn) {
		return <AdminLogin />
	} else {
		return (
			<div>
				<AdminHeading><h2>Välkommen Admin</h2></AdminHeading>
				<AdminHeading><p>Du kan nu komma åt att redigera produktlistan <NavLink to='/products'>här!</NavLink></p></AdminHeading>
				<AdminHeading><p>Vill du lägga till eller ta bort admins kan du klicka <NavLink to='/users'>här!</NavLink></p></AdminHeading>
			</div>
		)
	}
}

export default AdminHome