import React from 'react';

import * as S from './styles';

import { Button, Heading, Modal, TextField } from '@/components';

export const SignIn = () => {
  return (
    <Modal isOpen={true} size="small">
      <Heading>Welcome to CodeLeap network!</Heading>
      <S.InputGroup>
        <TextField label="Please enter your username" placeholder="Jhon doe" />
      </S.InputGroup>
      <S.ButtonGroup>
        <Button>ENTER</Button>
      </S.ButtonGroup>
    </Modal>
  );
};
