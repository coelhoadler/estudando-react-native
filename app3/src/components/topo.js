import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image
} from 'react-native';

class Topo extends Component {
    render() {
        return(
            <View>
                <Image
                    source={require('../../imgs/jokenpo.png')}
                />
            </View>            
        );
    }
}

export default Topo;