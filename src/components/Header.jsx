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

`

const NavBar = styled.nav`
	display: flex;
	gap: 4em;
	align-items: center;
	position: relative;
`

const HeaderButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;

	&:hover {
		transform: scale(1.1)
	}
`

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
			{loggedIn
				? <NavBar>
					<NavLink to='admin/users'>Admins</NavLink>
					<NavLink to='admin/products'>Produkter</NavLink>
					<HeaderButton onClick={handleLogout}>Logga ut <img src={logoutIcon} alt="Logga ut" /></HeaderButton>
				</NavBar>

				: <NavBar>
					<NavLink to='/'>Hem</NavLink>
					<NavLink to='/products'>Produkter</NavLink>
					<HeaderButton><img src={shoppingCart} alt="kundvagn"
						onClick={handleCartClick}
					/></HeaderButton>
				</NavBar>
			}
			<Cart />
		</HeaderStyled>
	)
}

export default Header