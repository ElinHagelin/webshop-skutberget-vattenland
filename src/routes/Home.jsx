import styled from "styled-components"
import homeBackground from '../assets/images/home-background.jpg'
import { NavLink } from "react-router-dom"


const HeroContainer = styled.div`
	background-image: url(${homeBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center; 
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3em;
`

const HeroHeading = styled.h1`
	margin: 2rem 0 0 0;
	font-size: 1.4em;

@media (min-width: 770px) {
		margin: 8rem 0 0 5rem;
	}
`

const HeroSubHeading = styled.h2`
	font-size: 1.2em;
	margin-top: 17rem;
	text-align: center;
	@media (min-width: 770px) {
		margin: 0 0 0 5rem;
	}
`

const Home = () => (
	<>
		<HeroContainer>
			<HeroHeading>Välkommen till webshopen!</HeroHeading>
			<HeroSubHeading>För att se våra produkter <br /> klicka <NavLink to={'/products'}>här</NavLink>!</HeroSubHeading>
		</HeroContainer>

	</>
)

export default Home