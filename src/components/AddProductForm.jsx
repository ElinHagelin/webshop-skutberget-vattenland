import { useState } from "react"
import styled from "styled-components"
import { getProducts, uploadProduct } from "../utils/ajax/ajaxProducts.js"
import { useRecoilState } from "recoil"
import { productsAtom } from "../data/atoms/productsAtom.js"
import { Button, Input } from "./BasicStyles.js"
import { ErrorMessage } from "./AddAdminForm.jsx"
import { isValidProductName, isValidProductDescription, isValidProductPrice, isValidProductUrl } from "../utils/productValidation.js"

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1.5em 3em;
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

export const Status = styled.span`
	min-height: 1.1em;
	margin-top: 0.4em;
`

const AddProductForm = () => {
	const [products, setProducts] = useRecoilState(productsAtom)
	const [productName, setProductName] = useState('')
	const [nameIsDirty, setNameIsDirty] = useState(false)
	const [description, setDescription] = useState('')
	const [descriptionIsDirty, setDescriptionIsDirty] = useState(false)
	const [price, setPrice] = useState('')
	const [priceIsDirty, setPriceIsDirty] = useState(false)
	const [picture, setPicture] = useState('')
	const [pictureIsDirty, setPictureIsDirty] = useState(false)
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
	// let validation = null

	const nameIsValid = isValidProductName(productName)
	const descriptionIsValid = isValidProductDescription(description)
	const priceIsValid = isValidProductPrice(price)
	const urlIsValid = isValidProductUrl(picture)


	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		const upload = await uploadProduct(productName, description, price, picture)
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

			<InputGroup key='product-name'>
				<label htmlFor='product-name'>Namn på produkten</label>

				<Input
					type='text'
					id='product-name'
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
					onBlur={() => setNameIsDirty(true)}
					required
				/>
			</InputGroup>

			<ErrorMessage>{nameIsDirty && (nameIsValid === false && <p>minst 3 bokstäver</p>)}</ErrorMessage>

			<InputGroup key='product-description'>
				<label htmlFor='product-description'>Beskrivning av produkten</label>
				<TextArea
					id='product-description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					onBlur={() => setDescriptionIsDirty(true)}
					required
				/>
			</InputGroup>

			<ErrorMessage>{descriptionIsDirty && (descriptionIsValid === false && <p>minst 3 tecken</p>)}</ErrorMessage>

			<InputGroup key='product-price'>
				<label htmlFor='product-price'>Pris</label>
				<Input
					type='text'
					id='product-price'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					onBlur={() => setPriceIsDirty(true)}
					required
				/>
			</InputGroup>

			<ErrorMessage>{priceIsDirty && (priceIsValid === false && <p>Endast siffror</p>)}</ErrorMessage>

			<InputGroup key='product-url'>
				<label htmlFor='product-url'>Bild (url)</label>
				<Input
					type='text'
					id='product-url'
					value={picture}
					onChange={(e) => setPicture(e.target.value)}
					onBlur={() => setPictureIsDirty(true)}
					required
				/>
			</InputGroup>

			<ErrorMessage>{pictureIsDirty && (urlIsValid === false && <p>kontrollera att url:en är giltig</p>)}</ErrorMessage>


			<Status>{statusMessage && <p>{statusMessage}</p>}</Status>

			<AddButton type="submit" onClick={handleSubmit} disabled={isLoading}>Lägg till</AddButton>
		</Form>
	)
}


export default AddProductForm