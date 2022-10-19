import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AuthContext } from '../../store/AuthContext';
import { Input } from '../auth/AuthForm';
import Button from '../common/Button';
import Card from '../common/Card';
const TodoForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!text.trim().length) {
      setBtnDisabled(true);
    }
  }, [text]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (text.trim().length) {
      setBtnDisabled(false);
    }
    setText(e.currentTarget.value);
  };

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + '/todos',
        { todo: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error: any) {
      if (error.response?.data.statusCode) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Card>
        <Form onSubmit={handleCreate}>
          <CustomInput value={text} onChange={handleChange} />
          <ButtonContainer>
            <Button
              type='submit'
              disabled={btnDisabled}
              color='green'
              size='small'
            >
              추가
            </Button>
          </ButtonContainer>
        </Form>
      </Card>
    </div>
  );
};

export default TodoForm;

const Form = styled.form`
  position: relative;
`;
const CustomInput = styled(Input)`
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.5rem;
`;
