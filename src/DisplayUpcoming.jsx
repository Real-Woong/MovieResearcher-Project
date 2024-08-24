import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { fetchUpComing } from "./api/Upcoming.js";
import StyledAppContainer from './components/StyledDisplay.js';

function DisplayUpcoming() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchUpComing().then(data => {
            setMovies(data); // API에서 받은 데이터를 상태에 저장
        });
    }, []);

    return (
        <div>
            <StyledAppContainer>
             {movies.map((item)=>(
                    <Movie
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                    />
             ))}
         </StyledAppContainer>
        </div>
    )
}

export default DisplayUpcoming;