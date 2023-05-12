import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import AdminLogin from "../components/AdminLogin"

const AdminContent = styled.div`
	display: flex;
	flex-direction:column;
	align-items: center;
	gap: 1.5em;
	padding: 1em;
`

const AdminHeading = styled.h2`
	font-size: 1.7em;
`

const AdminParagraph = styled.p`
	font-size: 1.3em;
`

const AdminHome = () => {
	const [loggedIn] = useRecoilState(loggedInAtom)

	console.log('loggedIn i AdminHome är: ', loggedIn);

	if (loggedIn === true) {
		return (
			<AdminContent>
				<AdminHeading>Välkommen Admin</AdminHeading>
				<AdminParagraph>Du kan nu komma åt att redigera produktlistan <NavLink to='admin/products'>här!</NavLink></AdminParagraph>
				<AdminParagraph>Vill du lägga till eller ta bort användare kan du klicka <NavLink to='admin/users'>här!</NavLink></AdminParagraph>
			</AdminContent>
		)
	} else {
		return (
			<AdminContent>
				<AdminLogin />
			</AdminContent>
		)
	}
}

export default AdminHome