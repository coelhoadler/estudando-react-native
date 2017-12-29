import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario) {
    let random = Math.floor(Math.random() * 3);
    let escolhaComputador = ''
    let resultado = '';

    switch (random) {
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
        case 2:
        escolhaComputador = 'tesoura';
        break;            
      default:
        escolhaComputador = 'bomba'
        break;
    }

    if (escolhaUsuario == escolhaComputador) {
      resultado = "Deu empate";
    } else {
      if (escolhaUsuario == "pedra") {
        if (escolhaComputador == "tesoura")
          resultado = "Você Ganhou";
        if (escolhaComputador == "papel") {
          resultado = "Computador Ganhou"
        }
      }
      if (escolhaUsuario == "papel") {
        if (escolhaComputador == "tesoura")
          resultado = "Computador Ganhou";
        if (escolhaComputador == "pedra") {
          resultado = "Você Ganhou"
        }
      }
      if (escolhaUsuario == "tesoura") {
        if (escolhaComputador == "pedra")
          resultado = "Computador Ganhou";
        if (escolhaComputador == "papel") {
          resultado = "Você Ganhou"
        }
      }      
    }

    this.setState({ 
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado
    });
  }

  render() {
    const Estilos = StyleSheet.create({
      containerOpcoes: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 40,
        marginVertical: 30        
      },
      btnEscolha: {
        width: 70,
      },
      palco: {
        alignItems: 'center'
      },
      txtResultado: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 20
      }
    });
    
    return (
      <View>
        <Topo></Topo>

        <View style={Estilos.containerOpcoes}>
          <Button
            title="Pedra"
            onPress={ () => this.jokenpo('pedra')}
            style={Estilos.btnEscolha}
          >
          </Button>
          <Button
            title="Papel"
            style={Estilos.btnEscolha}
            onPress={ () => this.jokenpo('papel')}
          >
          </Button>
          <Button
            title="Tesoura"
            onPress={ () => this.jokenpo('tesoura')}
            style={Estilos.btnEscolha}
          >
          </Button>                    
        </View>

        <View style={Estilos.palco}>
          <Text style={Estilos.txtResultado}>{ this.state.resultado }</Text>        
          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
        </View>


      </View>
    );
  }

}

AppRegistry.registerComponent('app3', () => app3);
