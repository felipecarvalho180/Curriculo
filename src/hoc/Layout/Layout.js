import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Info from '../../components/Info/Info';

class Layout extends Component {
    render() {
        return(
            <Auxiliary>
                <Info/>
                <h1>Habilidades</h1>
                <h1>Certificados</h1>
                <h1>Portifólio</h1>
            </Auxiliary>
        )
    }
}

export default Layout;