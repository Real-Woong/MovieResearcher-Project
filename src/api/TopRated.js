export async function fetchTopRated() {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJlMmE1YjI1YmRlZGU1MTRiNjgxZDllZjc3NmEwNCIsInN1YiI6IjY2MmY2NzgxMWYwMjc1MDEyNzE0YzY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IeCpKQUfdG1dbyoUhPeCGuZpVRPJR6RTmjHUA1zkgIE'
      }
  });
  const data = await response.json();
  return data.results || []; // 영화 데이터 배열 반환
}
