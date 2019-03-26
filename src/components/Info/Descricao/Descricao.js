import React from 'react';
import RedesSociais from './RedesSociais/RedesSociais';
import foto from '../../../assets/foto.jpg'
import classes from './Descricao.css';

const descricao = (props) => {
    return(
        <div className={classes.Descri}>
            <div>
                <img src={foto} alt="foto" className={classes.Foto}/> <br/>
                <button className={classes.Curriculo}>Baixar Curriculo</button>
            </div>
            <div className={classes.Dados}>
                <p className={classes.Nome}>Felipe <span className={classes.Azul}>Carvalho</span><br/>
                <span className={classes.Profissao}>Desenvolvedor Web</span></p>
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
            </div>
        </div>
    );
}

export default descricao;