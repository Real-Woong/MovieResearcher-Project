const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJlMmE1YjI1YmRlZGU1MTRiNjgxZDllZjc3NmEwNCIsInN1YiI6IjY2MmY2NzgxMWYwMjc1MDEyNzE0YzY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IeCpKQUfdG1dbyoUhPeCGuZpVRPJR6RTmjHUA1zkgIE';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export async function fetchMovieDetails(id) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, options);
  if (!response.ok) {
    throw new Error('Movie not found');
  }
  const movie = await response.json();
  
  return {
    posterPath: movie.poster_path,
    title: movie.title,
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
    overview: movie.overview,
  };
}
