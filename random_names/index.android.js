import React from 'react';
import { Text, Button, View, AppRegistry } from 'react-native';

const getName = (a) => {
  let names = [
    'Adler'
    ,'Adriane'
    ,'Ilma'
    ,'Naldo'
    ,'Gabriel'
    ,'Giovana'
    ,'Isabele'
    ,'Marco'
    ,'Ionaldo'
    ,'Alex'
    ,'Guilherme'
    ,'Alexandre'
    ,'Amarildo'
    ,'Amarildo'
    ,'Andressa'
    ,'Jéssica'
    ,'Ana'
    ,'Izete'
    ,'Salete'
    ,'Laura'
    ,'Beatriz'
    ,'Ícaro'
    ,'Vanessa'
    ,'Isadora'
 ]
  let index = Math.floor(Math.random() * names.length);
  alert(names[index]);
}

const App = function() {
  return (
    <View>
      <Text>Gerador de nomes randômicos</Text>
      <Button
        title="Qual o nome?"
        onPress={getName}
      ></Button>
    </View>
  );
};

AppRegistry.registerComponent('random_names', _ => App);
