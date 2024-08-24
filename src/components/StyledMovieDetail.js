import styled from 'styled-components';

export const MovieDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: url('/path/to/your/background.jpg') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  color: white;
`;

export const MovieDetailContent = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
  max-width: 900px;
  width: 100%;
`;

export const MoviePoster = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const MovieDetails = styled.div`
  margin-bottom: 20px;
`;

export const MovieDescription = styled.p`
  line-height: 1.5;
`;
