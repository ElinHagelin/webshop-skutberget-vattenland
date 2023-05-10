import styled from "styled-components"

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1.5em 2em;
	background-color: lightblue;
	border-radius: 1em;
`
export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.3em 0;
`

export const AddButton = styled.button`
	margin-top: 1em;
	max-width: fit-content;
	padding: 0.3em 0.8em;
	align-self: center;
	border-radius: 0.5em;
	background-color: #62a3af;
	border: 1px solid #50919c;
	box-shadow: 0.3em 0.3em 1em lightgray;

	&:hover {
		background-color: #77b5c0;
	border: 1px solid #64a5b1;
	}
`

const AddProductForm = () => {
	return (
		<Form action="#">
			<h2>Lägg till Produkt</h2>
			<InputGroup>
				<label htmlFor="product-name">Namn på produkten</label>
				<input type="text" id="product-name" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="product-description">Beskrivning av produkten</label>
				<textarea id="product-description" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="product-price">Pris</label>
				<input type="text" id="product-price" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="img-1">Bild 1 (url)</label>
				<input type="text" id="img-1" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="img-2">Bild 2 (url)</label>
				<input type="text" id="img-2" />
			</InputGroup>
			<InputGroup>
				<label htmlFor="img-3">Bild 3 (url)</label>
				<input type="text" id="img-3" />
			</InputGroup>
			<AddButton>Lägg till</AddButton>
		</Form>
	)
}

export default AddProductForm