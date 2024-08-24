import React from 'react';
import { IconButton } from 'rsuite';
import { Search } from '@rsuite/icons';
import 'rsuite/dist/rsuite.min.css';
import { StyledFindMovies, StyledNewInput } from './StyledSearch';

const Search1 = ({ query, handleSearchChange }) => {
    return (
        <div className='find-movies'>
            <StyledFindMovies>📽️Find your movies!</StyledFindMovies>
            <StyledNewInput>
                <input 
                  type='text'
                  value={query}
                  onChange={handleSearchChange}
                />
                <IconButton 
                  icon={<Search/>} 
                  appearance='primary' 
                  circle size='sm'
                  onClick={() => handleSearchChange({ target: { value: query } })}
                  disabled={!query || !query.trim()}
                />
            </StyledNewInput>
        </div>
    );
}

export default Search1;