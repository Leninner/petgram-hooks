import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 60px;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #0096c7;
  color: white;
  margin-top: 20px;
  &[disabled] {
    opacity: 0.5;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
