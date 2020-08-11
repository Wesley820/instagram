import React from 'react';
import {
  Container,
  Modal,
  Title,
  Description,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

export default function ModalRegister({
  title,
  description,
  labelCancel,
  labelConfirm,
  handleCancel,
  handleConfirm,
}) {
  return (
    <Container>
      <Modal>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonContainer>
          <Button onPress={handleCancel}>
            <ButtonText>{labelCancel || 'Cancelar'}</ButtonText>
          </Button>
          <Button onPress={handleConfirm}>
            <ButtonText color="#0095f6">{labelConfirm || 'OK'}</ButtonText>
          </Button>
        </ButtonContainer>
      </Modal>
    </Container>
  );
}
