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
                    img={LogoGT}/>
                <Site
                    link="https://felipecarvalho180.github.io/Landing-Page/"
                    img={LogoLand}/>
                <Site
                    link="https://felipecarvalho180.github.io/Burger-Builder/"
                    img={LogoBurger}/>
            </div>
        </div>
    )
}

export default portifolio;