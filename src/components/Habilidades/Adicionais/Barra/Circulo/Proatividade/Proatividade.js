import React from 'react';
import classes from '../Ingles/Ingles.css';

const proatividade = (props) => {
        const normalizedRadius = 50 - 5 * 2;
        const circumference = normalizedRadius * 2 * Math.PI;
        const strokeDashoffset = 
            circumference - ( 90 / 100) * circumference;
        return(
            <div className={classes.Div}>
                <div className={classes.Div2}>
                    <span className={classes.Span}>90%</span>
                </div>
            <div className={classes.Div2}>
                <svg height={50 * 2} width={50 * 2}>
                    <circle
                    className={classes.ReactProgressCirclecircle}
                    strokeWidth={5}
                    style={{strokeDashoffset}}
                    r={normalizedRadius}
                    cx={50}
                    cy={50}
                    />
                    <circle
                    className={classes.ReactProgressCirclecircleBackground}
                    strokeWidth={5}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={50}
                    cy={50}
                    />
                </svg>
            </div>
            <div className={classes.Div2}>
                <span className={classes.Span}>Proatividade</span>
            </div>
        </div>
        )
    }

export default proatividade;