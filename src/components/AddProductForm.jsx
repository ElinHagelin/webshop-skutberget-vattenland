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
	const [productImg1, setProductImg1] = useState('')
	const [productImg2, setProductImg2] = useState('')
	const [productImg3, setProductImg3] = useState('')


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
		} else if (input.inputId == 'img-1') {
			input.state = productImg1
			input.setState = setProductImg1
		} else if (input.inputId == 'img-2') {
			input.state = productImg2
			input.setState = setProductImg2
		} else if (input.inputId == 'img-3') {
			input.state = productImg3
			input.setState = setProductImg3
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

{/* <InputGroup>
	<label htmlFor="product-name">Namn på produkten</label>
	<input
		type="text"
		id="product-name"
		value={productName}
		onChange={(e) => setProductName(e.target.value)}
	/>
</InputGroup>
<InputGroup>
	<label htmlFor="product-description">Beskrivning av produkten</label>
	<textarea
		id="product-description"
		value={productDescription}
		onChange={(e) => setProductDescription(e.target.value)}
	/>
</InputGroup>
<InputGroup>
	<label htmlFor="product-price">Pris</label>
	<input
		type="text"
		id="product-price"
		value={productPrice}
		onChange={(e) => setProductPrice(e.target.value)}
	/>
</InputGroup>
<InputGroup>
	<label htmlFor="img-1">Bild 1 (url)</label>
	<input
		type="text"
		id="img-1"
		value={productImg1}
		onChange={(e) => setProductImg1(e.target.value)}
	/>
</InputGroup>
<InputGroup>
	<label htmlFor="img-2">Bild 2 (url)</label>
	<input
		type="text"
		id="img-2"
		value={productImg2}
		onChange={(e) => setProductImg2(e.target.value)}
	/>
</InputGroup>
<InputGroup>
	<label htmlFor="img-3">Bild 3 (url)</label>
	<input
		type="text"
		id="img-3"
		value={productImg3}
		onChange={(e) => setProductImg3(e.target.value)}
	/>
</InputGroup> */}