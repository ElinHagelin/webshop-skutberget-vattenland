import { Form, InputGroup } from "./AddProductForm"
import { Input } from "./BasicStyles"
import { addNewUser, getUsers } from "../utils/ajax/ajaxUsers"
import { useState } from "react"
import { AddButton, Status } from "./AddProductForm"
import { isValidPassword, isValidUsername } from "../utils/loginValidation"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { adminAtom } from "../data/atoms/adminAtom"

export const ErrorMessage = styled.span`
	font-size: 0.9em;
	min-height: 1.2em;
	color: #bc0000;
	margin-bottom: 0.3em;
`

const AddAdminForm = () => {
	const [admins, setAdmins] = useRecoilState(adminAtom)
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [userNameIsDirty, setUserNameIsDirty] = useState(false)
	const [passwordIsDirty, setPasswordIsDirty] = useState(false)
	const [userNameError, setUserNameError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [statusMessage, setStatusMessage] = useState('')

	const success = 'Användaren tillagd i listan'
	const failed = 'Misslyckades med att lägga till användaren'

	let validUserName = isValidUsername(userName)
	let validPassword = isValidPassword(password)


	const handleAddUser = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		const addUser = await addNewUser(userName, password)

		if (addUser) {
			setIsLoading(false)
			setStatusMessage(success)
			const newAdminList = await getUsers()
			setAdmins(newAdminList)
		} else {
			setIsLoading(false)
			setStatusMessage(failed)
		}
	}


	const handleUsernameChange = (e) => {
		const isValid = isValidUsername(userName)
		setUserName(e.target.value);

		if (!isValid) {
			setUserNameError('minst 3 bokstäver.')
		}
	}

	const handlePasswordChange = (e) => {
		const isValid = isValidPassword(password)
		setPassword(e.target.value);

		if (!isValid) {
			setPasswordError('minst 6 bokstäver eller siffror.')
		}
	}

	return (
		<Form action="#">
			<h2>Lägg till ny admin</h2>
			<InputGroup>
				<label htmlFor="add-employee-number">Användarnamn</label>
				<Input
					type="text"
					id="add-username"
					value={userName}
					onChange={(e) => handleUsernameChange(e)}
					onBlur={() => setUserNameIsDirty(true)}
					required />
			</InputGroup>
			<ErrorMessage>{userNameIsDirty && (validUserName === false ? <p>{userNameError}</p> : '')}</ErrorMessage>
			<InputGroup>
				<label htmlFor="add-password">Lösenord</label>
				<Input
					type="text"
					id="add-password"
					value={password}
					onChange={(e) => handlePasswordChange(e)}
					onBlur={() => setPasswordIsDirty(true)}
					required />
			</InputGroup>
			<ErrorMessage>{passwordIsDirty && (validPassword === false && <p>{passwordError}</p>)}</ErrorMessage>

			<Status>{statusMessage && <p>{statusMessage}</p>}</Status>

			<AddButton type='submit' onClick={handleAddUser} disabled={isLoading}>Lägg till</AddButton>
		</Form>
	)
}

export default AddAdminForm