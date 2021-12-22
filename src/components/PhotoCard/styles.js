import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  display: block;
  height: 0;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  ${fadeIn()}
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
