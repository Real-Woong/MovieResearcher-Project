import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import MovieDetail from './components/MovieDetail';
import MovieCredits from './components/Credits';

import { fetchMovieCredits } from './api/Credits';
import { fetchMovieDetails } from './api/Details';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
        const movieCredits = await fetchMovieCredits(id);
        setCredits(movieCredits);
      } catch (err) {
        setError(err.message);
        navigate('/not-found'); 
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <div>
      <MovieDetail movie={movie} />
      <MovieCredits credits={credits} />
    </div>
  );
};

export default MovieDetailPage;

