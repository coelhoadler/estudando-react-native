import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {

    const { barraTitulo, txtTitulo } = styles;

    return (
        <View style={ barraTitulo }>
            <Text style={ txtTitulo }>Adler Consultoria</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        height: 60,
        padding: 10
    },
    txtTitulo: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20
    }
});