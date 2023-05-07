import { useRecoilState } from "recoil"
import { loginOverlayAtom } from "../data/atoms/loginOverlay"
import styled from "styled-components"
import facebookLogo from '../assets/icons/facebook-circle-fill.png'
import instagramLogo from '../assets/icons/instagram-fill.png'
import tiktokLogo from '../assets/icons/tiktok-fill.png'
import loginIcon from '../assets/icons/login-box-line.png'


const FooterStyled = styled.footer`
	background-color: #9ddcf0;
	padding: 2rem;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 1rem;
	position: relative;

	@media (min-width: 620px) {
    	flex-direction: row;
		align-items: flex-start;
  	}
`

const FooterHeading = styled.h4`
	margin-bottom: 0.5rem;
`
const FooterHeadingLogo = styled.h4`
	display: none;
	margin-bottom: 0.5rem;
	@media (min-width: 620px) {
    	display: unset;
  	}

`

const Paragraph = styled.p`
	margin: 0;
`

const LogoContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	padding: 0.5rem;
`
const Logo = styled.img`
	&:hover {
		transform: scale(1.1)
	}
`

const AdminLogin = styled.button`
	border: none;
	background-color: transparent;
	position: absolute;
	right: 1rem;
	bottom: 1rem;
	cursor: pointer;
`


const Footer = () => {
	const [showLogin, setShowLogin] = useRecoilState(loginOverlayAtom)

	return (
		<FooterStyled>
			<div>
				<FooterHeading>Öppettider Parken</FooterHeading>
				<Paragraph>Måndag - Fredag 10-19</Paragraph>
				<Paragraph>Lördag 10-20</Paragraph>
				<Paragraph>Söndag 10-18</Paragraph>
			</div>
			<div>
				<FooterHeading>Kontakta oss</FooterHeading>
				<Paragraph>info@skutbergetvattenland.se</Paragraph>
			</div>
			<div>
				<FooterHeadingLogo>Följ oss på sociala medier</FooterHeadingLogo>
				<LogoContainer>
					<Logo src={facebookLogo} alt="facebook" />
					<Logo src={instagramLogo} alt="instagram" />
					<Logo src={tiktokLogo} alt="tiktok" />
				</LogoContainer>
			</div>
			<AdminLogin onClick={() => {
				setShowLogin(!showLogin)
				console.log(showLogin);
			}}>
				<Paragraph>Admin <span><img src={loginIcon} alt="login" /></span></Paragraph>
			</AdminLogin>
		</FooterStyled>
	)
}




export default Footer