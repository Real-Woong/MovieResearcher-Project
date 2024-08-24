const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJlMmE1YjI1YmRlZGU1MTRiNjgxZDllZjc3NmEwNCIsInN1YiI6IjY2MmY2NzgxMWYwMjc1MDEyNzE0YzY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IeCpKQUfdG1dbyoUhPeCGuZpVRPJR6RTmjHUA1zkgIE';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

export async function fetchMovieCredits(id) {
const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`, options);
if (!response.ok) {
    throw new Error('Credits not found');
}
const data = await response.json();
return data;
}