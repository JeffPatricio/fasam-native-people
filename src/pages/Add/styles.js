import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 40px 10px 10px 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: '#888' })`
  align-self: stretch;
  height: 40px;
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 15px;
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonSave = styled(RectButton)`
  background: #2c387e;
  width: 200px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 20px;
`;

export const TextButtonSave = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
`;

export const ContainerRanks = styled.View`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Rank = styled.TouchableOpacity`
  background: ${props => props.active ? '#2c387e' : '#FFF'};
  padding: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 5px;
`;

export const TextRank = styled.Text`
  font-size: 14px;
  color:  ${props => props.active ? '#FFF' : '#888'};
  font-weight: bold;
`;

export const LabelRank = styled.Text`
  font-size: 14px;
  color: #777;
  font-weight: bold;
  margin: 10px;
`;