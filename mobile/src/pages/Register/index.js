import React from 'react';
import logoFriends from '../../images/friends.png';

import {
  Container,
  Content,
  LogoFriends,
  Title,
  Description,
  Button,
  ButtonText,
  ButtonBack,
  ButtonBackText,
} from './styles';

export default function Register({ navigation }) {
  function handleGoRegister() {
    navigation.navigate('Name');
  }

  function handleSignInScreen() {
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <LogoFriends source={logoFriends} />
        <Title>Faça parte do Instagram</Title>
        <Description>
          Seja bem vindo a maior rede social do mundo, entre, compartilhe suas
          experiências e divirta-se.
        </Description>
        <Button onPress={handleGoRegister}>
          <ButtonText>Avançar</ButtonText>
        </Button>
      </Content>
      <ButtonBack onPress={handleSignInScreen}>
        <ButtonBackText>Quero voltar</ButtonBackText>
      </ButtonBack>
    </Container>
  );
}
