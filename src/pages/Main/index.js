import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, List, ButtonAdd } from './styles';
import Review from '../../components/Review';

const Main = ({ people, navigation }) => {
  return (
    <Container>
      <List
        data={people}
        keyExtractor={person => String(person.id)}
        renderItem={({ item }) => (<Review key={item.id} person={item} />)}
      />
      <ButtonAdd onPress={() => navigation.navigate('AddPerson')}>
        <Icon name='add' size={40} color='#FFF' />
      </ButtonAdd>
    </Container>
  )
}

export default Main
