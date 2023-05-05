import styled from "styled-components";
import ProductCard from "../components/productComponents/ProductCard";
import testData from "../data/testdata";
import productSorting from "../utils/productSorting";
import productMatch from "../utils/searchFunctions";
import { useRecoilState } from "recoil";
import { productsAtom } from "../data/atoms/productsAtom";


const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	padding: 2em 0;

	@media (min-width: 400px) {
		padding: 2em 3em;
	}
	
	@media (min-width: 1000px) {
		padding: 2em 5em;
	}
`

const PageHeading = styled.h1`
	text-align: center;
	margin-bottom: 0.5em;	
`

const SortSelect = styled.select`
	align-self:flex-end;
	padding: 0.3em;
`

const SearchInput = styled.input`
	max-width: 15em;
	margin-bottom: 1em;
	padding: 0.3em;
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


const Products = () => {
	const [productsToShow, setProductsToShow] = useRecoilState(productsAtom)

	const handleSearchChange = event => {
		let searchString = event.target.value
		setProductsToShow(testData.filter(product => productMatch(product, searchString)))
	}

	const handleSortingChange = event => {
		console.log(event.target.value);
		productSorting(event.target.value, productsToShow, setProductsToShow)
	}

	return (
		<MainContainer>
			<PageHeading>Produkter</PageHeading>
			<SearchInput
				type="text"
				placeholder="Sök efter produkt.."
				onChange={handleSearchChange} />
			<SortSelect name="sort" id="sort-select" onClick={handleSortingChange}>
				<option value="popular">Mest populära</option>
				<option value="alpha-rising" >A till Ö</option>
				<option value="alpha-falling">Ö till A</option>
				<option value="price-rising">Lägst pris</option>
				<option value="price-falling">Högst pris</option>
			</SortSelect>
			<ProductGrid>
				{productsToShow.map(product => (
					<ProductCard key={product.productid} product={product} />
				))}
			</ProductGrid>
		</MainContainer>
	)
}



export default Products