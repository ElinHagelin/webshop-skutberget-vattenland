import { useRecoilState } from "recoil"
import styled from "styled-components"
import AddProductForm from "../components/AddProductForm"
import { productsAtom } from "../data/atoms/productsAtom"
import ProductCard from "../components/productComponents/ProductCard"
import { loggedInAtom } from "../data/atoms/loggedInAtom"

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 2em;
	`

const ProductGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	padding: 1em 0;

	@media (min-width: 400px) {
    	gap: 1em;
  	}
	@media (min-width: 770px) {
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	}
	@media (min-width: 1000px) {
		gap:2em;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  	}
`

const AdminProducts = () => {
	const [productsToShow, setProductsToShow] = useRecoilState(productsAtom)
	const [loggedIn] = useRecoilState(loggedInAtom)

	if (!loggedIn) {
		<Navigate replace to="/" />
	} else {
		return (
			<>
				<FormContainer>
					<AddProductForm />
				</FormContainer>

				<ProductGrid>
					{productsToShow.map(product => (
						<ProductCard key={product.productid} product={product} />
					))}
				</ProductGrid>
			</>
		)
	}
}

export default AdminProducts