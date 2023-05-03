import styled from "styled-components"


const FooterStyled = styled.footer`
	border: 3px solid black;
	background-color: blue;
	padding: 1em;
	display: flex;
	justify-content: space-around;
`

const Paragraph = styled.p`
	margin: 0;
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
		</div>
	</FooterStyled>
)




export default Footer