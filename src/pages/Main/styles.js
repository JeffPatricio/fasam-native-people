import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #FFF;
  padding: 10px;
  padding-bottom: 10px;
`;

export const List = styled.FlatList.attrs({ showsVerticalScrollIndicator: false })`
  padding-bottom: 40px;
`;

export const ButtonAdd = styled(RectButton)`
  background: #2c387e;
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;