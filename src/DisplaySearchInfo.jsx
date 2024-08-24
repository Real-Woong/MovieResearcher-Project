import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

import { searchMovies } from './api/SearchInfo';
import SearchComponent from './components/SearchInfo';
import Search1 from './components/Search1';
import {
  SearchContainer,
  ScrollbarStyled
} from './components/StyledSearchInfo';

const DisplaySearchInfo = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.trim() !== '') {
        const data = await searchMovies(query);
        const searchResults = data.results || [];

        // 전체 데이터의 제목을 소문자로 변환
        const titleList = searchResults.map(item => item.title.toLowerCase());

        // query 검색어와 일치하는 제목을 필터링
        const findTitle = titleList.filter(item => item.includes(query.toLowerCase()));

        // 전체 타이틀 리스트에서 일치하는 타이틀의 인덱스 번호 찾기
        const findIndex = findTitle.map(title => titleList.findIndex(item => item === title));

        if (findIndex.length === 0) {
          setResults([]);
        } else {
          const matchMovies = findIndex.map(index => searchResults[index]);
          setResults(matchMovies);
        }
      } else {
        setResults([]);
      }
    }, 500), // 500ms 지연
    []
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSearch = () => {
    debouncedSearch(query);
  };


  return (
    <ScrollbarStyled>
      <SearchContainer>
       <Search1 query={query} handleSearchChange={handleSearchChange} handleSearch={handleSearch} />
       {isLoading ? (
        <p>데이터를 받아오는 중입니다...</p>
       ): (
        <SearchComponent results={results} query={query} />
       )}
      </SearchContainer>
    </ScrollbarStyled>
  );
};

export default DisplaySearchInfo;
