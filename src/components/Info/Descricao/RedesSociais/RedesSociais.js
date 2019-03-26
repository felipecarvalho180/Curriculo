import React from 'react';
import insta from '../../../../assets/instagram-logo.png';
import classes from './RedesSociais.css';

const redesSociais = (props) => (
        <div className={classes.Redes}>
            <button>
                <img src={insta} alt="insta"/>
            </button>
            <button>
                <img src={insta} alt="insta"/>
            </button>
        </div>
);


export default redesSociais;