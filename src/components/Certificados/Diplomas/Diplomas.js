import React from 'react'
import classes from './Diplomas.css'
import d1 from '../../../assets/img.jpg'
import d2 from '../../../assets/img002.jpg'
import d3 from '../../../assets/img003.jpg'
import d4 from '../../../assets/img004.jpg'
import d6 from '../../../assets/img006.jpg'
import d7 from '../../../assets/img007.jpg'
import d8 from '../../../assets/img008.jpg'
import d9 from '../../../assets/img009.jpg'

const diplomas = (props) => (
    <div className={classes.Diplomas}>
        <div className={classes.CDiplo}>
            <img className={classes.Diploma} src={d1} alt="curriculo"/>
            <img className={classes.Diploma} src={d2} alt="curriculo"/>
        </div>
        <div className={classes.CDiplo}>
            <img className={classes.Diploma} src={d3} alt="curriculo"/>
            <img className={classes.Diploma} src={d4} alt="curriculo"/>
        </div>
        <div className={classes.CDiplo}>
            <img className={classes.Diploma} src={d9} alt="curriculo"/>
            <img className={classes.Diploma} src={d6} alt="curriculo"/>
        </div>
        <div className={classes.CDiplo}>
            <img className={classes.Diploma2} src={d7} alt="curriculo"/>
            <img className={classes.Diploma2} src={d8} alt="curriculo"/>
        </div>
    </div>
)

export default diplomas;