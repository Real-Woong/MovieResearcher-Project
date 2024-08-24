import React, { useState } from 'react';
import { Form, Title, Input, Button, LoginContainer } from './StyledLogin';
import { login } from '../api/Account';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ username, password });
      console.log('Login Success:', data);
      localStorage.setItem('token', data.token); // 토큰 저장
      localStorage.setItem('username', username); // 사용자 이름 저장
      navigate('/'); // 홈으로 이동
      window.location.reload(); // 페이지 새로고침
    } catch (err) {
      console.error('Login Error:', err);
      setLoginError(err.message || '로그인에 실패했습니다.');
    }
  };

  return (
    <LoginContainer>
      <Title>로그인 페이지</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">로그인</Button>
        {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
      </Form>
    </LoginContainer>
  );
};

export default Login;
