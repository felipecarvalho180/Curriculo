import React from 'react';

import classes from './RedesSociais.css';

const redesSociais = (props) => (
        <div className={classes.Redes}>
            <p>Redes Sociais:</p>
            <button className={classes.Face}></button>
            <button className={classes.Linkedin}></button>
            <button className={classes.Insta}></button>
        </div>
);


export default redesSociais;