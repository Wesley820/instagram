import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Modal = styled.View`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 25px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #303030;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.Text`
  color: #767676;
  font-size: 16px;
  line-height: 21px;
`;

export const ButtonContainer = styled.View`
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.color || '#303030'};
  text-align: right;
`;
