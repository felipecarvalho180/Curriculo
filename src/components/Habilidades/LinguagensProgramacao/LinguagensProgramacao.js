import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './LinguagensProgramacao.css';
import Linguagem from './Linguagem/Linguagem';

class LinguagensProgramacao extends Component {
    state = {
        html: 'HTML', html2: '85%',   
        css: 'CSS', css2: '75%',
        react: 'React', react2: '65%',
        javascript: 'JavaScript', javascript2: '65%',  
        sass: 'SASS', sass2: '65%',   
        bootstrap: 'Bootstrap', bootstrap2: '55%'
    }
    render(){
        return(
            <Auxiliary>
                <h1 className={classes.Habi}>Habilidades Profissionais</h1>
                <Linguagem
                    Ling={this.state.html}
                    LingP={this.state.html2}
                    Progressbar={classes.ProgressbarHtml}/>
                <Linguagem
                    Ling={this.state.css}
                    LingP={this.state.css2}
                    Progressbar={classes.ProgressbarCss}/>
                <Linguagem
                    Ling={this.state.react}
                    LingP={this.state.react2}
                    Progressbar={classes.ProgressbarReact}/>
                <Linguagem
                    Ling={this.state.javascript}
                    LingP={this.state.javascript2}
                    Progressbar={classes.ProgressbarJS}/>
                <Linguagem
                    Ling={this.state.sass}
                    LingP={this.state.sass2}
                    Progressbar={classes.ProgressbarSass}/>
                <Linguagem
                    Ling={this.state.bootstrap}
                    LingP={this.state.bootstrap2}
                    Progressbar={classes.ProgressbarBoot}/>
            </Auxiliary>
        )
    }
}
export default LinguagensProgramacao;