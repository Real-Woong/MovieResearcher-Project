import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 400px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 20px;
  border: none;
  background-color: #f2f2f2;
  cursor: pointer;

  &:disabled {
    background-color: #ddd;
  }
`;

export const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const MovieCard = styled.div`
  position: relative;
  width: 200px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #2c2f5b;
  color: white;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  p {
    margin: 10px 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

export const ScrollbarStyled = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledFindMovies = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

export const StyledNewInput = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
    width: 300px;
    margin-right: 10px;
  }

  .rs-btn {
    padding: 10px;
    font-size: 16px;
  }
`;
