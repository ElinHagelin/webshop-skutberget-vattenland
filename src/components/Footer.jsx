import styled from "styled-components"
import facebookLogo from '../assets/icons/facebook-circle-fill.png'
import instagramLogo from '../assets/icons/instagram-fill.png'
import tiktokLogo from '../assets/icons/tiktok-fill.png'


const FooterStyled = styled.footer`
	border: 3px solid black;
	background-color: #9ddcf0;
	padding: 2rem;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	/* flex-wrap: wrap; */
	text-align: center;
	gap: 1rem;

	@media (min-width: 620px) {
    	flex-direction: row;
		align-items: flex-start;
  	}
`

const Paragraph = styled.p`
	margin: 0;
`

const LogoContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	padding: 1rem;
`


const Footer = () => (
	<FooterStyled>
		<div>
			<h4>Öppettider Parken</h4>
			<Paragraph>Måndag - Fredag 10-19</Paragraph>
			<Paragraph>Lördag 10-20</Paragraph>
			<Paragraph>Söndag 10-18</Paragraph>
		</div>
		<div>
			<h4>Kontakta oss</h4>
			<Paragraph>info@skutbergetvattenland.se</Paragraph>
		</div>
		<div>
			<h4>Följ oss på sociala medier</h4>
			<LogoContainer>
				<img src={facebookLogo} alt="facebook" />
				<img src={instagramLogo} alt="instagram" />
				<img src={tiktokLogo} alt="tiktok" />
			</LogoContainer>
		</div>
	</FooterStyled>
)




export default Footer