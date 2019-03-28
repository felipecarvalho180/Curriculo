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
        ano: 0,
        anoNovo: 0,
    }
    
    componentDidMount () {
        const now = new Date();  
        for (let ny = this.state.anoNovo; ny < 1; ny++) {
            let year = now.getFullYear();
            let firstDay = 2018;
            let sum = ( year - firstDay );
            let sum2 = this.state.ano;
            let data = sum + sum2;
            axios.put('https://curriculo-c6781.firebaseio.com/ano.json', data)
            .then(response => {
                console.log(response);
                this.setState({ano: data});
                this.setState({ano: this.state.ano})
            });      
        }
    }
    

    componentWillMount () {

        axios.get('https://curriculo-c6781.firebaseio.com/ano.json')
        .then(response => {

        })
        .catch(error => {
            this.setState({error: true});
        });
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