import styled from "styled-components"
import { Form, InputGroup } from "./AddProductForm"
import { Button } from "./BasicStyles"


const AddAdminForm = () => {

	const handleAddUser = (e) => {
		e.preventDefault()
	}

	return (
		<Form action="#">
			<h2>Lägg till ny admin</h2>
			<InputGroup>
				<label htmlFor="add-employee-number">Användarnamn</label>
				<input type="text" id="add-username" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="add-password">Lösenord</label>
				<input type="text" id="add-password" />
			</InputGroup>
			<Button type='submit' onClick={handleAddUser}>Lägg till</Button>
		</Form>
	)
}

export default AddAdminForm