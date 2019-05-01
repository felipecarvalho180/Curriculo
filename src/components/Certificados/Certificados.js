import React, { Component } from 'react';
import classes from './Certificados.css';
import Diplomas from './Diplomas/Diplomas';

class Certificados extends Component {

    render() {
        return(
            <div className={classes.Certificados}>
                <h1 className={classes.Azul}>Certificados</h1>
                <Diplomas/>
            </div>
        )
    }
}

export default Certificados;