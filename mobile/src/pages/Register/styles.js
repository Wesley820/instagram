import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 30px;
  align-items: center;
`;

export const LogoFriends = styled.Image``;

export const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin: 13px 0 16px;
`;

export const Description = styled.Text`
  color: #767676;
  font-size: 16px;
  text-align: center;
  line-height: 21px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 28px;
  background-color: #0095f6;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffff;
  font-weight: bold;
`;

export const ButtonBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding: 13px 0;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const ButtonBackText = styled.Text`
  color: #505050;
  font-size: 14px;
`;
