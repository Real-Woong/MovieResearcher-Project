import React, { useState } from 'react';
import { Form, Title, Input, Button, SignUpContainer } from './StyledSignUp';
import { signup } from '../api/Account';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [IDError, setIDError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [signupError, setSignupError] = useState('');

  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      ID.trim() !== '' &&
      name.trim() !== '' &&
      email.trim() !== '' &&
      age.trim() !== '' &&
      password !== '' &&
      password === confirmPassword &&
      nameError === '' &&
      emailError === '' &&
      ageError === '' &&
      passwordError === '' &&
      confirmPasswordError === ''
    );
  };

  const handleIDChange = (e) => {
    setID(e.target.value);
    if (e.target.value.trim() === '') {
      setIDError('아이디를 입력해주세요');
    } else {
      setIDError('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() === '') {
      setNameError('이름을 입력해주세요');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim() === '') {
      setEmailError('이메일을 입력해주세요');
    } else if (!e.target.value.includes('@')) {
      setEmailError('올바른 이메일 형식을 입력해주세요');
    } else {
      setEmailError('');
    }
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    const ageValue = parseFloat(e.target.value);
    if (e.target.value.trim() === '') {
      setAgeError('나이를 입력해주세요');
    } else if (isNaN(ageValue) || !Number.isInteger(ageValue)) {
      setAgeError('숫자를 입력해주세요');
    } else if (ageValue < 0) {
      setAgeError('음수를 입력할 수 없습니다');
    } else if (ageValue < 19) {
      setAgeError('19살 이상만 가입이 가능합니다');
    } else {
      setAgeError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4) {
      setPasswordError('비밀번호는 최소 4자리 이상이어야 합니다');
    } else if (e.target.value.length > 12) {
      setPasswordError('비밀번호는 최대 12자리까지 가능합니다');
    } else if (!/[a-zA-Z]/.test(e.target.value) || !/\d/.test(e.target.value) || !/[!@#$%^&*]/.test(e.target.value)) {
      setPasswordError('비밀번호는 영어, 숫자, 특수문자를 포함해야 합니다');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    const userData = {
      name,
      email,
      age,
      username: ID,
      password,
      passwordCheck: confirmPassword
    };
    try {
      const data = await signup(userData);
      console.log('Signup Success:', data);
      localStorage.setItem('token', data.token); // 토큰 저장
      alert('회원가입이 정상적으로 처리되었습니다.');
      navigate('/'); // 홈으로 이동
    } catch (err) {
      console.error('Signup Error:', err);
      setSignupError(err.message || '회원가입에 실패했습니다.');
    }
  };

  return (
    <SignUpContainer>
      <Title>회원가입 페이지</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
        </div>
        <div>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={ID}
            onChange={handleIDChange}
          />
          {IDError && <div style={{ color: 'red' }}>{IDError}</div>}
        </div>
        <div>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        </div>
        <div>
          <Input
            type="text"
            placeholder="나이를 입력해주세요"
            value={age}
            onChange={handleAgeChange}
          />
          {ageError && <div style={{ color: 'red' }}>{ageError}</div>}
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordError && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}
        </div>
        <Button type="submit" disabled={!isFormValid()}>제출하기</Button>
        {signupError && <div style={{ color: 'red' }}>{signupError}</div>}
      </Form>
    </SignUpContainer>
  );
};

export default SignUp;
