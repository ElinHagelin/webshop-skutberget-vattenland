import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import shoppingCart from '../assets/icons/shopping-cart-2-line.png'
import headerBackground from '../assets/images/header-background-medium.jpg'

const HeaderStyle = styled.header`
	border: 3px solid black;
	background-color: lightblue;
	background-image: url(${headerBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center; 
	padding: 1em;
	display: flex;
	justify-content: space-between;
`

const NavBar = styled.nav`
	display: flex;
	gap: 2em;
`

// const NavLink = styled.a`
// 	font-size: 1.5em;
// `

const Header = () => {
	return (
		<HeaderStyle>
			<h1>Skutberget Vattenland <br />
				Webshop
			</h1>
			<NavBar>
				<NavLink to='/'>Hem</NavLink>
				<NavLink to='/products'>Produkter</NavLink>
				<button><img src={shoppingCart} alt="kundvagn" /></button>
			</NavBar>
		</HeaderStyle>
	)
}

export default Header