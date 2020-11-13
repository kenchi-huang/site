import React from 'react';
import '../App.css';
import data from '../data/projectInfo';
import ProjectCircle from './projectCircle';

import Unifin from '../images/Unifin.png';
import Airbnb from '../images/AirbnbProj.png';

export default class projectPage extends React.Component{
    render(){
        return(
            <div className = "projectScreen">
                <p className = "projectPageTitle">Projects</p>
                {/* <div className = "projectsBox">
                    {data.map(item => {
                        return(
                            <button className = "projectButton" onClick={(e) => { e.preventDefault(); window.open({item.url}, '_blank') }}>
                            <img className = "projectIcon" src={item.image}/>
                            <div class = "projectPopup">
                                <ProjectCircle year = {item.year} title = {item.title} description = {item.description}/>
                            </div>
                        </button>
                        )
                    })}
                </div> */}
                <div className = "projectsBox">
                    <div className = "projectSection">
                        <button className = "projectButton" onClick={(e) => { e.preventDefault(); window.open('https://github.com/danieltsanghang/AirBnB/tree/master', '_blank') }}>
                            <img className = "projectIcon" src={Airbnb}/>
                            <div className = "projectPopup">
                                <ProjectCircle year = "2020" title = "Airbnb JavaFX Project" description = "An Airbnb Application that grabs data from .csv files. This was the final project of our first year, I was in charge of the implementation of the google street view."/>
                            </div>
                        </button>
                    </div>
                    <div className = "projectSection">
                        <button className = "projectButton" onClick={(e) => { e.preventDefault(); window.open('https://github.com/lochungtin/Unifin', '_blank') }}>
                            <img className = "projectIcon" src={Unifin}/>
                            <div className = "projectPopup">
                                <ProjectCircle year = "2020" title = "Unifin" description = "A multi-hackathon-category winning application that utilises the React-Native framework. Developed within a team of 3 and submitted to HackSheffield 6. Won the categories: Best Google Cloud Implementation and Best Fintech Application."/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}