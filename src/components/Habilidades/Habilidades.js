import React from 'react';
import classes from './Habilidades.css';
import LinguagensProgramacao from './LinguagensProgramacao/LinguagensProgramacao';
import Adicionais from './Adicionais/Adicionais';

const habilidades = (props) => (
        <div className={classes.Habilidades}>
            <h1 className={classes.Azul}>Habilidades</h1>
            <div className={classes.Habi1}>
                <LinguagensProgramacao/>
            </div>
            <div className={classes.Habi2}>
                <Adicionais/>
            </div>
        </div>
)

export default habilidades