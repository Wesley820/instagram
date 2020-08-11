import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';
import InputText from '../../../components/Input';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

export const Form = styled(Unform)`
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #303030;
  margin-bottom: 26px;
`;

export const Input = styled(InputText)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: #dbdbdb;
  height: 45px;
  font-size: 16px;
  margin-bottom: 13px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 45px;
  background-color: #0095f6;
  align-items: center;
  justify-content: center;
  margin-top: 62px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
