import { useRecoilState } from "recoil"
import styled from "styled-components"
import { loginOverlayAtom } from "../data/atoms/loginOverlay"
import { useState, useEffect } from "react"
import { adminAtom } from "../data/atoms/adminAtom"
import { isValidUsername, isValidLogin, isValidPassword } from "../utils/loginValidation"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import { useNavigate } from "react-router-dom"


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

export const InputGroup = styled.div`
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
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
	const [adminList, setAdminList] = useRecoilState(adminAtom)
	const [username, setUsername] = useState('')
	const [usernameIsDirty, setUsernameIsDirty] = useState(false)
	const [password, setPassword] = useState('')
	const [passwordIsDirty, setPasswordIsDirty] = useState(false)
	const [usernameIsValid, setUsernameIsValid] = useState(false)
	const [passwordIsValid, setPasswordIsValid] = useState(false)
	const navigate = useNavigate()


	useEffect(() => {
		const isValid = isValidUsername(username, adminList);
		setUsernameIsValid(isValid);
	}, [username, adminList]);

	useEffect(() => {
		const isValid = isValidPassword(password, adminList);
		setPasswordIsValid(isValid);
	}, [password, adminList]);

	const handleusernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleLogin = (e) => {
		if (usernameIsValid && passwordIsValid) {
			let checkMatch = isValidLogin(username, password, adminList)
			if (checkMatch) {
				setShowLogin(false)
				setLoggedIn(true)
				navigate('/admin')
			}
		} else if (usernameIsValid && !passwordIsValid) {
			e.preventDefault()
		} else if (!usernameIsValid && passwordIsValid) {
			e.preventDefault()
		}
	}

	return (
		<LogInModal className={!showLogin ? 'login-modal' : 'login-modal hidden'}>
			<LoginHeading>Administratör-inloggning</LoginHeading>
			<InputGroup>
				<label htmlFor="username">Anställningsnummer</label>
				<input
					type="text"
					id="username"
					name="Användarnamn"
					value={username}
					onChange={handleusernameChange}
					onBlur={() => setUsernameIsDirty(true)} />
				<span className="valid-e-number">
					{usernameIsDirty ? (usernameIsValid ? "✔️" : "❌") : ""}
				</span>
			</InputGroup>
			<InputGroup>
				<label htmlFor="password">Lösenord</label>
				<input
					type="password"
					id="password"
					name="Lösenord"
					value={password}
					onChange={handlePasswordChange}
					onBlur={() => setPasswordIsDirty(true)} />
				<span className="valid-password">
					{passwordIsDirty ? (passwordIsValid ? "✔️" : "❌") : ""}
				</span>
			</InputGroup>
			<LoginButton onClick={handleLogin}>Logga in</LoginButton>
		</LogInModal>
	)
}

export default AdminLogin