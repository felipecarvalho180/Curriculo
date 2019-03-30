import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './LinguagensProgramacao.css';

const linguagensProgramacao = (props) => (
    <Auxiliary>
        <h1 className={classes.Habi}>Habilidades Profissionais</h1>
        <div>
            <p className={classes.Skills}>Html <span className={classes.Percent}>85%</span></p>
            <div className={classes.Progress}>
                <div className={classes.ProgressbarHtml}></div>
            </div>
        </div>
        <div>
            <p className={classes.Skills}>Css <span className={classes.Percent}>75%</span></p>
            <div className={classes.Progress}>
                <div className={classes.ProgressbarCss}></div>
            </div>
        </div>
        <div>
            React
        </div>
        <div>
            JavaScript
        </div>
        <div>
            Sass
        </div>
        <div>
            Bootstrap
        </div>
    </Auxiliary>
);

export default linguagensProgramacao;