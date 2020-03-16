import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Container, Input, ButtonSave, TextButtonSave, Rank, TextRank, ContainerRanks, LabelRank } from './styles';

const Add = ({ addPerson, navigation }) => {

  const [birthYear, setBirthYear] = useState('')
  const [eyeColor, setEyeColor] = useState('')
  const [gender, setGender] = useState('')
  const [hairColor, setHairColor] = useState('')

  const savePerson = () => {
    if (!birthYear || !eyeColor || !gender || !hairColor) {
      return ToastAndroid.show('Necessary to fill in all fields', ToastAndroid.SHORT)
    }

    addPerson({ birthYear, eyeColor, gender, hairColor })
    ToastAndroid.show('Person added!', ToastAndroid.SHORT)
    navigation.navigate('People', {})
  }

  return (
    <Container>
      <Input
        placeholder='Birth Year'
        returnKeyType='send'
        keyboardType='numeric'
        value={birthYear}
        onChangeText={text => setBirthYear(text)}
      />
      <Input
        placeholder='Eye Color'
        returnKeyType='send'
        value={eyeColor}
        onChangeText={text => setEyeColor(text)}
      />
      <Input
        placeholder='Gender'
        returnKeyType='send'
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <Input
        placeholder='Hair Color'
        returnKeyType='send'
        value={hairColor}
        onChangeText={text => setHairColor(text)}
      />
      <ButtonSave onPress={savePerson}>
        <TextButtonSave>Save</TextButtonSave>
      </ButtonSave>
    </Container>
  )
}

export default Add
