import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyle = styled.header`
	border: 3px solid black;
	background-color: lightblue;
	background-image: url('../assets/images/header-background.jpg');
	padding: 1em;
	display: flex;
	justify-content: space-between;
`

const NavBar = styled.nav`
	display: flex;
	gap: 2em;
`

const Header = () => {
	return (
		<HeaderStyle>
			<h1>Skutberget Vattenland <br />
				Webshop
			</h1>
			<NavBar>
				{/* <NavLink to='/'>Produkter</NavLink> */}
				<p>Produkter</p>
				<p>Kundvagn</p>
			</NavBar>
		</HeaderStyle>
	)
}

export default Header