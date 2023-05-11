import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import backIcon from '../assets/icons/arrow-go-back-line.png'
import { AddButton } from '../components/productComponents/ProductCard'
import addToCart from '../utils/addToCart'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../data/atoms/cartAtom'
import { productsAtom } from '../data/atoms/productsAtom'

const ProductDetailsMain = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.5fr 3fr 1.3fr 0.5fr;
	grid-template-areas: 
	'back'
	'img' 
	'info'
	'addBtn';

	@media screen and (min-width: 600px){
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 0.5fr 2fr 2fr;
		grid-template-areas: 
		'back .'
		'img info'
		'img addBtn';
	}
	
	@media screen and (min-width: 1000px){
		grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
		grid-template-areas: 
		'back . . .'
		'. img info .'
		'. img addBtn .';
	}
`
const Back = styled(Link)`
	grid-area: back;
	margin: 0.5em;
`

const ProductImg = styled.img`
	max-height: 35em;
	width: 100%;
	object-fit: cover;
`

const ProductImgContainer = styled.div`
	grid-area: img;
	width: 100%;
	padding: 0.8em;
	`

const ProductInfoContainer = styled.div`
	grid-area: info;
	padding: 0.8em;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: 
	'heading price'
	'desc desc';
	gap: 1.5em;
`

const ProductHeading = styled.h2`
	grid-area: heading;
	place-self: center start;
`
const ProductPrice = styled.p`
	grid-area: price;
	place-self: center end;
	font-size: 1.3em;
	font-weight: bold;
`
const ProductDesc = styled.p`
	grid-area: desc;
`

const AddToCart = styled(AddButton)`
	margin: 2em;
	grid-area: addBtn;
	place-self: center;
`

const ProductDetails = () => {
	const [cart, setCart] = useRecoilState(cartAtom)
	const [products] = useRecoilState(productsAtom)
	const { id } = useParams()

	const product = products.find(p => String(p.id) === id)

	if (!product) {
		return (
			<section>
				<h2> No product </h2>
				<p> Please check the URL again. </p>
				<p> <Link to="/products"> Back to products </Link> </p>
			</section>
		)
	}

	return (
		<ProductDetailsMain>
			<Back to="/products"><img src={backIcon} alt="Tillbaka" /> </Back>
			<ProductImgContainer>

				<ProductImg key={product.id} src={product.picture} alt={product.name}></ProductImg>

			</ProductImgContainer>
			<ProductInfoContainer>
				<ProductHeading> {product.name} </ProductHeading>
				<ProductPrice> {product.price}:- </ProductPrice>
				<ProductDesc> {product.description} </ProductDesc>
			</ProductInfoContainer>
			<AddToCart onClick={() => addToCart(product, cart, setCart)}>Lägg till i kundkorg</AddToCart>

		</ProductDetailsMain>
	)
}


export default ProductDetails