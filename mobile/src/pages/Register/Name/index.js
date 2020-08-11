import React, { useRef } from 'react';
import { useRegister } from '../../../contexts/register';
import Header from '../../../components/HeaderRegister';
import { Container, Form, Title, Input, Button, ButtonText } from './styles';

export default function NameRegister({ navigation }) {
  const { handleChangeInputs } = useRegister();
  const formRef = useRef(null);

  function handleFormSubmit(data) {
    if (!data.name) {
      return;
    }

    handleChangeInputs(data);
    navigation.navigate('Username');
  }

  return (
    <Container>
      <Header title="Nome" navigation={navigation} />
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Title>Qual é o seu nome?</Title>
        <Input
          placeholder="Nome e sobrenome"
          autoFocus={true}
          autoCapitalize="words"
          name="name"
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
