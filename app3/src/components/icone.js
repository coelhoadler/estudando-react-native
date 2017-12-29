import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native';

class Icone extends Component {
    render() {
        const Estilos = StyleSheet.create({
          meuIcone: {
            alignItems: 'center',
            marginBottom: 20
          }
        });
    
        if (this.props.escolha == "pedra") {
          return(
            <View style={Estilos.meuIcone}>
              <Text>{this.props.jogador}</Text>
              <Image 
                source={require('../../imgs/pedra.png')}
              />
            </View>
          );
        } else if (this.props.escolha == "papel") {
          return(
            <View style={Estilos.meuIcone}>
              <Text>{this.props.jogador}</Text>
              <Image 
                source={require('../../imgs/papel.png')}
              />
            </View>
          );      
        } else if (this.props.escolha == "tesoura") {
          return(
            <View style={Estilos.meuIcone}>
              <Text>{this.props.jogador}</Text>
              <Image 
                source={require('../../imgs/tesoura.png')}
              />
            </View>
          );      
        } else {
          return false;
        }
      }
}

export default Icone;