import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  background: rgb(55, 152, 254);
  background: linear-gradient(
    90deg,
    rgba(55, 152, 254, 1) 0%,
    rgba(16, 181, 243, 1) 28%,
    rgba(36, 166, 249, 1) 42%,
    rgba(12, 72, 92, 1) 100%
  );

  a {
    color: white;
  }
`;
