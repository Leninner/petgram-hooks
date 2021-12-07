import styled, { css } from 'styled-components';
import { bounceDown } from '../../styles/animations';

export const List = styled.ul`
	display: flex;
	overflow: scroll;
	width: 100%;
	${(props) =>
		props.fixed &&
		css`
			 {
				${bounceDown()};
				background-color: white;
				border-radius: 60px;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
				margin: 0 auto;
				left: 0;
				max-width: 400px;
				padding: 5px;
				position: fixed;
				right: 0;
				top: -20px;
				transform: scale(0.5);
				z-index: 1;
			}
		`}
`;

export const Item = styled.li`
	padding: 0 8x;
`;
