import React from 'react';
import classes from './RedesSociais.css';
import image from '../../../../../assets/download.png';

const redesSociais = (props) => (
        <div className={classes.Redes}>
            <p className={classes.LetraCinza}>Redes Sociais:</p>
            <a 
                href="https://www.facebook.com/felipe.carvalho.1650"
                rel="noopener noreferrer"
                target="_blank">
                <button className={classes.Face}></button>
            </a>
            <a 
                href="https://www.linkedin.com/in/felipe-carvalho-680b07162/"
                rel="noopener noreferrer"
                target="_blank">
                <button className={classes.Linkedin}></button>
            </a>
            <a 
                href="https://www.instagram.com/felipecarvalho180/?hl=pt-br"
                rel="noopener noreferrer"
                target="_blank">
                <button className={classes.Insta}></button>
            </a>
            <a 
                href="https://github.com/felipecarvalho180"
                rel="noopener noreferrer"
                target="_blank">
                <button className={classes.Github}></button>
            </a>
            <a 
                href="http://www.mediafire.com/file/a9fw2j4nj8ayq9g/Felipe_CV.pdf/file"
                rel="noopener noreferrer"
                target="_blank">
                <button className={classes.Curriculo}>
                <img src={image} alt="download"/> Baixar Curriculo</button>
            </a>
        </div>
);


export default redesSociais;