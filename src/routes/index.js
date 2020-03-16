import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Add from '../pages/Add';
const Stack = createStackNavigator()

const people = [
  {
    id: 1,
    birthYear: '1994',
    eyeColor: 'Blue',
    gender: 'Male',
    hairColor: 'Brown'
  },
  {
    id: 2,
    birthYear: '1992',
    eyeColor: 'Green',
    gender: 'Feminine',
    hairColor: 'Red'
  },
  {
    id: 3,
    birthYear: '1998',
    eyeColor: 'Brown',
    gender: 'Male',
    hairColor: 'Black'
  }
]

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#2c387e' },
        headerBackTitleVisible: false,
        headerLayoutPreset: 'center',
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center'
      }}>

        <Stack.Screen name="People">
          {props => <Main {...props} people={people} />}
        </Stack.Screen>

        <Stack.Screen name="AddPerson" options={{ title: "Add Person" }}>
          {props =>
            <Add
              {...props}
              addPerson={(person) => {
                person['id'] = people.reduce((id, value) => value.id > id ? value.id : id, 0) + 1
                people.unshift(person)
              }}
            />
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
