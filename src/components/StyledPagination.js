import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #2c2f5b;
  padding: 10px 0;
`;

export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 10px;

  &:disabled {
    color: #555;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.span`
  color: #ffffff;
  font-size: 1.5rem;
`;
