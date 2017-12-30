import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import axios from 'axios';

import Item from './item';

export default class ListaItems extends Component {
  
    constructor(props) {
        super(props);
        this.state = { listaItems: [] };
    }

    componentWillMount() {
        const URL = `http://faus.com.br/recursos/c/dmairr/api/itens.html`;
        axios.get(URL).then((response) => {
            this.setState({ listaItems: response.data})
        }, (error) => {
            console.error('Erro ao recuperar os dados!', error);
        });
    }

    render() {
        return (
            <ScrollView>
                { this.state.listaItems.map((item) => {
                    return (
                        <Item 
                            key={item.titulo}
                            item={item}>
                        </Item>
                    );
                })}
            </ScrollView>
        );
    }
}
