import React from 'react';
import '../App.css';

import Ken from '../images/Kenchi.png';
import Cpp from '../images/cpp.png';
import Java from '../images/java.png';
import CSharp from '../images/CSharp.png';
import Golang from '../images/GoLang.png';
import Swift from '../images/swift.png';
import ReactIcon from '../images/react.png';
import Scala from '../images/scala.png'

export default class aboutPage extends React.Component{
    render(){
        return(
            <div>
                <p className = "aboutMeTitle">
                    About Me
                </p>
                <div className = "aboutMeBox">
                    <div className = "aboutMeSection">
                        <img className = "Ken" src = {Ken} />
                    </div>
                    <div className = "aboutMeSection">
                        <p className = "aboutMeText">
                            I am currently in my second year at King's College London studying for a BSc in Computer Science with an Industrial Year.
                            I was introduced to programming by my secondary school maths teacher, who had studied Computer Science himself. 
                            At the time, I was intrigued by how you can use computers to solve complex mathematics problems in the blink of an eye.
                            While programming initially started off as something I did as a hobby in the bi-weekly lunchtime sessions, I gradually got more and more interested in programming.
                            This spurred me to experiment in my own time and begin to learn C#, as this was the language suggested to me by my friend.
                            This was the primary reason behind why I decided to apply for Computer Science courses at university, as I began to love the magic of coding.

                            After starting my studies at university, I continued to learn more about programming with languages such as Java, C++, MySQL, and Scala being in the course.
                            Over the past year, I used my spare time - which increased due to the COVID-19 lockdown - to learn how to program in Swift, reactJS, react-native, and Golang.  
                        </p>
                    </div>
                    <div className = "aboutMeSection">
                        <div className = "skillSection">
                            <button className = "skillButton"><img className = "skillLogo" src = {Cpp}/></button>
                            <button className = "skillButton"><img className = "skillLogo" src = {Java}/></button>
                        </div> 
                    </div>
                    <div className = "aboutMeSection">
                        <div className = "skillSection">
                                <button className = "skillButton"><img className = "skillLogo" src = {CSharp}/></button>
                                <button className = "skillButton"><img className = "skillLogo" src = {Golang}/></button>
                        </div>
                    </div>
                    <div className = "aboutMeSection">
                        <div className = "skillSection">
                                <button className = "skillButton"><img className = "skillLogo" src = {Swift}/></button>
                                <button className = "skillButton"><img className = "skillLogo" src = {ReactIcon}/></button>
                        </div>
                    </div>
                    <div className = "aboutMeSection">
                        <div className = "skillSection">
                                <button className = "skillButton"><img className = "skillLogo" src = {Scala}/></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}