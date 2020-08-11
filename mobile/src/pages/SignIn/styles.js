import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';
import InputText from '../../components/Input';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

export const Content = styled.KeyboardAvoidingView`
  align-items: center;
`;

export const Logo = styled.Image``;

export const Form = styled(Unform)`
  align-items: center;
  margin-top: 22px;
  width: 100%;
  padding: 0 30px;
`;

export const Description = styled.Text`
  color: #767676;
  margin-bottom: 22px;
  font-size: 14px;
`;

export const Input = styled(InputText)`
  width: 100%;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  height: 45px;
  font-size: 16px;
  padding: 0 16px;
  margin-bottom: 13px;
`;

export const ForgotButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  margin-right: auto;
`;

export const ForgotButtonText = styled.Text`
  color: #0095f6;
  font-size: 14px;
  margin: 3px 0 16px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #0095f6;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Diviser = styled.View`
  margin: 35px 0 35px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 33px;
`;

export const DiviserLine = styled.View`
  width: 40%;
  background-color: #808080;
  height: 1px;
`;

export const DiviserLabel = styled.Text`
  margin: 0 10px 0 10px;
`;

export const ButtonRegister = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #ee2121;
  width: 280px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const ButtonRegisterText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
