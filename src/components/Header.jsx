import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import shoppingCart from '../assets/icons/shopping-cart-2-line.png'
import headerBackground from '../assets/images/header-background-medium.jpg'
import { useRecoilState } from 'recoil'
import { showCartAtom } from '../data/atoms/showCartAtom'
import Cart from './Cart'
import { loggedInAtom } from '../data/atoms/loggedInAtom'

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
	const [showCart, setShowCart] = useRecoilState(showCartAtom)
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
	const navigate = useNavigate()

	const handleCartClick = () => {
		setShowCart(!showCart)
		console.log(showCart);
	}

	const handleLogout = () => {
		setLoggedIn(false)
		navigate('/')
	}

	return (
		<HeaderStyled>
			<HeaderLogo>Skutberget Vattenland <br />
				Webshop
			</HeaderLogo>
			<NavBar>
				<NavLink to='/'>Hem</NavLink>
				<NavLink to='/products'>Produkter</NavLink>
				<CartButton><img src={shoppingCart} alt="kundvagn"
					onClick={handleCartClick}
				/></CartButton>
			</NavBar>
			<Cart />
		</HeaderStyled>
	)
}

export default Header