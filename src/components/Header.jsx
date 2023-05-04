import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import shoppingCart from '../assets/icons/shopping-cart-2-line.png'
import headerBackground from '../assets/images/header-background-medium.jpg'

const HeaderStyled = styled.header`
	padding: 1.5em 2em;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	position: relative;
	
	&::before {
		content: '';
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background-image: url(${headerBackground});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		opacity: 0.5; 
	}
	
`

const HeaderLogo = styled.h1`
	text-align: center;
	position: relative;

`

const NavBar = styled.nav`
	display: flex;
	gap: 4em;
	align-items: center;
	position: relative;
`

const CartButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;

	&:hover {
		transform: scale(1.1)
	}
`

// const NavLink = styled.a`
// 	font-size: 1.5em;
// `

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderLogo>Skutberget Vattenland <br />
				Webshop
			</HeaderLogo>
			<NavBar>
				<NavLink to='/'>Hem</NavLink>
				<NavLink to='/products'>Produkter</NavLink>
				<CartButton><img src={shoppingCart} alt="kundvagn" /></CartButton>
			</NavBar>
		</HeaderStyled>
	)
}

export default Header