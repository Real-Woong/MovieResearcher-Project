import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #2c2c54;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

const MainButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #2c2c54;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <Title>Oops!</Title>
      <Subtitle>예상치 못한 에러가 발생했습니다. : (</Subtitle>
      <p>Not Found</p>
      <MainButton onClick={goToHome}>메인으로 이동하기</MainButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
