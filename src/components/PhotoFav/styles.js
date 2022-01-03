import styled from 'styled-components';
import { Link as Ruta } from 'react-router-dom';

export const Link = styled(Ruta)`
  display: block;
  width: 40%;
  height: 150px;
  margin: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
