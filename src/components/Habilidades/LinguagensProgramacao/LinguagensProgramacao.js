import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './LinguagensProgramacao.css';
import Linguagem from './Linguagem/Linguagem';
import axios from '../../../axios-order';

class LinguagensProgramacao extends Component {
    state = {
        html: 'HTML', htmlv: 0,   
        css: 'CSS', cssv: 0,
        react: 'React', reactv: 0,
        javascript: 'JavaScript', javascriptv: 0,  
        sass: 'SASS', sassv: 0,   
        bootstrap: 'Bootstrap', bootstrapv: 0
    }

    componentWillMount() {
        axios.get('/linguagens/-LbVc1NT8SVGrjzxSH_L.json')
            .then(response => {
                this.setState({htmlv: response.data.html});
                this.setState({cssv: response.data.css});
                this.setState({reactv: response.data.react});
                this.setState({javascriptv: response.data.javascript});
                this.setState({sassv: response.data.sass});
                this.setState({bootstrapv: response.data.bootstrap});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render(){
        return(
            <Auxiliary>
                <h1 className={classes.Habi}>Habilidades Profissionais</h1>
                <Linguagem
                    Ling={this.state.html}
                    LingP={this.state.htmlv + "%"}
                    Progressbar={classes.ProgressbarHtml}/>
                <Linguagem
                    Ling={this.state.css}
                    LingP={this.state.cssv + "%"}
                    Progressbar={classes.ProgressbarCss}/>
                <Linguagem
                    Ling={this.state.react}
                    LingP={this.state.reactv + "%"}
                    Progressbar={classes.ProgressbarReact}/>
                <Linguagem
                    Ling={this.state.javascript}
                    LingP={this.state.javascriptv + "%"}
                    Progressbar={classes.ProgressbarJS}/>
                <Linguagem
                    Ling={this.state.sass}
                    LingP={this.state.sassv + "%"}
                    Progressbar={classes.ProgressbarSass}/>
                <Linguagem
                    Ling={this.state.bootstrap}
                    LingP={this.state.bootstrapv + "%"}
                    Progressbar={classes.ProgressbarBoot}/>
            </Auxiliary>
        )
    }
}
export default LinguagensProgramacao;