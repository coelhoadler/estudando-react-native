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

const logo = require('../imgs/logo.png');
const menu_cliente = require('../imgs/menu_cliente.png');
const menu_empresa = require('../imgs/menu_empresa.png');
const menu_servico = require('../imgs/menu_servico.png');
const menu_contato = require('../imgs/menu_contato.png');

export default class CenaPrincipal extends Component {
  render() {

    const { logoImg, menu, row, box } = styles;

    return (
        <View>
            <StatusBar backgroundColor="#CCC" />
            <BarraNavegacao></BarraNavegacao>

            <View style={logoImg}>
                <Image source={logo} />
            </View>

            <View style={menu}>
                <View style={row}>
                    <Image style={box} source={menu_cliente} />
                    <Image style={box} source={menu_contato} />
                </View>

                <View style={row}>
                    <Image style={box} source={menu_empresa} />
                    <Image style={box} source={menu_servico} />
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    logoImg: {
        alignItems: 'center',
        marginVertical: 25
    },
    menu: {
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    box: {
        marginHorizontal: 10,
        marginVertical: 10
    }
});