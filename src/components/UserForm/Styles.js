import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  color: #b5179e;
  text-align: center;
  margin: 40px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

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
`;
