import styled from "styled-components"
import homeBackground from '../assets/images/home-background.jpg'
import { NavLink } from "react-router-dom"
import { useRecoilState } from "recoil"
import { loggedInAtom } from "../data/atoms/loggedInAtom"


const HeroContainer = styled.div`
	background-image: url(${homeBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center; 
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15rem;
	width: 100%;
    flex-grow: 1;


	@media (min-width: 553px) {
		gap: 17rem;
	}
	@media (min-width: 620px) {
		gap: 22rem;
	}
	@media (min-width: 1100px) {
		align-items: flex-start;
		justify-content: center;
		padding-left: 3rem;
		gap: 5rem;
	}
`

const HeroHeading = styled.h1`
	margin: 2rem 0 0 0;
	font-size: 1.4em;

	@media (min-width: 770px) {
		font-size: 1.6em;
	}
	@media (min-width: 1100px) {
		margin: 0 0 0 2rem;
		font-size: 1.9em;
	}
	@media (min-width: 1500px) {
		margin: 0 0 0 6rem;
		font-size: 2.1em;
	}
`

const HeroSubHeading = styled.h2`
	font-size: 1.2em;
	text-align: center;
	
	@media (min-width: 770px) {
		font-size: 1.3em;
	}
	@media (min-width: 1100px) {
		font-size: 1.4em;
		margin-left: 4rem;
	}
	@media (min-width: 1500px) {
		font-size: 1.6em;
		margin-left: 8rem;
	}
`

const Home = () => {
	const [loggedIn] = useRecoilState(loggedInAtom)
	console.log('loggedIn är: ', loggedIn);
	return (
		<>
			<HeroContainer>
				<HeroHeading>Välkommen till webshopen!</HeroHeading>
				<HeroSubHeading>För att se våra produkter <br /> klicka <NavLink to={'/products'}>här</NavLink>!</HeroSubHeading>
			</HeroContainer>

		</>
	)
}

export default Home