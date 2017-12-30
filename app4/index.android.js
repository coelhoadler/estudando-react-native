import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListaItems from './src/components/listaItems';

export default class app4 extends Component {
  render() {
    return (
      <View>
        <ListaItems></ListaItems>
      </View>
    );
  }
}

AppRegistry.registerComponent('app4', () => app4);
