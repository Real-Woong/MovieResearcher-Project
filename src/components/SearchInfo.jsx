import React from 'react';
import {
  MoviesGrid,
  MovieCard
} from './StyledSearchInfo';
import { useNavigate } from 'react-router-dom';

const SearchComponent = ({ results, query }) => {
  const navigate = useNavigate();

  if (!query.trim()) {
    return null;
  }

  const moveToDetailPage = (id) => {
    // 여기에서 템플릿 리터럴에 백틱을 사용하여 문자열 내 변수 삽입
    navigate(`/movies/${id}`); 
    window.scrollTo(0, 0); // 여기도 콤마를 마침표로 변경
  };

  return (
    <MoviesGrid>
      {results.length > 0 ? (
        results.map((movie) => (
          <MovieCard key={movie.id} onClick={() => moveToDetailPage(movie.id)} data-id={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="overlay">
              <p>{movie.overview}</p>
              <p>Rating: {movie.vote_average}</p>
            </div>
            <p>{movie.title}</p>
            <p>⭐ {movie.vote_average}</p>
          </MovieCard>
        ))
      ) : (
        <p>No results found</p>
      )}
    </MoviesGrid>
  );
};

export default SearchComponent;
