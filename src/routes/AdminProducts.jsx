import { useRecoilState } from "recoil"
import styled from "styled-components"
import AddProductForm from "../components/AddProductForm"
import { productsAtom } from "../data/atoms/productsAtom"
import ProductCard from "../components/productComponents/ProductCard"
import { loggedInAtom } from "../data/atoms/loggedInAtom"
import { Navigate } from "react-router-dom"
import ProductGrid from './Products.jsx'

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2em;
	`


const AdminProducts = () => {
	const [products] = useRecoilState(productsAtom)
	const [loggedIn] = useRecoilState(loggedInAtom)

	if (loggedIn === false) {
		<Navigate to="/admin" />
	} else {
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
}

export default AdminProducts