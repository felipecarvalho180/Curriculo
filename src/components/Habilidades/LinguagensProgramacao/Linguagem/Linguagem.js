import React from 'react';
import classes from './Linguagem.css';

const linguagem = (props) => (
    <div>
        <p className={classes.Skills}>{props.Ling} <span className={classes.Percent}>{props.LingP}</span></p>
        <div className={classes.Progress}>
            <div className={props.Progressbar}></div>
        </div>
    </div>
);

export default linguagem;