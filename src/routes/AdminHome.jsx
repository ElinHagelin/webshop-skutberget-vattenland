import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { loggedInAtom } from "../data/atoms/loggedInAtom"

const AdminHeading = styled.div`
	text-align: center;
	margin: 1em;
`

const AdminHome = () => {
	const [loggedIn] = useRecoilState(loggedInAtom)

	if (!loggedIn) {
		<Navigate replace to="/" />
	} else {
		return (
			<main>
				<AdminHeading><h2>Välkommen Admin</h2></AdminHeading>
				<AdminHeading><p>Du kan nu komma åt att redigera produktlistan <NavLink to='/products'>här!</NavLink></p></AdminHeading>
				<AdminHeading><p>Vill du lägga till eller ta bort admins kan du klicka <NavLink to='/users'>här!</NavLink></p></AdminHeading>
			</main>
		)
	}

}

export default AdminHome