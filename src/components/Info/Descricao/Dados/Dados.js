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
        <p><span className={classes.LetraCinza}>Idade:  </span> {props.idade}</p>
        <p><span className={classes.LetraCinza}>Endereço:  </span> {props.endereco}</p>
        <p><span className={classes.LetraCinza}>Email:  </span> {props.email}</p>
        <p><span className={classes.LetraCinza}>Telefone:  </span> {props.tel}</p>
        <p><span className={classes.LetraCinza}>Nacionalidade:  </span> {props.nacionalidade}</p>
        <RedesSociais/>
    </div>
)

export default dados;