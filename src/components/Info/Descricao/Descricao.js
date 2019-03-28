import React, { Component } from 'react';
import classes from './Descricao.css';
import FotoCurriculo from './Foto/Foto';
import Dados from './Dados/Dados';
import axios from '../../../axios-order';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class Descricao extends Component {
    state = {      
        idade: 21,
        endereco: 'Siméria, Petrópolis-RJ - Brasil',
        email: 'felipecarvalho180@gmail.com',
        telefone: '(24) 992560137',
        nacionalidade: 'Brasileiro',
        ano: null   
    }
    
        componentDidMount () {
            axios.get('/anos.json')
                .then(response => {
                    this.setState({ano: response.data});

                })
                .catch(error => {
                    this.setState({error: true});
                });
            const now = new Date();
            const day = now.getDate();
            const month = now.getMonth() + 1;
            /*if (day === 27 && month === 3) {
                const data = {
                    ano: this.state.ano + 1
                }
                axios.post('/anos.json', data)
                .then(response => {
                    console.log(response);
                }); 
            }*/
        }

    render() {   
        return(
        <Auxiliary>
            <div className={classes.Descri}>
                <FotoCurriculo/>
                <Dados
                    ano={this.state.ano}
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