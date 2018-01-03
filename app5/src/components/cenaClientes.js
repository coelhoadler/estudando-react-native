import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './navegacao';

const detalhe_cliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    const { container, row, column, txtClientes, txtEmpresa } = styles;

    return (
        <View>
            <StatusBar backgroundColor="#CCC" />
            <BarraNavegacao></BarraNavegacao>

            <View style={container}>
                <View style={row}>
                    <Image source={detalhe_cliente} />
                    <Text style={txtClientes}>Nossos Clientes</Text>
                </View>

                <View style={column}>
                    <Image source={cliente1} />
                    <Text style={txtEmpresa}>ndsjdsbdshdbshdbsh</Text>
                </View>

                <View style={column}>
                    <Image source={cliente2} />
                    <Text style={txtEmpresa}>Nossos shbdahsbdhsabdhasbdhajsbd</Text>
                </View>
            </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    column: {
        marginBottom: 50
    },
    txtClientes: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#B9C941'
    },
    txtEmpresa: {
        flexDirection: 'column',
        marginLeft: 20,
        fontSize: 18
    }
});