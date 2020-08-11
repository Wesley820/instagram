import React, { useRef } from 'react';
import * as Yup from 'yup';
import axios from '../../../services/axios';

import { useRegister } from '../../../contexts/register';
import Header from '../../../components/HeaderRegister';

import { Container, Form, Title, Input, Button, ButtonText } from './styles';

export default function EmailRegister({ navigation }) {
  const { handleChangeInputs } = useRegister();
  const formRef = useRef(null);

  async function handleFormSubmit(data) {
    if (!data.email) {
      return;
    }

    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Este email é inválido'),
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
      const response = await axios.post('/verify/email', data);
      if (response.data.exists === true) {
        return formRef.current.setFieldError('email', 'Este email já existe');
      }
      handleChangeInputs(data);
      navigation.navigate('Password');
    } catch (error) {
      return formRef.current.setFieldError('email', 'Erro ao verificar Email');
    }
  }

  return (
    <Container>
      <Header title="Email" navigation={navigation} />
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Title>Digite seu melhor email.</Title>
        <Input
          placeholder="Email"
          name="email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoFocus={true}
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
