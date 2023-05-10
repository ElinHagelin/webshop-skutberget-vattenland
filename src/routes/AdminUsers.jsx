import { useRecoilState } from "recoil"
import { adminAtom } from "../data/atoms/adminAtom"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import AddAdminForm from "../components/AddAdminForm"
import deleteBin from '../assets/icons/delete-bin-line.png'
import styled from "styled-components"
import { FormContainer } from './AdminProducts.jsx'

const AdminListContainer = styled.div`
	padding: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;
`

const AdminContainer = styled.div`
	display: flex;
	gap: 2em;
	justify-content: center;
`

const AdminUsers = () => {
	const [admins, setAdmins] = useRecoilState(adminAtom)
	const [loggedIn] = useRecoilState(loggedInAtom)

	if (!loggedIn) {
		<Navigate replace to="/" />
	} else {
		return (
			<div>
				<FormContainer>
					<AddAdminForm />
				</FormContainer>
				<AdminListContainer>
					<h3>Befintliga Admins</h3>
					{admins &&
						admins.map(admin =>
							<AdminContainer key={admin.employeeNumber}>
								<p>Anställningsnummer: {admin.employeeNumber}</p>
								<p>Lösenord: {admin.password}</p>
								<button><img src={deleteBin} alt="Ta bort" /></button>
							</AdminContainer>
						)
					}
				</AdminListContainer>
			</div>
		)
	}

}

export default AdminUsers