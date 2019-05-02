import React, { Component } from 'react'
import classes from './Diplomas.css'
import d1 from '../../../assets/img.jpg'
import d2 from '../../../assets/img002.jpg'
import d3 from '../../../assets/img003.jpg'
import d4 from '../../../assets/img004.jpg'
import d6 from '../../../assets/img006.jpg'
import d7 from '../../../assets/img007.jpg'
import d8 from '../../../assets/img008.jpg'
import d9 from '../../../assets/img009.jpg'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

class Diplomas extends Component { 

    state = {
        displayUdemy: false,
        displayBradesco: false,
        displaySenai: false,
        error: false
    }

    udemyHandlerOn = () => {
        this.setState({displayUdemy: true})
    }

    udemyHandlerOff = () => {
        this.setState({displayUdemy: false})
    }

    bradescoHandlerOn = () => {
        this.setState({displayBradesco: true})
    }

    bradescoHandlerOff = () => {
        this.setState({displayBradesco: false})
    }

    senaiHandlerOn = () => {
        this.setState({displaySenai: true})
    }

    senaiHandlerOff = () => {
        this.setState({displaySenai: false})
    }

    render(){
        let udemy;
        if (this.state.displayUdemy) {
            udemy = (
                <Auxiliary>
                <h3 onClick={this.udemyHandlerOff} className={classes.Azul}>Fechar</h3>
                    <div className={classes.GDiplo2}>
                        <div className={classes.CDiplo}>
                            <img className={classes.Diploma} src={d1} alt="curriculo"/>
                        </div>
                        <div className={classes.CDiplo}>
                            <img className={classes.Diploma} src={d2} alt="curriculo"/>
                        </div>
                        <div className={classes.CDiplo}>
                            <img className={classes.Diploma} src={d3} alt="curriculo"/>
                        </div>
                        <div className={classes.CDiplo}>
                            <img className={classes.Diploma} src={d4} alt="curriculo"/>
                        </div>
                        <div className={classes.CDiplo}>
                            <img className={classes.Diploma} src={d9} alt="curriculo"/>         
                        </div>
                    </div>
                </Auxiliary>
            )
        } else {
            udemy = (<h3 onClick={this.udemyHandlerOn} className={classes.Azul}>Udemy</h3>)
        }

        let bradesco;
        if (this.state.displayBradesco) {
            bradesco = (
            <Auxiliary>
            <h3 onClick={this.bradescoHandlerOff} className={classes.Azul}>Fechar</h3>
                <div className={classes.GDiplo2}>
                    <div className={classes.CDiplo}>
                        <img className={classes.Diploma} src={d6} alt="curriculo"/>
                    </div>
                </div>
            </Auxiliary>)
        } else {
            bradesco = (<h3 onClick={this.bradescoHandlerOn} className={classes.Azul}>Bradesco Escola</h3>)
        }

        let senai;
        if (this.state.displaySenai) {
            senai = (
                <Auxiliary>
                    <h3 onClick={this.senaiHandlerOff} className={classes.Azul}>Fechar</h3>
                    <div className={classes.GDiplo2}>
                        <div className={classes.CDiplo2}>
                            <img className={classes.Diploma2} src={d7} alt="curriculo"/>
                        </div>
                        <div className={classes.CDiplo2}>
                            <img className={classes.Diploma2} src={d8} alt="curriculo"/>
                        </div>
                    </div>
                </Auxiliary>
                ) 
        } else {
            senai = (<h3 onClick={this.senaiHandlerOn} className={classes.Azul}>Senai EAD</h3>)
        }

        return(
            <div className={classes.Diplomas}> 
                {udemy}
                {senai}
                {bradesco}
            </div>
        )
    }
}

export default Diplomas;