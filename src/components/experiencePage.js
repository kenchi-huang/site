import React from 'react';
import '../App.css';
import TimelineBox from './timelineBox';
import data from '../data/timelineInfo'

export default class experiencePage extends React.Component{
    render(){
        return(
            <div className = "timelinePage">
                <p className = "timelineTitle">Achievements and Experiences</p>
                <div className = "gradientLine"/>
                <div className = "infoBox">
                    {data.map(item => {
                        return(
                            <TimelineBox year={item.year} title={item.title} text={item.text}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}