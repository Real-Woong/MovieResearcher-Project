import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #2c2f5b;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 400px;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border-radius: 20px;
  border: none;
  background-color: #f2f2f2;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 420px;;
  padding: 0.75rem;
  border-radius: 20px;
  border: none;
  background-color: #f2f2f2;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const BottomText = styled.div`
  margin-top: 1rem;
  color: #ffffff;
`;

export const LinkText = styled.a`
  color: #ffffff;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
