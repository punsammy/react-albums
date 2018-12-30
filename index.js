// Import library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a Component
const App = () => (
  <Header headerText={'Albums'} />
);

// render to device
AppRegistry.registerComponent('albums', () => App);
