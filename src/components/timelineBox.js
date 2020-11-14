import { render } from '@testing-library/react';
import React from 'react';
import '../App.css';

export default class timelineBox extends React.Component{
    render(){
        return(
            <>{
                !this.props.mobile ? <>
                    <div className = "timelineObject">
                        <p className = "timelineYear">{this.props.year}</p>
                        <div className = "timelineTitleBox">
                            <p className = "timelineInfoTitle">{this.props.title}</p>
                        </div>
                        <p className = "timelineText">{this.props.text}</p>
                    </div>
                </>:
                <>
                    <div className = "timelineObject-m">
                        <p className = "timelineYear-m">{this.props.year}</p>
                        <div className = "timelineTitleBox-m">
                            <p className = "timelineInfoTitle-m">{this.props.title}</p>
                        </div>
                        <p className = "timelineText-m">{this.props.text}</p>
                    </div>
                </>
            }
            </>
        )
    }
}