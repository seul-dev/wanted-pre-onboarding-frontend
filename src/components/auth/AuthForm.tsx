import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../common/Button';
import { AuthContext } from '../../store/AuthContext';

const AuthForm = () => {
  const { login } = useContext(AuthContext);
  const [loginMode, setLoginMode] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [validationText, setValidationText] = useState({
    emailText: '',
    passwordText: '',
  });

  useEffect(() => {
    const handleBtnDisabled = () => {
      if (
        formData.email &&
        formData.password &&
        !validationText.emailText &&
        !validationText.passwordText
      ) {
        setBtnDisabled(false);
      } else {
        setBtnDisabled(true);
      }
    };
    handleBtnDisabled();
  }, [
    formData.email,
    formData.password,
    validationText.emailText,
    validationText.passwordText,
  ]);

  const switchLoginMode = () => {
    setLoginMode((prev) => !prev);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    let msg = '';

    if (name === 'email') {
      msg = !value.includes('@') ? '이메일 형식을 확인해주세요' : '';
      setValidationText((prev) => ({ ...prev, emailText: msg }));
    } else if (name === 'password') {
      msg = value.trim().length < 8 ? '비밀번호는 8자리 이상이어야 합니다' : '';
      setValidationText((prev) => ({ ...prev, passwordText: msg }));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let url = process.env.REACT_APP_API_URL;
    url += loginMode ? '/auth/signin' : '/auth/signup';

    try {
      const { data } = await axios.post(url, formData);
      if (data.access_token) {
        login(data.access_token);
      }
    } catch (error: any) {
      if (error.response?.data.statusCode) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{loginMode ? '로그인' : '회원가입'}</Title>

      <Label>이메일</Label>
      <Input
        type='text'
        placeholder='email'
        name='email'
        value={formData.email}
        onChange={handleInputChange}
      />
      <ErrorMsg>{validationText.emailText}</ErrorMsg>
      <Label>비밀번호</Label>
      <Input
        type='password'
        placeholder='password'
        name='password'
        value={formData.password}
        onChange={handleInputChange}
      />
      <ErrorMsg>{validationText.passwordText}</ErrorMsg>
      <Button type='submit' disabled={btnDisabled} color='green' size='large'>
        {loginMode ? '로그인' : '회원가입'}
      </Button>

      <SwitchMode onClick={switchLoginMode}>
        {loginMode ? '새로운 계정으로 가입' : '이미 존재하는 계정으로 로그인'}
      </SwitchMode>
    </Form>
  );
};

export default AuthForm;

const Form = styled.form`
  margin: 3rem auto;
  width: 95%;
  border-radius: 5px;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--green);
  font-weight: 700;
`;
const Label = styled.label`
  font-size: 1.2rem;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--green);
  text-align: start;
  display: block;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
  width: 100%;
  border: solid 1px var(--black);
  &:focus {
    outline: none;
  }
`;

const ErrorMsg = styled.p`
  font-size: 0.9rem;
  color: var(--red);
  display: block;
  text-align: start;
  padding-left: 0.3rem;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`;

const SwitchMode = styled.div`
  font-size: 1rem;
  padding-top: 1rem;
  cursor: pointer;
  color: var(--blue);
`;
