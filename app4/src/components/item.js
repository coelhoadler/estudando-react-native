import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

export default class Item extends Component {
  
    constructor(props) {
        super(props);
    }

    render() {
        const Estilos = StyleSheet.create({
            container: {
                flexDirection: 'row',
                marginTop: 30,
                marginHorizontal: 10,
                borderWidth: .5,
                borderColor: '#999',
                padding: 5,
                backgroundColor: '#FFF'
            },
            txtTitulo: {
                fontWeight: 'bold',
                marginBottom: 5
            },
            txtLocal: {
                fontStyle: 'italic'
            },
            foto: {
                width: 102,
                height: 102,
                marginRight: 20
            },
            detalhesItem: {
                flex: 2
            }
        })        
        const { container, foto, detalhesItem, txtTitulo, txtLocal } = Estilos;
        return (
            <View style={ container }>
                <View style={ foto }>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: this.props.item.foto }}
                    />
                </View>
                <View style={ detalhesItem }>
                    <Text style={ txtTitulo }>
                        { this.props.item.titulo }
                    </Text>
                    <Text>
                        Valor: R$ { this.props.item.valor }
                    </Text>
                    <Text style={ txtLocal }>
                        Local: { this.props.item.local_anuncio }
                    </Text>
                    <Text>
                        Data Publicação: { this.props.item.data_publicacao }
                    </Text>
                </View>
            </View>
        );
    }

}
