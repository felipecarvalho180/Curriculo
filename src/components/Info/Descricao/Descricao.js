import React, { Component } from 'react';
import classes from './Descricao.css';
import FotoCurriculo from './Foto/Foto';
import Dados from './Dados/Dados';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class Descricao extends Component {
    state = { 
        idade: 21,
        endereco: 'Siméria, Petrópolis-RJ - Brasil',
        email: 'felipecarvalho180@gmail.com',
        telefone: '(24) 992560137',
        nacionalidade: 'Brasileiro',
    }

    render() {
        return(
        <Auxiliary>
            <div className={classes.Descri}>
                <FotoCurriculo/>
                <Dados
                    idade={this.state.idade}
                    endereco={this.state.endereco}
                    email={this.state.email}
                    tel={this.state.telefone}
                    nacionalidade={this.state.nacionalidade}/>
            </div>
        </Auxiliary>
        );
    }
}

export default Descricao;