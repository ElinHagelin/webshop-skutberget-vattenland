import { useState } from "react"
import styled from "styled-components"
import inputList from '../data/productFormInputList.js'

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
	const [productName, setProductName] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productImg, setProductImg] = useState('')


	inputList.map(input => {
		if (input.inputId == 'product-name') {
			input.state = productName
			input.setState = setProductName
		} else if (input.inputId == 'product-description') {
			input.state = productDescription
			input.setState = setProductDescription
		} else if (input.inputId == 'product-price') {
			input.state = productPrice
			input.setState = setProductPrice
		} else if (input.inputId == 'img') {
			input.state = productImg
			input.setState = setProductImg
		}

	})

	return (
		<Form action="#">
			<h2>Lägg till Produkt</h2>
			{inputList.map(input => (
				<InputGroup key={input.inputId}>
					<label htmlFor={input.inputId}>{input.name}</label>
					{input.type === 'text'
						? <input
							type='text'
							id={input.inputId}
							value={input.state}
							onChange={(e) => input.setState(e.target.value)}
						/>
						: <textarea
							id={input.inputId}
							value={input.state}
							onChange={(e) => input.setState(e.target.value)}
						/>
					}
				</InputGroup>
			))}

			<AddButton>Lägg till</AddButton>
		</Form>
	)
}

export default AddProductForm