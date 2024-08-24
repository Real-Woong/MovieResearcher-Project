import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { StyledNavContainer, StyledNavBar, StyledHomeButton, StyledNavList } from './components/StyledNavBar';

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 로드 시 로그인 상태 확인
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 삭제
    localStorage.removeItem('username'); // 사용자 이름 삭제
    setIsLoggedIn(false); // 로그인 상태 업데이트
    setUsername(''); // 사용자 이름 초기화
    navigate('/'); // 홈으로 이동
    window.location.reload(); // 페이지 새로고침
  };

  return (
    <div>
      <StyledNavContainer>
        <StyledHomeButton>
          <li>
            <Link to='/'>UMC Movie</Link>
          </li>
        </StyledHomeButton>
        <StyledNavBar>
        {isLoggedIn ? (
            <>
              <StyledNavList>
                <button onClick={handleLogout}>로그아웃</button>
              </StyledNavList>
            </>
          ) : (
            <>
              <StyledNavList>
                <Link to='/loginpage'>로그인</Link>
              </StyledNavList>
              <StyledNavList>
                <Link to='/signuppage'>회원가입</Link>
              </StyledNavList>
            </>
          )}
          <StyledNavList>
            <Link to='/displaypopular'>Popular</Link>
          </StyledNavList>
          <StyledNavList>
            <Link to='/displaynowplaying'>Now Playing</Link>
          </StyledNavList>
          <StyledNavList>
            <Link to='/displaytoprated'>Top Rated</Link>
          </StyledNavList>
          <StyledNavList>
            <Link to='/displayupcoming'>Upcoming</Link>
          </StyledNavList>
        </StyledNavBar>
      </StyledNavContainer>
    </div>
  );
}

export default Nav;
