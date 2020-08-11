import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  border: 1px solid transparent;
  border-bottom-color: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
`;
