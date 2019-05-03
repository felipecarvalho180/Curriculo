import React from 'react';
import Barra from './Barra/Barra';
import classes from './Adicionais.css';
import BonusSkills from './BonusSkills/BonusSkills';

const adicionais = (props) => (
    <div className={classes.Div}>
        <h1 className={classes.Habi}>Habilidades Adicionais</h1>
        <Barra/>
        <div className={classes.CSkills}>
            <div className={classes.Skills}>            
                <BonusSkills
                    skill="PhotoShop"/>
                <BonusSkills
                    skill="REST API"/>
            </div>
            <div className={classes.Skills}>
                <BonusSkills
                    skill="Routing"/>
                <BonusSkills
                    skill="C++"/>
            </div>
            <div className={classes.Skills}>
                <BonusSkills
                    skill="Java"/>
                <BonusSkills
                    skill="Fundamentos de Design"/>
            </div>
        </div>
    </div>

);

export default adicionais;