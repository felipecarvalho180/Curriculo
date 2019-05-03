import React from 'react'
import Site from './Site/Site'
import classes from './Portifolio.css'
import LogoGT from '../../assets/logoGT.png'
import LogoLand from '../../assets/logoLand.png'
import LogoBurger from '../../assets/logoBurger.png'


const portifolio = (props) => {
    return (
        <div>
            <h1 className={classes.Azul}>Portifólio</h1>
            <div className={classes.Port}>
                <Site 
                    link="https://felipecarvalho180.github.io/Genetic-Testing/"
                    img={LogoGT}
                    legenda="Terminado em 03/01/2019"/>
                <Site
                    link="https://felipecarvalho180.github.io/Landing-Page/"
                    img={LogoLand}
                    legenda="Terminado em 11/11/2018"/>
                <Site
                    link="https://felipecarvalho180.github.io/Burger-Builder/"
                    img={LogoBurger}
                    legenda="Em andamento"/>
            </div>
        </div>
    )
}

export default portifolio;