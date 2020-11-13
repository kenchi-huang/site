import React from 'react';
import './App.css';
import Home from './components/homePage';
import About from './components/aboutPage';
import Projects from './components/projectPage';
import Experience from './components/experiencePage';
import Resume from './components/resumePage';
import ContactButtons from './components/contactButton';

import logo from './images/logo.png';
import Email from './images/em.png';
import Github from './images/gh.png';
import Insta from './images/ig.png';
import LinkedIn from './images/in.png';

import Pdf from './Ken-Chi_Huang_CV.pdf';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            display: 'home',
            copyText: 'Copy Email',
        }
    }

    naviButton = name => {
        if (this.state.display === name)
            return 'naviButtonSelected';
        return 'naviButton';
    }

    render() {
        return (
            <div>
                <div className="navBar">
                    <div className="navButtons">
                        <button className={this.naviButton('about')} onClick={() => this.setState({ display: 'about' })}>
                            About Me
                        </button>
                        <button className={this.naviButton('projects')} onClick={() => this.setState({ display: 'projects' })}>
                            Projects
                        </button>
                        <button className={this.naviButton('experience')} onClick={() => this.setState({ display: 'experience' })}>
                            Achievements
                        </button>
                        <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                            <button className={this.naviButton('resume')}> 
                            {/*onClick={() => this.setState({ display: 'home' })}> */}
                                Resume
                            </button>
                        </a>
                    </div>
                    <div className="homeButton">
                        <button className={this.naviButton('home')} onClick={() => this.setState({ display: 'home' })}>
                            <img className="icon" src={logo} />
                        </button>
                    </div>
                </div>
                <div className='pageStates'>
                    {this.state.display === 'home' && <Home />}
                    {this.state.display === 'about' && <About />}
                    {this.state.display === 'projects' && <Projects />}
                    {this.state.display === 'experience' && <Experience />}
                    {/* {this.state.display === 'resume' && <Resume />} */}
                    {/* {this.state.display === 'contact' && <Contact />} */}
                </div>

                <div className="contactBar">
                    {/* <ContactButtons src = "Github" text="Open Github" storage = "Open Github"/> */}
                    <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://github.com/kenchi-huang', '_blank') }}>
                        <img className="githubIcon" src={Github} />
                        <span class = "popupText">Open Github</span>
                    </button>
                    <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://www.instagram.com/ken.h01/', '_blank') }}>
                        <img className="instaIcon" src={Insta} />
                        <span class = "popupText">Open Instagram</span>
                    </button>
                    <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/ken-chi-huang-5028561ba', '_blank') }}>
                        <img className="linkedInIcon" src={LinkedIn} />
                        <span class = "popupText">Open LinkedIn</span>
                    </button>
                    <button className="slide-in-bck-center" onClick={(e) => { navigator.clipboard.writeText("kenchi.huang@gmail.com"); this.setState({ copyText: "Copied!", style: {color: 'green'}}); setTimeout(() => this.setState({copyText: 'Copy Email', style: {} }), 2000); }}>
                        <img className="emailIcon" src={Email} />
                        <span class = "popupText">{this.state.copyText}</span>
                    </button>
                </div>
            </div>
        );
    }
}