import React, { Fragment } from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle='light-content' backgroundColor='#2c387e' />
      <Routes />
    </Fragment>
  )
}

export default App
