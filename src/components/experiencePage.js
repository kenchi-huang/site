import React from 'react';
import '../App.css';
import TimelineBox from './timelineBox';
import data from '../data/timelineInfo'

export default class experiencePage extends React.Component{
    render(){
        return(
            <>{
                !this.props.mobile ? <>
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
                </>:
                <>
                    <div className = "timelinePage-m">
                        <p className = "timelineTitle-m">Achievements and Experiences</p>
                            <div className = "mobileTimelineBox">
                                <div className = "gradientLine-m"/>
                            </div>
                            <div className = "mobileTimelineBox">
                                <div className = "infoBox-m">
                                    {data.map(item => {
                                        return(
                                            <TimelineBox year={item.year} title={item.title} text={item.text} mobile = {this.props.mobile}/>
                                        )
                                    })}
                                </div>
                            </div>
                    </div>
                </>
            }
            </>
        )
    }
}