import React, { useState, useEffect } from 'react';
import { BackHandler, Keyboard } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import ModalRegister from '../ModalRegister';
import { useRegister } from '../../contexts/register';

import { Container, Button, ButtonText } from './styles';

export default function HeaderRegister({ title, navigation }) {
  const { handleClearInputs } = useRegister();
  const [modal, setModal] = useState(false);

  function handleBackScreen() {
    Keyboard.dismiss();
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  function handleConfirmModal() {
    handleClearInputs();
    navigation.navigate('SignIn');
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      function () {
        setModal(true);
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <Container>
        <Button onPress={() => (navigation ? handleBackScreen() : {})}>
          <AntDesign name="arrowleft" size={20} />
          <ButtonText>{title}</ButtonText>
        </Button>
      </Container>
      {modal && (
        <ModalRegister
          title="Deseja cancelar o cadastro?"
          description="Ao cancelar o cadastro você perderá todo o progresso"
          labelCancel="Continuar cadastro"
          labelConfirm="Não quero finalizar o cadastro"
          handleCancel={handleCloseModal}
          handleConfirm={handleConfirmModal}
        />
      )}
    </>
  );
}
