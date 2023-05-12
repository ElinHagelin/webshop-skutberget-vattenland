import styled from "styled-components";

export const Button = styled.button`
	max-width: fit-content;
	font-size: 1.1em;
	padding: 0.3em 0.8em;
	align-self: center;
	border-radius: 0.5em;
	background-color: #A7CBD2;
	border: 1px solid #90bcc4;
	box-shadow: 0.3em 0.3em 1em lightgray;
	cursor: pointer;

	&:hover {
		background-color: #89bdc7;
		border: 1px solid #7eb0b9;
	}
`

export const Input = styled.input`
	padding: 0.3em 0.5em;
	border-radius: 0.4em;
	border: 1px solid gray;
`