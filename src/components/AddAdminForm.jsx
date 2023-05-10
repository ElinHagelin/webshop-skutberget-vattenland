import styled from "styled-components"
import { Form, InputGroup, AddButton } from "./AddProductForm"




const AddAdminForm = () => {

	return (
		<Form action="#">
			<h2>Lägg till ny admin</h2>
			<InputGroup>
				<label htmlFor="add-employee-number">Anställningsnummer</label>
				<input type="text" id="add-employee-number" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="add-password">Lösenord</label>
				<input type="text" id="add-password" />
			</InputGroup>
			<AddButton>Lägg till</AddButton>
		</Form>
	)
}

export default AddAdminForm