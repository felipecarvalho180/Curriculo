import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Info from '../../components/Info/Info';
import Habilidades from '../../components/Habilidades/Habilidades';
import Certificados from '../../components/Certificados/Certificados';
import Portifolio from '../../components/Portifolio/Portifolio';

class Layout extends Component {
    render() {
        return(
            <Auxiliary>
                <Info/>
                <Habilidades/>
                <Certificados/>
                <Portifolio/>
            </Auxiliary>
        )
    }
}

export default Layout;