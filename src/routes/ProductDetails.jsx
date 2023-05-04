import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import backIcon from '../assets/icons/arrow-go-back-line.png'

const ProductImg = styled.img`
	height: 20em;
	width: 20em;
	object-fit: cover;

	&:first-child {
		height: 40em;
		width: 40em;
	}
	&:last-child {
		align-self:flex-end;
	}
`

const ProductImgContainer = styled.div`
	display: flex;
	

`

const ProductDetails = () => {

	// id kommer från URL:  /details/:id
	// vi återanvänder loader-funktionen från Products.jsx
	// Leta efter produkten med samma id i listan med alla produkter. Se upp med datatyperna!
	// const navigate = useNavigate()
	const { id } = useParams()  // obs! id är en sträng!
	const allProducts = useLoaderData()
	console.log('allProducts är: ', allProducts);
	console.log('id är: ', id);
	const product = allProducts.find(p => String(p.productid) === id)

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
		<section>
			<Link to="/products"><img src={backIcon} alt="Tillbaka" /> </Link>
			<ProductImgContainer>
				{product.picture.map(img => (
					<ProductImg src={img} alt={product.name}></ProductImg>
				))}
			</ProductImgContainer>
			<h2> {product.name} </h2>
			<p> {product.price} </p>
			<p> {product.description} </p>
			<button>Lägg till i kundkorg</button>

		</section>
	)
}


export default ProductDetails