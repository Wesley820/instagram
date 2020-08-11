import React, { useRef, useCallback } from 'react';
import { useRegister } from '../../../contexts/register';
import Header from '../../../components/HeaderRegister';
import { Container, Form, Title, Input, Button, ButtonText } from './styles';

export default function EmailRegister({ navigation }) {
  const { handleChangeInputs, signUp } = useRegister();
  const formRef = useRef(null);

  function handleFormSubmit(data) {
    if (!data.password) {
      return;
    }
    signUp(data);
  }

  return (
    <Container>
      <Header title="Senha" navigation={navigation} />
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Title>Quase lá...Defina uma senha.</Title>
        <Input
          placeholder="Senha"
          name="password"
          secureTextEntry={true}
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
