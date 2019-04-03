import React from 'react';
import classes from './BonusSkills.css';
import check from '../../../../assets/check.png'

const bonusSkills = (props) => (
    <div className={classes.Div}>
        <img src={check} className={classes.img} alt="check"/>
        <span>{props.skill}</span>
    </div>
);

export default bonusSkills;