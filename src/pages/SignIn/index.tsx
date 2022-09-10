import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as S from './styles';

import { Button, Heading, Modal, TextField } from '@/components';

import { login } from '@/redux/reducers/authReducer';

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  function handleNavigation() {
    dispatch(login(username));
    navigate('/posts');
  }

  return (
    <Modal isOpen={true} size="small">
      <Heading>Welcome to CodeLeap network!</Heading>
      <S.InputGroup>
        <TextField
          label="Please enter your username (required)"
          placeholder="Jhon doe"
          value={username}
          onChange={value => setUsername(value.target.value)}
          autoFocus
          aria-required
        />
      </S.InputGroup>
      <S.ButtonGroup>
        <Button onClick={() => handleNavigation()} isDisabled={!username}>
          ENTER
        </Button>
      </S.ButtonGroup>
    </Modal>
  );
};
