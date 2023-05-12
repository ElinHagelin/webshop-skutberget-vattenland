import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import shoppingCart from '../assets/icons/shopping-cart-2-line.png'
import headerBackground from '../assets/images/header-background-medium.jpg'
import { useRecoilState } from 'recoil'
import { showCartAtom } from '../data/atoms/showCartAtom'
import Cart from './Cart'
import { loggedInAtom } from '../data/atoms/loggedInAtom'
import logoutIcon from '../assets/icons/logout-box-line.png'

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
	font-size: 1.4em;

	@media screen and (min-width: 800px){
		font-size: 1.6em;
	}
`

const NavBar = styled.nav`
	display: flex;
	gap: 4em;
	align-items: center;
	position: relative;
`

const HeaderNavLink = styled(NavLink)`
	color: black;
	font-size: 1.2em;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
		transform: scale(1.1);
	}
	&.active {
		text-decoration: underline;
	}
`

const HeaderButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5em;

	&:hover {
		transform: scale(1.1)
	}
`

// const Header = () => {
// 	const [showCart, setShowCart] = useRecoilState(showCartAtom)
// 	const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
// 	const navigate = useNavigate()

// 	const handleCartClick = () => {
// 		setShowCart(!showCart)
// 		console.log(showCart);
// 	}

// 	const handleLogout = () => {
// 		setLoggedIn(false)
// 		navigate('/')
// 	}


// 	if (loggedIn === false) {
// 		return (
// 			<HeaderStyled>
// 				<HeaderLogo>Skutberget Vattenland <br />
// 					Webshop
// 				</HeaderLogo>
// 				<NavBar>
// 					<HeaderNavLink to='/'>Hem</HeaderNavLink>
// 					<HeaderNavLink to='/products'>Produkter</HeaderNavLink>
// 					<HeaderButton><img src={shoppingCart} alt="kundvagn"
// 						onClick={handleCartClick}
// 					/></HeaderButton>
// 				</NavBar>
// 				<Cart />
// 			</HeaderStyled>
// 		)
// 	} else {
// 		return (
// 			<HeaderStyled>
// 				<HeaderLogo>Skutberget Vattenland <br />
// 					Webshop
// 				</HeaderLogo>
// 				<NavBar>
// 					<HeaderNavLink to='admin/users'>Admins</HeaderNavLink>
// 					<HeaderNavLink to='admin/products'>Produkter</HeaderNavLink>
// 					<HeaderButton onClick={handleLogout}>Logga ut <img src={logoutIcon} alt="Logga ut" /></HeaderButton>
// 				</NavBar>
// 				<Cart />
// 			</HeaderStyled>
// 		)
// 	}
// }

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


	if (loggedIn === false) {
		return (
			<HeaderStyled>
				<HeaderLogo>Skutberget Vattenland <br />
					Webshop
				</HeaderLogo>
				<NavBar>
					<HeaderNavLink to='/'>Hem</HeaderNavLink>
					<HeaderNavLink to='/products'>Produkter</HeaderNavLink>
					<HeaderButton><img src={shoppingCart} alt="kundvagn"
						onClick={handleCartClick}
					/></HeaderButton>
				</NavBar>
				<Cart />
			</HeaderStyled>
		)
	} else {
		return (
			<HeaderStyled>
				<HeaderLogo>Skutberget Vattenland <br />
					Webshop
				</HeaderLogo>
				<NavBar>
					<HeaderNavLink to='admin/users'>Admins</HeaderNavLink>
					<HeaderNavLink to='admin/products'>Produkter</HeaderNavLink>
					<HeaderButton onClick={handleLogout}>Logga ut <img src={logoutIcon} alt="Logga ut" /></HeaderButton>
				</NavBar>
				<Cart />
			</HeaderStyled>
		)
	}
}

export default Header