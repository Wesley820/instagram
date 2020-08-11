import React, { useRef } from 'react';
import * as Yup from 'yup';
import axios from '../../../services/axios';

import { useRegister } from '../../../contexts/register';
import Header from '../../../components/HeaderRegister';

import { Container, Form, Title, Input, Button, ButtonText } from './styles';

export default function NameRegister({ navigation }) {
  const { handleChangeInputs } = useRegister();
  const formRef = useRef(null);

  async function handleFormSubmit(data) {
    if (!data.username) {
      return;
    }

    try {
      const schema = Yup.object().shape({
        username: Yup.string().matches(
          /^(?=[a-z_\d]*[a-z])[a-z._\d]{5,}$/gim,
          'Este nome de usuário é inválido'
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const validationErrors = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
        return;
      }
    }

    formRef.current.setErrors({});

    try {
      const response = await axios.post('/verify/username', data);
      if (response.data.exists === true) {
        return formRef.current.setFieldError(
          'username',
          'Este nome de usuário já existe'
        );
      }
      handleChangeInputs(data);
      navigation.navigate('Email');
    } catch (error) {
      return formRef.current.setFieldError(
        'username',
        'Erro ao verificar nome de usuário'
      );
    }
  }

  return (
    <Container>
      <Header title="Nome de usuário" navigation={navigation} />
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Title>Qual será seu nome de usuário?</Title>
        <Input
          placeholder="Nome de usuário"
          autoFocus={true}
          autoCapitalize="none"
          name="username"
          autoCorrect={false}
          spellCheck={false}
        />
        <Button onPress={() => formRef.current.submitForm()}>
          <ButtonText>Avançar</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
