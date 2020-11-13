import React from 'react';
import '../App.css'

export default class contactButton extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hover: false,
            storage: props.text,
            style: {},
            text: props.text,
        }
    }

    action = e =>{
        e.preventDefault();
        if(this.props.redirect !== undefined)
            window.location.href = this.props.redirect;
        else{
            navigator.clipboard.writeText(this.props.copy);
            this.setState({text: 'Copied!', style: {color: 'green'}});
            setTimeout(() => this.setState({ text: this.state.storage, style: {} }), 2000);
        }
    }

    render(){
        return(
            <button className="slide-in-bck-center" onClick={this.action} onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
                <div className ="contactButton">
                    <img className="contactIcon" src={this.props.src} alt = "" />
                    {this.state.hover && <p className = "contactText" style={"this.state.style"}>{this.state.text}</p>}
                </div>
            </button>
        )
    }
}