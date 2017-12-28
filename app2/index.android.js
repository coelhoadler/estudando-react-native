import React from 'react';
import { Text, View, Button, TouchableOpacity, Image, AppRegistry, Alert } from 'react-native';

const Estilos = {
  estiloView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  txtBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  }
}

const App = () => {

  const {  estiloView, botao, txtBotao, } = Estilos;

  const gerarNovaFrase = () => {

    let frases = [
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'O ciumento passa a vida a procurar um segredo, cuja descoberta lhe destruiria a felicidade.',
      'O progresso do homem não é mais do que uma descoberta gradual de que as suas perguntas não têm significado.',
      'A descoberta consiste em ver o que todos viram e em pensar no que ninguém pensou.',
      'Se um homem não descobriu nada pelo qual morreria, não está pronto para viver.'
    ];

    let random = Math.floor(Math.random() * frases.length);    

    Alert.alert('Frase escolhida', frases[random]);
  }

  return (
    <View style={estiloView}>
      <Image 
        source={require('./imgs/logo.png')}
      />
      <TouchableOpacity
        style={botao}
        onPress={gerarNovaFrase}
      >
        <Text style={txtBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app2', _ => App);