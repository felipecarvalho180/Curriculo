import React from 'react';
import Ingles from './Circulo/Ingles/Ingles';
import classes from './Barra.css'
import Proatividade from './Circulo/Proatividade/Proatividade';
import Dedicacao from './Circulo/Dedicacao/Dedicacao';

const barra = (props) => {
  return (
      <div className={classes.Div}>
        <Ingles />
        <Proatividade/>
        <Dedicacao/>
      </div>
  );
};
export default barra;