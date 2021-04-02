import React from 'react';
import '../App.css';

import Unifin from '../images/Unifin.png';
// import Airbnb from '../images/AirbnbProj.png';
import PortfolioIcon from '../images/icon.png';
import Github from '../images/gh.png';
import Airbnb from '../images/welcome-screen.png';
import CoinControl from '../images/CoinControl.png';
import Webpage from '../images/webpage.png';

export default class projectPage extends React.Component{
    render(){
        return(
            <>{
                !this.props.mobile ? <>
                    <div className = "projectScreen">
                        <p className = "projectPageTitle">Things I've worked on</p>
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
                                <div className = "projectContent">
                                    <p className = "projectOverline">Featured Project</p>
                                    <p className = "projectTitle">Airbnb Viewer</p>
                                    <div className = "projectDescription">
                                        <p className = "projectText">
                                            A desktop application built using Java and JavaFX. View Airbnb Listings from a csv file with information such as when the listing is available and the price per night.
                                            Sort listings by price, distance to Trafalgar Square, and more. Once you find a listing you would like to see, use the built in Google Streetview frame to view more.
                                        </p>
                                    </div>
                                    <ul className = "projectTechList">
                                        <li className = "techItem">JavaFX</li>
                                        <li className = "techItem">Java</li>
                                    </ul>
                                    <div className = "projectLinks">
                                        <button className = "projectButton"onClick={(e) => { e.preventDefault(); window.open('https://github.com/danieltsanghang/AirBnB/tree/master', '_blank') }}>
                                            <img className = "projectIcon" src={Github}/>
                                        </button>
                                    </div>
                                </div>
                                <div className = "projectImage">
                                    <img className = "projectIMG" src = {Airbnb}/>
                                </div>
                            </div>
                            <div className = "projectSectionAlt">
                                <div className = "projectContentAlt">
                                    <div className = "projectTitleBox">
                                        <p className = "projectOverlineAlt">Featured Project</p>
                                        <p className = "projectTitleAlt">Unifin</p>
                                    </div>
                                    <div className = "projectDescriptionAlt">
                                        <p className = "projectTextAlt">
                                        A mobile app built on the React Native framework. View income and expenses on analytical features like pie charts with custom categories for sorting through different transactions.
                                        Create and save new transactions added manually or through the receipt scanning feature and more.
                                        </p>
                                    </div>
                                    <ul className = "projectTechListAlt">
                                        <li className = "techItemAlt">React Native</li>
                                        <li className = "techItemAlt">Google Firebase</li>
                                        <li className = "techItemAlt">Google Vision API</li>
                                    </ul>
                                    <div className = "projectLinksAlt">
                                        <button className = "projectButton"onClick={(e) => { e.preventDefault(); window.open('https://github.com/lochungtin/Unifin', '_blank') }}>
                                            <img className = "projectIcon" src={Github}/>
                                        </button>
                                        <button className = "projectButton"onClick={(e) => { e.preventDefault(); window.open('https://devpost.com/software/unifin', '_blank') }}>
                                            <img id = "wp" className = "projectIcon" src={Webpage}/>
                                        </button>
                                    </div>
                                </div>                                
                                <div className = "projectImageAlt">
                                    <img className = "projectIMG" src = {Unifin}/>
                                </div>
                            </div>
                            <div id = "lastProject" className = "projectSection">
                                <div className = "projectContent">
                                    <p className = "projectOverline">Featured Project</p>
                                    <p className = "projectTitle">CoinControl</p>
                                    <div className = "projectDescription">
                                        <p className = "projectText">
                                        A mobile app built on the React Native framework. A continuation of Unifin with more features like better cross-compatibility, analytical reports, and other methods of viewing a breakdown of your income and expenses.
                                        Create and view transactions with custom or preset categories and receive reports breaking down what you've spent money on.
                                        </p>
                                    </div>
                                    <ul className = "projectTechList">
                                        <li className = "techItem">React Native</li>
                                        <li className = "techItem">React Redux</li>
                                    </ul>
                                    <div className = "projectLinks">
                                        {/* <button className = "projectButton"onClick={(e) => { e.preventDefault(); window.open('https://github.com/danieltsanghang/AirBnB/tree/master', '_blank') }}>
                                            <img className = "projectIcon" src={Github}/>
                                        </button> */}
                                    </div>
                                </div>
                                <div className = "projectImage">
                                    <img className = "projectIMG" src = {CoinControl}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>:
                <>
                    <div className = "projectScreen-m">
                        <p className = "projectPageTitle-m">Things I've worked on</p>
                        <div className = "projectsBox-m">
                            <div className = "projectSection-m">
                                <div className = "projectContent-m">
                                    <p className = "projectOverline-m">Featured Project</p>
                                    <p className = "projectTitle-m">Airbnb Viewer</p>
                                    <div className = "projectDescription-m">
                                        <p className = "projectText-m">
                                            A desktop application built using Java and JavaFX. View Airbnb Listings from a csv file with information such as when the listing is available and the price per night.
                                            Sort listings by price, distance to Trafalgar Square, and more. Once you find a listing you would like to see, use the built in Google Streetview frame to view more.
                                        </p>
                                    </div>
                                    <ul className = "projectTechList-m">
                                        <li className = "techItem-m">JavaFX</li>
                                        <li className = "techItem-m">Java</li>
                                    </ul>
                                    <div className = "projectLinks-m">
                                        <button className = "projectButton-m"onClick={(e) => { e.preventDefault(); window.open('https://github.com/danieltsanghang/AirBnB/tree/master', '_blank') }}>
                                            <img className = "projectIcon-m" src={Github}/>
                                        </button>
                                    </div>
                                </div>
                                <div id="project1" className = "projectImage-m">
                                    <img className = "projectIMG-m" src = {Airbnb}/>
                                </div>
                            </div>
                            <div className = "projectSectionAlt-m">
                                <div className = "projectContentAlt-m">
                                    <div className = "projectTitleBox-m">
                                        <p className = "projectOverlineAlt-m">Featured Project</p>
                                        <p className = "projectTitleAlt-m">Unifin</p>
                                    </div>
                                    <div className = "projectDescriptionAlt-m">
                                        <p className = "projectTextAlt-m">
                                        A mobile app built on the React Native framework. View income and expenses on analytical features like pie charts with custom categories for sorting through different transactions.
                                        Create and save new transactions added manually or through the receipt scanning feature and more.
                                        </p>
                                    </div>
                                    <ul className = "projectTechListAlt-m">
                                        <li className = "techItemAlt-m">React Native</li>
                                        <li className = "techItemAlt-m">Google Firebase</li>
                                        <li className = "techItemAlt-m">Google Vision API</li>
                                    </ul>
                                    <div className = "projectLinksAlt-m">
                                        <button className = "projectButton-m"onClick={(e) => { e.preventDefault(); window.open('https://github.com/lochungtin/Unifin', '_blank') }}>
                                            <img className = "projectIcon-m" src={Github}/>
                                        </button>
                                        <button className = "projectButton-m"onClick={(e) => { e.preventDefault(); window.open('https://devpost.com/software/unifin', '_blank') }}>
                                            <img id = "wp" className = "projectIcon-m" src={Webpage}/>
                                        </button>
                                    </div>
                                </div>                                
                                <div id="project2" className = "projectImageAlt-m">
                                    <img className = "projectIMG-m" src = {Unifin}/>
                                </div>
                            </div>
                            <div id = "projectCard3" className = "projectSection-m">
                                <div className = "projectContent-m">
                                    <p className = "projectOverline-m">Featured Project</p>
                                    <p className = "projectTitle-m">CoinControl</p>
                                    <div className = "projectDescription-m">
                                        <p className = "projectText-m">
                                        A mobile app built on the React Native framework. A continuation of Unifin with more features like better cross-compatibility, analytical reports, and other methods of viewing a breakdown of your income and expenses.
                                        Create and view transactions with custom or preset categories and receive reports breaking down what you've spent money on.
                                        </p>
                                    </div>
                                    <ul className = "projectTechList-m">
                                        <li className = "techItem-m">React Native</li>
                                        <li className = "techItem-m">React Redux</li>
                                    </ul>
                                    <div className = "projectLinks-m">
                                        {/* <button className = "projectButton-m"onClick={(e) => { e.preventDefault(); window.open('https://github.com/danieltsanghang/AirBnB/tree/master', '_blank') }}>
                                            <img className = "projectIcon-m" src={Github}/>
                                        </button> */}
                                    </div>
                                </div>
                                <div id="project3" className = "projectImage-m">
                                    <img className = "projectIMG-m" src = {CoinControl}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            </>
        )
    }
}