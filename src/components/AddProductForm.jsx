import { useState } from "react"
import styled from "styled-components"
import inputList from '../data/productFormInputList.js'
import { getProducts, uploadProduct } from "../utils/ajax/ajaxProducts.js"
import { useRecoilState } from "recoil"
import { productsAtom } from "../data/atoms/productsAtom.js"
import { Button, Input } from "./BasicStyles.js"

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

const TextArea = styled.textarea`
	padding: 0.3em 0.5em;
	border-radius: 0.4em;
	resize: none;
	min-height: 4em;
`

export const AddButton = styled(Button)`
	margin-top: 1em;
	background-color: #62a3af;
	border: 1px solid #50919c;

	&:hover {
		background-color: #77b5c0;
	border: 1px solid #64a5b1;
	}
`

const Status = styled.span`
	min-height: 1.1em;
	margin-top: 0.4em;
`

const AddProductForm = () => {
	const [products, setProducts] = useRecoilState(productsAtom)
	const [productName, setProductName] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productImg, setProductImg] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [statusMessage, setStatusMessage] = useState('')

	const success = 'Produkten tillagd i listan'
	const failed = 'Misslyckades med att lägga till produkten'

	// Sätt en useEffect här som lyssnar på statusMessage och sätter en timeout innan den sätter tillbaka statusMessage till ''.

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 	  setStatusMessage('');
	// 	}, 1000);
	// 	return () => clearTimeout(timer);
	//   }, [statusMessage]);

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

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		const upload = await uploadProduct(productName, productDescription, productPrice, productImg)
		console.log(upload);

		if (upload) {
			setIsLoading(false)
			setStatusMessage(success)
			const newProductList = await getProducts()
			setProducts(newProductList)
		} else {
			setIsLoading(false)
			setStatusMessage(failed)
		}
	}

	return (
		<Form action="#">
			<h2>Lägg till Produkt</h2>
			{inputList.map(input => (
				<InputGroup key={input.inputId}>
					<label htmlFor={input.inputId}>{input.name}</label>
					{input.type === 'text'
						? <Input
							type='text'
							id={input.inputId}
							value={input.state}
							onChange={(e) => input.setState(e.target.value)}
							required
						/>
						: <TextArea
							id={input.inputId}
							value={input.state}
							onChange={(e) => input.setState(e.target.value)}
							required
						/>
					}
				</InputGroup>

			))}

			<Status>{statusMessage && <p>{statusMessage}</p>}</Status>

			<AddButton type="submit" onClick={handleSubmit} disabled={isLoading}>Lägg till</AddButton>
		</Form>
	)
}

export default AddProductForm