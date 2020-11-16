import React from 'react';
import '../App.css';

export default class homePage extends React.Component {
    render() {
        return (
            <>{
                !this.props.mobile ? <>
                    <div className = "homePage">
                        <p className="name">
                            Ken-Chi Huang
                        </p>
                        <p className="belowName">
                            Second year Computer Science student at King's College London
                        </p>
                        <p className = "copyrightText">
                            Copyright © Ken-Chi Huang 2020
                        </p>
                    </div>
                </>:
                <>
                    <div className = "homePage-m">
                        <p className="name-m">
                            Ken-Chi Huang
                        </p>
                        <p className="belowName-m">
                            Second year Computer Science student at King's College London
                        </p>
                        <p className = "copyrightText-m">
                            Copyright © Ken-Chi Huang 2020
                        </p>
                    </div>
                </>
            }
            </>
        )
    }
}