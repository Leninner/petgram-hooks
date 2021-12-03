import React from 'react';
import styled from 'styled-components';
import { Category } from './Category';

const button = styled.button`
	background: transparent;
	border: 2px solid #fff;
	color: #fff;
	margin: 0 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
	font-size: 1em;
	font-weight: bold;
	&:hover {
		background: #fff;
		color: #000;
	}
`;

export const App = () => {
	return (
		<div>
			<h1>Hello World Mathias</h1>
			<Category />
		</div>
	);
};
