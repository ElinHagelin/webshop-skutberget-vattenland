import { useRecoilState } from "recoil"
import styled from "styled-components"
import { loginOverlayAtom } from "../data/atoms/loginOverlay"
import { useState } from "react"
import { adminAtom } from "../data/atoms/adminAtom"


const LogInModal = styled.div`
	position: fixed;
	top: 40%;
	left: 40%;
	background-color: #E2F8FF;
	border: 3px solid black;
	border-radius: 1em;
	padding: 1em;
	flex-direction: column;
	align-items: center;
`

const LoginHeading = styled.h3`
	margin: 0.5em 0;
`

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5em 0;
`

const LoginButton = styled.button`
	padding: 0.3em 0.6em;
	margin: 1em 0;
	max-width: fit-content;
`

const AdminLogin = () => {
	const [showLogin, setShowLogin] = useRecoilState(loginOverlayAtom)
	const [adminList, setAdminList] = useRecoilState(adminAtom)
	const [eNumber, setENumber] = useState('')
	const [eNumberIsDirty, setENumberIsDirty] = useState(false)
	const [password, setPassword] = useState('')
	const [passwordIsDirty, setPasswordIsDirty] = useState(false)

	return (
		<LogInModal className={showLogin ? 'login-modal' : 'login-modal hidden'}>
			<LoginHeading>Administratör-inloggning</LoginHeading>
			<InputGroup>
				<label htmlFor="employee-number">Anställningsnummer</label>
				<input type="text" id="employee-number" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="password">Lösenord</label>
				<input type="password" id="password" />
			</InputGroup>
			<p>Skapa ny admin</p>
			<LoginButton>Logga in</LoginButton>
		</LogInModal>
	)
}

export default AdminLogin