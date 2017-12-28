import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 30,
    fontWeight: '300',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#08509B',
    color: '#fff',
    textAlign: 'center',
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const App = () => {

  const { estiloTexto, estiloView } = Estilos;

  return (
    <View style={estiloView}>
      <Text style={estiloTexto}>Frases do dia</Text>
    </View>
  );
};

AppRegistry.registerComponent('app2', _ => App);