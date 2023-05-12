import { Form, InputGroup } from "./AddProductForm"
import { Input } from "./BasicStyles"
import { addNewUser } from "../utils/ajax/ajaxUsers"
import { useState } from "react"
import { AddButton } from "./AddProductForm"


const AddAdminForm = () => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	const handleAddUser = (e) => {
		e.preventDefault()
		addNewUser(userName, password)
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
					onChange={(e) => setUserName(e.target.value)}
					required />
			</InputGroup>
			<InputGroup>
				<label htmlFor="add-password">Lösenord</label>
				<Input
					type="text"
					id="add-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required />
			</InputGroup>
			<AddButton type='submit' onClick={handleAddUser}>Lägg till</AddButton>
		</Form>
	)
}

export default AddAdminForm