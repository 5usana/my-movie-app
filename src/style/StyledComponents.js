import styled from 'styled-components';

const MyButton = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'teal' : 'black')};
	color: ${(props) => (props.primary ? 'black' : 'teal')};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid teal;
	border-radius: 3px;
`;

export default MyButton;
