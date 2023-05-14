import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import shoppingCart from '../assets/icons/shopping-cart-2-line.png'
import headerBackground from '../assets/images/header-background-medium.jpg'
import { useRecoilState } from 'recoil'
import { showCartAtom } from '../data/atoms/showCartAtom'
import Cart from './Cart'
import { loggedInAtom } from '../data/atoms/loggedInAtom'
import logoutIcon from '../assets/icons/logout-box-line.png'
import { useState } from 'react'
import '../assets/fonts/fonts.css'
import logo from '../assets/images/logo.png'


const HeaderStyled = styled.header`
	display: flex;
	height: 100px;
	padding: 0 0.5em;
	justify-content: space-between;
	align-items:center;
	
	@media (min-width: 700px) {
		padding: 0 2em;	
	}
`

const HeaderLogoContainer = styled.div`
	@media (min-width: 700px) {
		flex: 60%
	}
`

const HeaderLogo = styled.img`	
	width: 10rem;
`

const NavBar = styled.nav`
	display: flex;
	flex: 10%;
	flex-flow: row nowrap;
	background-color: #ecfaff;
	gap: 3em;
	/* justify-content: space-around; */
	padding: 1.5em;
	
	& a {
		padding: 0.5em;
	}
	
	@media (max-width: 700px) {
		flex: initial;
		flex-flow: column nowrap;
		position: fixed;
		transform: ${({ extendedMenu }) => extendedMenu ? 'translateX(0)' : 'translateX(-100%)'};
		top: 100px;
		left: 0;
		height: 100vh;
		width: 20rem;
		transition: transform 0.3s ease-in-out;
		align-items: center;
		padding-top: 2rem;
		gap: 1em;
	}
`

const HeaderNavLink = styled(NavLink)`
	color: black;
	font-size: 1.2em;
	text-decoration: none;
	
	&.active {
		text-decoration: underline;
	}
	&:hover {
		text-decoration: underline;
		transform: scale(1.1);
	}
`

const HeaderButton = styled.button`
	min-width: 50px;
	height: 50px;
	border: none;
	background-color: transparent;
	cursor: pointer;
	/* display: flex; */
	/* align-items: center; */
	gap: 0.5em;

	&:hover {
		transform: scale(1.1)
	}

	@media (min-width: 700px) {
		flex: 10%
	}
`

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	/* position: fixed;
	top: 15px;
	left: 20px; */
	margin: 0.5em;
	display: none;

	@media (max-width: 700px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	

	& div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ extendedMenu }) => extendedMenu ? '#ccc' : '#333'};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ extendedMenu }) => extendedMenu ? 'rotate(45deg)' : 'rotate(0)'};
		}
		&:nth-child(2) {
			transform: ${({ extendedMenu }) => extendedMenu ? 'translateX(-100%)' : 'translateX(0)'};
			opacity: ${({ extendedMenu }) => extendedMenu ? 0 : 1};
		}
		&:nth-child(3) {
			transform: ${({ extendedMenu }) => extendedMenu ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}
`


const Header = () => {
	const [showCart, setShowCart] = useRecoilState(showCartAtom)
	const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
	const [extendedMenu, setExtendedMenu] = useState(false)
	const navigate = useNavigate()

	const handleCartClick = () => {
		setExtendedMenu(false)
		setShowCart(!showCart)
		console.log(showCart);
	}

	const handleLogout = () => {
		setExtendedMenu(false)
		setLoggedIn(false)
		navigate('/')
	}

	const handleMenuClick = () => {
		setShowCart(false)
		setExtendedMenu(!extendedMenu)
	}


	if (loggedIn === true) {
		return (
			<HeaderStyled>
				<StyledBurger extendedMenu={extendedMenu} onClick={handleMenuClick}>
					<div />
					<div />
					<div />
				</StyledBurger>
				<HeaderLogoContainer>
					<HeaderNavLink to='/'>
						<HeaderLogo src={logo} alt="" />
					</HeaderNavLink>
				</HeaderLogoContainer>
				<NavBar extendedMenu={extendedMenu}>
					<HeaderNavLink to='admin/users' onClick={() => setExtendedMenu(false)}>Admins</HeaderNavLink>
					<HeaderNavLink to='admin/products' onClick={() => setExtendedMenu(false)}>Produkter</HeaderNavLink>
				</NavBar>
				<div>
					<HeaderButton onClick={handleLogout}>Logga ut <img src={logoutIcon} alt="Logga ut" /></HeaderButton>
				</div>
				<Cart />
			</HeaderStyled>
		)
	} else {
		return (
			<HeaderStyled>
				<StyledBurger extendedMenu={extendedMenu} onClick={handleMenuClick}>
					<div />
					<div />
					<div />
				</StyledBurger>
				<HeaderLogoContainer>
					<HeaderNavLink to='/'>
						<HeaderLogo src={logo} alt="" />
					</HeaderNavLink>
				</HeaderLogoContainer>
				<NavBar extendedMenu={extendedMenu}>
					<HeaderNavLink to='/' onClick={() => setExtendedMenu(false)}>Hem</HeaderNavLink>
					<HeaderNavLink to='/products' onClick={() => setExtendedMenu(false)}>Produkter</HeaderNavLink>
				</NavBar>
				<div>
					<HeaderButton onClick={handleCartClick}><img src={shoppingCart} alt="kundvagn" /></HeaderButton>
				</div>
				<Cart />
			</HeaderStyled>
		)
	}
}
export default Header