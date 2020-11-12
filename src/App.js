import React from 'react';
import './App.css';
import logo from './logo.png';
import Home from './components/homePage';
import About from './components/aboutPage';
import Projects from './components/projectPage';
import Experience from './components/experiencePage';
import Resume from './components/resumePage';
import Contact from './components/contactPage';

import Email from './em.png';
import Github from './gh.png';
import Insta from './ig.png';
import LinkedIn from './in.png';

import Pdf from './Ken-Chi_Huang_CV.pdf';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            display: 'home',
            copySuccess: false,
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
                            Experiences
                        </button>
                        {/* <a href={Pdf} without rel="noopener noreferrer" target="_blank"> */}
                        <button className={this.naviButton('resume')} onClick={() => this.setState({ display: 'resume' })}>
                            Resume
                        </button>
                        {/* </a> */}
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
                    {this.state.display === 'resume' && <Resume />}
                    {this.state.display === 'contact' && <Contact />}
                </div>
                <div className="contactBar">
                    <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://github.com/kenchi-huang', '_blank') }}>
                        <img className="githubIcon" src={Github} />
                    </button>
                    <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://www.instagram.com/ken.h01/', '_blank') }}>
                        <img className="instaIcon" src={Insta} />
                    </button>
                    <button className="slide-in-bck-center" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/ken-chi-huang-5028561ba', '_blank') }}>
                        <img className="linkedInIcon" src={LinkedIn} />
                    </button>
                    <button className="slide-in-bck-center" onClick={() => { navigator.clipboard.writeText("kenchi.huang@gmail.com"); this.setState({ copySuccess: true }) }}>
                        <img className="emailIcon" src={Email} />
                    </button>
                </div>
                {
                    this.state.copySuccess ?
                        <p className="copySuccessMessage">
                            Copied!
                    </p> : null
                }
            </div>
        );
    }
}