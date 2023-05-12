import { useRecoilState } from "recoil"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { adminAtom } from "../data/atoms/adminAtom"
import { isValidUsername, isValidLogin, isValidPassword } from "../utils/loginValidation"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import { loginUser } from "../utils/ajax/ajaxUsers"
import { Input } from "./BasicStyles"


const LogInModal = styled.div`
	background-color: #E2F8FF;
	border: 3px solid black;
	border-radius: 1em;
	padding: 1em;
	flex-direction: column;
	align-items: center;
	max-width: 30em;
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

const Error = styled.span`
	color: red;
	min-height: 1.1em;
	margin-top: 0.4em;
`

const AdminLogin = () => {
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')


	const handleusernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleLogin = async (e) => {
		setIsLoading(true)

		const validate = await loginUser(username, password)
		console.log(validate);

		if (validate) {
			setLoggedIn(true)
			setIsLoading(false)
		} else {
			setErrorMessage('Fel användarnamn eller lösenord')
			setIsLoading(false)
		}
	}

	return (
		<LogInModal className='login-modal'>
			<LoginHeading>Administratör-inloggning</LoginHeading>
			<InputGroup>
				<label htmlFor="username">Användarnamn</label>
				<Input
					type="text"
					id="username"
					name="Användarnamn"
					value={username}
					onChange={handleusernameChange}
				// onBlur={() => setUsernameIsDirty(true)} 
				/>

			</InputGroup>
			<InputGroup>
				<label htmlFor="password">Lösenord</label>
				<Input
					type="password"
					id="password"
					name="Lösenord"
					value={password}
					onChange={handlePasswordChange}
				// onBlur={() => setPasswordIsDirty(true)} 
				/>
			</InputGroup>
			<Error className="error-message">
				{errorMessage && <p>{errorMessage}</p>}
			</Error>
			<LoginButton onClick={handleLogin} disabled={isLoading}>Logga in</LoginButton>
		</LogInModal>
	)
}

export default AdminLogin