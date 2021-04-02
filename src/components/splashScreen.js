import React from 'react';
import '../App.css';
import Logo from '../images/icon.png';

export default class splashScreen extends React.Component{
    render(){
        return(
            <div className = "splashScreen">
                <img className = "splashLogo" src = {Logo}/>
                <svg height = "200" width = "200">
                    <circle cx = "100" cy = "100" r = "90" stroke = "#38b09d" stroke-width = "6"/>
                </svg>
            </div>
        )
    }
}