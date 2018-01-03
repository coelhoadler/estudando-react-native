import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import CenaPrincipal from './src/components/cenaPrincipal';
import CenaClientes from './src/components/cenaClientes';

export default class app5 extends Component {
  render() {
    return (
      // <CenaPrincipal></CenaPrincipal>
      <CenaClientes></CenaClientes>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('app5', () => app5);
