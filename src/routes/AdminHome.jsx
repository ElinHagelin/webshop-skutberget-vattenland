import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { loggedInAtom } from "../data/atoms/loggedInAtom"

const AdminHeading = styled.div`
	text-align: center;
`

const AdminHome = () => {
	const [loggedIn] = useRecoilState(loggedInAtom)

	if (!loggedIn) {
		<Navigate replace to="/" />
	} else {
		return (
			<main>
				<AdminHeading>Välkommen Admin</AdminHeading>
				<p>Du kan nu komma åt att redigera produktlistan <NavLink to='admin/products'>här!</NavLink></p>
				<p>Vill du lägga till eller ta bort admins kan du klicka <NavLink to='admin/users'>här!</NavLink></p>
			</main>
		)
	}

}

export default AdminHome