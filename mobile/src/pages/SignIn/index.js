import React, { useRef } from 'react';
import { useAuth } from '../../contexts/auth';
import * as auth from '../../services/auth';
import logo from '../../images/logo.png';

import {
  Container,
  Content,
  Logo,
  Description,
  Form,
  Input,
  ForgotButton,
  ForgotButtonText,
  Button,
  ButtonText,
  Diviser,
  DiviserLine,
  DiviserLabel,
  ButtonRegister,
  ButtonRegisterText,
} from './styles';

export default function Register({ navigation }) {
  const { signIn } = useAuth();
  const formRef = useRef(null);

  async function handleSubmitForm(data) {
    if (!data.email && !data.password) {
      return;
    }

    formRef.current.setErrors({});

    try {
      const response = await auth.signIn(data);
      response && signIn(response.data);
    } catch (error) {
      formRef.current.setFieldError(
        'password',
        'Email ou senha estão inválidos'
      );
    }
  }

  function handleRegisterScreen() {
    formRef.current.setErrors({});
    formRef.current.reset();
    navigation.navigate('Register');
  }

  return (
    <Container>
      <Content>
        <Logo source={logo} />
        <Form ref={formRef} onSubmit={handleSubmitForm}>
          <Description>Faça Login para continuar</Description>
          <Input
            placeholder="Email"
            name="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
          />
          <Input
            placeholder="Senha"
            name="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
          />
          <ForgotButton>
            <ForgotButtonText>Esqueci minha senha</ForgotButtonText>
          </ForgotButton>
          <Button onPress={() => formRef.current.submitForm()}>
            <ButtonText>Conecte-se</ButtonText>
          </Button>
        </Form>
        <Diviser>
          <DiviserLine />
          <DiviserLabel>OU</DiviserLabel>
          <DiviserLine />
        </Diviser>
        <ButtonRegister onPress={handleRegisterScreen}>
          <ButtonRegisterText>Criar uma nova conta</ButtonRegisterText>
        </ButtonRegister>
      </Content>
    </Container>
  );
}
