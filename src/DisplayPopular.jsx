import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { fetchPopular } from "./api/Popular.js";
import StyledAppContainer from './components/StyledDisplay.js';
import { PaginationContainer, PageButton, PageNumber } from './components/StyledPagination.js';

function DisplayPopular() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // 현재 페이지 상태 추가

    useEffect(() => {
        fetchPopular(page).then(data => {
            setMovies(data); // API에서 받은 데이터를 상태에 저장
        });
    }, [page]); // 페이지가 변경될 때마다 API 호출

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div>
            <StyledAppContainer>
                {movies.map((item) => (
                    <Movie
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                    />
                ))}
            </StyledAppContainer>
            <PaginationContainer>
                <PageButton onClick={handlePrevPage} disabled={page === 1}>{'<'}</PageButton>
                <PageNumber>{page}</PageNumber>
                <PageButton onClick={handleNextPage}>{'>'}</PageButton>
            </PaginationContainer>
        </div>
    );
}

export default DisplayPopular;
