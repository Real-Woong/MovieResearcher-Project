import React, { forwardRef } from 'react';
import { StyledMovieContainer, StyledMovieInfo } from './StyledMovie';
import { useNavigate } from 'react-router-dom';

const img_base = 'http://image.tmdb.org/t/p/w500';

const Movie = forwardRef(({ id, title, poster_path, vote_average }, ref) => {
  const navigate = useNavigate();

  const moveToDetailPage = () => {
    navigate(`/movies/${id}`); 
    window.scrollTo(0, 0);
  };

  return (
    <StyledMovieContainer onClick={moveToDetailPage} ref={ref}>
      <img src={img_base + poster_path} alt={title} />
      <StyledMovieInfo>
        <h4>{title}</h4>
        <span>⭐️{vote_average}</span>
      </StyledMovieInfo>
    </StyledMovieContainer>
  );
});

export default Movie;
