import React from 'react';
import '../App.css';

export default class homePage extends React.Component {
    render() {
        return (
            <>{
                !this.props.mobile ? <>
                    <div className = "homePage">
                        <p className = "welcomeText">
                            Hey! My name is
                        </p>
                        <p className="name">
                            Ken-Chi Huang.
                        </p>
                        <p className="belowName">
                            I'm a second year Computer Science student at King's College London.
                        </p>
                    </div>
                </>:
                <>
                    <div className = "homePage-m">
                        <p className = "welcomeText-m">
                            Hey! My name is
                        </p>
                        <p className="name-m">
                            Ken-Chi Huang.
                        </p>
                        <p className="belowName-m">
                            I'm a second year Computer Science student at King's College London.
                        </p>
                    </div>
                </>
            }
            </>
        )
    }
}