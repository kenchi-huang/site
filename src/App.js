import React from 'react';
import './App.css';
import Home from './components/homePage';
import About from './components/aboutPage';
import Projects from './components/projectPage';
import Experience from './components/experiencePage';
import Resume from './redundant/resumePage';
import ContactButtons from './redundant/contactButton';

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
            width: 0,
            height: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions(){
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    naviButton = name => {
        if (this.state.display === name)
            return 'naviButtonSelected';
        return 'naviButton';
    }

    naviButtonM = name => {
        if (this.state.display === name)
            return 'naviButtonSelected-m';
        return 'naviButtonM';
    }

    render() {
        return (
            <>
                {this.state.width > this.state.height ?
                <>
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
                                <img className="contactIcon" src={Github} />
                                <span class = "popupText">Open Github</span>
                            </button>
                            <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://www.instagram.com/ken.h01/', '_blank') }}>
                                <img className="contactIcon" src={Insta} />
                                <span class = "popupText">Open Instagram</span>
                            </button>
                            <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/ken-chi-huang-5028561ba', '_blank') }}>
                                <img className="contactIcon" src={LinkedIn} />
                                <span class = "popupText">Open LinkedIn</span>
                            </button>
                            <button className="slide-in-bck-center" onClick={(e) => { navigator.clipboard.writeText("kenchi.huang@gmail.com"); this.setState({ copyText: "Copied!", style: {color: 'green'}}); setTimeout(() => this.setState({copyText: 'Copy Email', style: {} }), 2000); }}>
                                <img className="contactIcon" src={Email} />
                                <span class = "popupText">{this.state.copyText}</span>
                            </button>
                        </div>
                    </div>
                </> :
                <>
                    <div>
                        <div className="navBar-m">
                            <div className="navButtons-m">
                                <button className={this.naviButtonM('about')} onClick={() => this.setState({ display: 'about' })}>
                                    About Me
                                </button>
                                <button className={this.naviButtonM('projects')} onClick={() => this.setState({ display: 'projects' })}>
                                    Projects
                                </button>
                                <button className={this.naviButtonM('experience')} onClick={() => this.setState({ display: 'experience' })}>
                                    Achievements
                                </button>
                                <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                                    <button className={this.naviButtonM('resume')}> 
                                    {/*onClick={() => this.setState({ display: 'home' })}> */}
                                        Resume
                                    </button>
                                </a>
                            </div>
                            <div className="homeButton-m">
                                <button className={this.naviButton('home')} onClick={() => this.setState({ display: 'home' })}>
                                    <img className="icon-m" src={logo} />
                                </button>
                            </div>
                        </div>
                        <div className='pageStates-m'>
                            {this.state.display === 'home' && <Home mobile = {this.state.height > this.state.width}/>}
                            {this.state.display === 'about' && <About mobile = {this.state.height > this.state.width}/>}
                            {this.state.display === 'projects' && <Projects mobile = {this.state.height > this.state.width}/>}
                            {this.state.display === 'experience' && <Experience mobile = {this.state.height > this.state.width}/>}
                            {/* {this.state.display === 'resume' && <Resume />} */}
                            {/* {this.state.display === 'contact' && <Contact />} */}
                        </div>
                        
                        <div className = "mobileContactBar">
                            <div className="contactBar-m">
                                {/* <ContactButtons src = "Github" text="Open Github" storage = "Open Github"/> */}
                                <button className="slide-in-bck-center-m" onClick={(e) => { e.preventDefault(); window.open('https://github.com/kenchi-huang', '_blank') }}>
                                    <img className="contactIcon-m" src={Github} />
                                    <span class = "popupText-m">Open Github</span>
                                </button>
                                <button className="slide-in-bck-center-m" onClick={(e) => { e.preventDefault(); window.open('https://www.instagram.com/ken.h01/', '_blank') }}>
                                    <img className="contactIcon-m" src={Insta} />
                                    <span class = "popupText-m">Open Instagram</span>
                                </button>
                                <button className="slide-in-bck-center-m" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/ken-chi-huang-5028561ba', '_blank') }}>
                                    <img className="contactIcon-m" src={LinkedIn} />
                                    <span class = "popupText-m">Open LinkedIn</span>
                                </button>
                                <button className="slide-in-bck-center-m" onClick={(e) => { navigator.clipboard.writeText("kenchi.huang@gmail.com"); this.setState({ copyText: "Copied!", style: {color: 'green'}}); setTimeout(() => this.setState({copyText: 'Copy Email', style: {} }), 2000); }}>
                                    <img className="contactIcon-m" src={Email} />
                                    <span class = "popupText-m">{this.state.copyText}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
                }
            </>
        );
    }
}