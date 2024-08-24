import React from 'react';
import { 
  MovieDetailContainer, 
  MovieDetailContent, 
  MoviePoster, 
  MovieInfo, 
  MovieTitle, 
  MovieDetails, 
  MovieDescription 
} from './StyledMovieDetail';

const MovieDetail = ({ movie }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return '⭐️'.repeat(fullStars);
  }
  return (
    <MovieDetailContainer>
      <MovieDetailContent>
        <MoviePoster src={`http://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetails>
            <div>평점: {renderStars(movie.voteAverage)}</div>
            <div>개봉일: {movie.releaseDate}</div>
          </MovieDetails>
          <MovieDescription>{movie.overview}</MovieDescription>
        </MovieInfo>
      </MovieDetailContent>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
