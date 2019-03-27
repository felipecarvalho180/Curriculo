import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Info from '../../components/Info/Info';
import Habilidades from '../../components/Habilidades/Habilidades';

class Layout extends Component {
    render() {
        return(
            <Auxiliary>
                <Info/>
                <Habilidades/>
                <h1>Certificados</h1>
                <h1>Portifólio</h1>
            </Auxiliary>
        )
    }
}

export default Layout;