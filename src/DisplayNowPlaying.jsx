import React, { useEffect, useState, useRef, useCallback } from 'react';
import Movie from './components/Movie';
import { fetchNowPlaying } from "./api/NowPlaying.js";
import StyledAppContainer from "./components/StyledDisplay";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function DisplayNowPlaying() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    useEffect(() => {
        setLoading(true);
        fetchNowPlaying(page).then(data => {
            setMovies(prevMovies => [...prevMovies, ...data]); // 이전 영화 목록에 추가
            setLoading(false);
        });
    }, [page]);

    const lastMovieElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading]);

    return (
        <div>
            <StyledAppContainer>
                {movies.map((item, index) => (
                    <Movie 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        ref={movies.length === index + 1 ? lastMovieElementRef : null}
                    />
                ))}
            </StyledAppContainer>
            {loading && <LoadingSpinner />}
        </div>
    );
}

export default DisplayNowPlaying;
