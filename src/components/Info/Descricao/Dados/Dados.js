import React from 'react';
import classes from './Dados.css';
import RedesSociais from './RedesSociais/RedesSociais';

const dados = (props) => (
    <div className={classes.Dados}>
        <p className={classes.Nome}>Felipe <span className={classes.Azul}>Carvalho</span><br/>
        <span className={classes.Profissao}>Desenvolvedor Web</span></p>
        <p>Olá eu sou Felipe Carvalho. Estudo Desenvolvimento Web a 1 ano, estudando varios elementos
            do Desenvolvimento Web como HTML, CSS, JavaScript, SASS, React, JQuery e Bootstrap. Tive breve
            contato com C++ na faculdade e Java durante um periodo que estudava Android.
        </p>
        <p>Idade: {props.idade}</p>
        <p>Endereço: {props.endereco}</p>
        <p>Email: {props.email}</p>
        <p>Telefone: {props.tel}</p>
        <p>Nacionalidade: {props.nacionalidade}</p>
        <RedesSociais/>
    </div>
)

export default dados;