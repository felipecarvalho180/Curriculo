import React from 'react'
import classes from './Site.css'

const site = (props) => (
        <div className={classes.Link}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img className={classes.Imagem} src={props.img} alt="site"/>
            </a> 
        </div>          
);

export default site;