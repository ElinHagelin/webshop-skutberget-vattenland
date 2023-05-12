import { useRecoilState } from "recoil"
import { adminAtom } from "../data/atoms/adminAtom"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import AddAdminForm from "../components/AddAdminForm"
import deleteBin from '../assets/icons/delete-bin-line.png'
import styled from "styled-components"
import { FormContainer } from './AdminProducts.jsx'
import { Navigate } from "react-router-dom"
import { Button } from "../components/BasicStyles"
import { useEffect } from "react"
import { deleteUser, getUsers } from "../utils/ajax/ajaxUsers"

const AdminListContainer = styled.div`
	padding: 0.5em;
	display: grid;
	grid-template-columns: 1fr 0.3fr;
	grid-auto-rows: auto;
	margin: 0 auto;
	max-width: 30em;
	gap: 1em 0;
`

const AdminHeading = styled.h3`
	font-size: 1em;

	@media screen and (min-width: 500px ){
		font-size: 1.2em;
	}
`

const AdminContainer = styled.div`
	grid-column: 1 / 3;
	display: grid;
	grid-template-columns: 1fr 0.3fr;
	gap: 1em 0;

	& p {
		place-self: center start;
	}
`

const DeleteUserButton = styled(Button)`
	padding: 0.2em 0.4em;

`

const AdminUsers = () => {
	const [admins, setAdmins] = useRecoilState(adminAtom)
	const [loggedIn] = useRecoilState(loggedInAtom)

	useEffect(() => {
		async function fetchUsers() {
			const usersFromAPI = await getUsers()
			setAdmins(usersFromAPI)
		}
		fetchUsers()
	}, [setAdmins])

	if (loggedIn === false) {
		<Navigate to="/admin" />
	} else {
		return (
			<div>
				<FormContainer>
					<AddAdminForm />
				</FormContainer>
				<AdminListContainer>
					<AdminHeading>Användarnamn</AdminHeading>
					{admins != null ?
						admins.map(admin =>
							<AdminContainer key={admin.username}>
								<p>{admin.username}</p>
								<DeleteUserButton onClick={() => deleteUser(admin.id)}><img src={deleteBin} alt="Ta bort" /></DeleteUserButton>
							</AdminContainer>
						)
						: <p>Laddar användare...</p>
					}
				</AdminListContainer>
			</div>
		)
	}
}

export default AdminUsers