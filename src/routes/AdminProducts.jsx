import { useRecoilState } from "recoil"
import styled from "styled-components"
import AddProductForm from "../components/AddProductForm"
import { productsAtom } from "../data/atoms/productsAtom"
import ProductCard from "../components/productComponents/ProductCard"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import { useNavigate } from "react-router-dom"
import ProductGrid from './Products.jsx'
import { useEffect } from "react"

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2em;
	`


const AdminProducts = () => {
	const [products] = useRecoilState(productsAtom)
	const [loggedIn] = useRecoilState(loggedInAtom)
	const navigate = useNavigate()

	useEffect(() => {
		if (!loggedIn) {
			navigate('/admin');
		}
	}, [loggedIn, navigate]);


	return (
		<>
			<FormContainer>
				<AddProductForm />
			</FormContainer>

			{
				products
					? <ProductGrid>
						{products.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</ProductGrid>
					: <p>Laddar produkter...</p>
			}
		</>
	)
}

export default AdminProducts