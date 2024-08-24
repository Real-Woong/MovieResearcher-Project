import styled from 'styled-components';

export const CreditsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1c1c1c;
  padding: 20px;
  gap: 20px;
`;

export const CreditItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-align: center;
  margin: 10px;
`;

export const CreditImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const CreditName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
`;

export const CreditRole = styled.p`
  font-size: 0.8rem;
  color: #aaa;
`;

