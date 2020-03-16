import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Label, ContainerInfo, Info } from './styles';

const Review = ({ person }) => {
  return (
    <Container>
      <ContainerInfo>
        <Icon name='date-range' size={20} color='#2c387e' />
        <Label>Birth Year:</Label>
        <Info>{person.birthYear}</Info>
      </ContainerInfo>
      <ContainerInfo>
        <Icon name='remove-red-eye' size={20} color='#2c387e' />
        <Label>Eye Color:</Label>
        <Info>{person.eyeColor}</Info>
      </ContainerInfo>
      <ContainerInfo>
        <Icon name='person' size={20} color='#2c387e' />
        <Label>Gender:</Label>
        <Info>{person.gender}</Info>
      </ContainerInfo>
      <ContainerInfo>
        <Icon name='palette' size={20} color='#2c387e' />
        <Label>Hair Color:</Label>
        <Info>{person.hairColor}</Info>
      </ContainerInfo>
    </Container>
  )
}

export default Review
