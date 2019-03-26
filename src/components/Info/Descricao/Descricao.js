import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import RedesSociais from './RedesSociais/RedesSociais';

const descricao = (props) => {
    return(
        <Auxiliary>
            <h1>Felipe Carvalho</h1>
            <h4>Desenvolvedor Web</h4>
            <p>Olá eu sou Felipe Carvalho. Estudo Desenvolvimento Web a 1 ano, estudando varios elementos
                do Desenvolvimento Web como HTML, CSS, JavaScript, SASS, React, JQuery e Bootstrap. Tive breve
                contato com C++ na faculdade e Java durante um periodo que estudava Android.
            </p>
            <p>Idade: 21</p>
            <p>Endereço: Siméria, Petrópolis-RJ, Brasil</p>
            <p>Email: felipecarvalho180@gmail.com</p>
            <p>Telefone: (24) 992560137</p>
            <p>Nacionalidade: Brasileiro</p>
            <RedesSociais/>
        </Auxiliary>
    );
}

export default descricao;