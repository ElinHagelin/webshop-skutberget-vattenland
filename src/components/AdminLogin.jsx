import { useRecoilState } from "recoil"
import styled from "styled-components"
import { loginOverlayAtom } from "../data/atoms/loginOverlay"
import { useState, useEffect } from "react"
import { adminAtom } from "../data/atoms/adminAtom"
import { isValidENumber, isValidLogin, isValidPassword } from "../utils/loginValidation"
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
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
	const [adminList, setAdminList] = useRecoilState(adminAtom)
	const [eNumber, setENumber] = useState('')
	const [eNumberIsDirty, setENumberIsDirty] = useState(false)
	const [password, setPassword] = useState('')
	const [passwordIsDirty, setPasswordIsDirty] = useState(false)
	const [eNumberIsValid, setENumberIsValid] = useState(false)
	const [passwordIsValid, setPasswordIsValid] = useState(false)
	const navigate = useNavigate()


	useEffect(() => {
		const isValid = isValidENumber(eNumber, adminList);
		setENumberIsValid(isValid);
	}, [eNumber, adminList]);

	useEffect(() => {
		const isValid = isValidPassword(password, adminList);
		setPasswordIsValid(isValid);
	}, [password, adminList]);

	const handleENumberChange = (e) => {
		setENumber(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleLogin = (e) => {
		if (eNumberIsValid && passwordIsValid) {
			let checkMatch = isValidLogin(eNumber, password, adminList)
			if (checkMatch) {
				setLoggedIn(true)
				setShowLogin(false)
				navigate('/admin')
			}
		} else if (eNumberIsValid && !passwordIsValid) {
			e.preventDefault()
		} else if (!eNumberIsValid && passwordIsValid) {
			e.preventDefault()
		}
	}

	return (
		<LogInModal className={!showLogin ? 'login-modal' : 'login-modal hidden'}>
			<LoginHeading>Administratör-inloggning</LoginHeading>
			<InputGroup>
				<label htmlFor="employee-number">Anställningsnummer</label>
				<input
					type="text"
					id="employee-number"
					name="Anställningsnummer"
					value={eNumber}
					onChange={handleENumberChange}
					onBlur={() => setENumberIsDirty(true)} />
				<span className="valid-e-number">
					{eNumberIsDirty ? (eNumberIsValid ? "✔️" : "❌") : ""}
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