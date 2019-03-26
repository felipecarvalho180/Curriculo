import React from 'react';
import imagem from '../../../../assets/foto.jpg';
import classes from './Foto.css';

const foto = (props) => (
    <div>
        <img src={imagem} alt="foto" className={classes.Foto}/> <br/>
    </div>
)

export default foto;