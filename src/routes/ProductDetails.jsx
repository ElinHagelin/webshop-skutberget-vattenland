import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import backIcon from '../assets/icons/arrow-go-back-line.png'
import { AddButton } from '../components/productComponents/ProductCard'
import addToCart from '../utils/addToCart'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../data/atoms/cartAtom'

const ProductDetailsMain = styled.section`
	display: flex;
	flex-direction: column;
`

const ProductImg = styled.img`
	max-height: 15em;
	max-width: 15em;
	object-fit: cover;

	&:first-child {
		max-height: 30em;
		max-width: 30em;
		grid-row: 1/ span 2;
	}
	/* &:last-child {
		align-self:flex-end;
	} */
`

const ProductImgContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	/* max-width: fit-content; */
`

const ProductDetails = () => {
	const [cart, setCart] = useRecoilState(cartAtom)

	// id kommer från URL:  /details/:id
	// vi återanvänder loader-funktionen från Products.jsx
	// Leta efter produkten med samma id i listan med alla produkter. Se upp med datatyperna!
	// const navigate = useNavigate()
	const { id } = useParams()  // obs! id är en sträng!
	const allProducts = useLoaderData()
	console.log('allProducts är: ', allProducts);
	console.log('id är: ', id);
	const product = allProducts.find(p => String(p.productid) === id)
	console.log('Produkten i ProductDetails är: ', product);

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
			<Link to="/products"><img src={backIcon} alt="Tillbaka" /> </Link>
			<ProductImgContainer>
				{product.picture.map(img => (
					<ProductImg key={img} src={img} alt={product.name}></ProductImg>
				))}
			</ProductImgContainer>
			<h2> {product.name} </h2>
			<p> {product.price} </p>
			<p> {product.description} </p>
			<AddButton onClick={() => addToCart(product, cart, setCart)}>Lägg till i kundkorg</AddButton>

		</ProductDetailsMain>
	)
}


export default ProductDetails