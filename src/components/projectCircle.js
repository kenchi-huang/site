import React from 'react';
import '../App.css';

export default class projectCircle extends React.Component{
    render(){
        return(
            <>{
                !this.props.mobile ? <>
                    <div className = "projectBox">
                        {/* <p className = "projectYear">{this.props.year}</p> */}
                        <div className = "projectInfo">
                            <p className = "projectTitle">{this.props.title} - {this.props.year}</p>
                        </div>
                        <p className = "projectDescription">{this.props.description}</p>
                    </div>
                </>:
                <>
                    <div className = "projectBox-m">
                        {/* <p className = "projectYear">{this.props.year}</p> */}
                        <div className = "projectInfo-m">
                            <p className = "projectTitle-m">{this.props.title} - {this.props.year}</p>
                        </div>
                        <p className = "projectDescription-m">{this.props.description}</p>
                    </div>
                </>
            }
            </>
        )
    }
}