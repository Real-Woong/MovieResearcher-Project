import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 화면을 뿌옇게 만드는 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 오버레이가 다른 요소들 위에 표시되도록 */
`;

const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default LoadingSpinner;
