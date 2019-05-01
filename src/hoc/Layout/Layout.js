import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Info from '../../components/Info/Info';
import Habilidades from '../../components/Habilidades/Habilidades';
import Certificados from '../../components/Certificados/Certificados';

class Layout extends Component {
    render() {
        return(
            <Auxiliary>
                <Info/>
                <Habilidades/>
                <Certificados/>
                <h1>Portifólio</h1>
            </Auxiliary>
        )
    }
}

export default Layout;