import React from 'react';
import '../App.css';

import KCL from '../images/Kings.png';
import BA from '../images/BA.png';
import BHF from '../images/BHF.png';
import HS6 from '../images/hackSheff.png';
import Mercedes from '../images/Mercedes.png';

export default class experiencePage extends React.Component{
    render(){
        return(
            <>{
                !this.props.mobile ? <>
                    <p className = "timelineTitle">Experience and Achievements</p>
                    <p className = "sectionTag">Education</p>
                    <div className = "thinLine"></div>
                    <div className = "experienceBox">
                        <div>
                            <button class = "experienceIconButton" onClick={(e) => { e.preventDefault(); window.open('https://www.kcl.ac.uk/', '_blank') }}>
                                <img class = "experienceIcon" src = {KCL}/>
                            </button>
                            <div className = "experienceInfo">
                                <b className = "experienceTitle">King's College London</b>
                                <b className = "experienceDate">September 2019 - Ongoing</b>
                            </div>
                            <div className = "experienceInfo">
                                <p className = "experiencePosition">Computer Science with an Industrial Year, BSc</p>
                                <p className = "experienceLocation">London, United Kingdom</p>
                            </div>

                            <p className = "sectionTitle">Relevant Modules</p>

                            <ul className = "courseworkList">
                                <li>Computer Systems</li>
                                <li>Computational and Mathematical Thinking for Engineers</li>
                                <li>Database Systems</li>
                                <li>Data Structures</li>
                                <li>Foundations of Computing I and II</li>
                                <li>Introduction to Software Engineering</li>
                                <li>Programming Practice and Applications</li>
                                <li>Introduction to Professional Practices</li>
                                <li>Internet Systems</li>
                                <li>Introduction to Artificial Intelligence</li>
                                <li>Operating Systems and Concurrency</li>
                                <li>Practical Experiences of Programming</li>
                                <li>Programming Language Design Paradigms</li>
                                <li>Robotics and Software Engineering Group Project</li>
                                <li>Cryptography</li>
                                <li>Compilers and Formal Languages</li>
                                <li>Human-Computer Interaction</li>
                            </ul>
                            <div class = "skillBar">
                                <span class = "programmingSkill">Java</span>
                                <span class = "programmingSkill">Object-Oriented Programming</span>
                                <span class = "programmingSkill">C/C++</span>
                                <span class = "programmingSkill">Scala</span>
                                <span class = "programmingSkill">Robotics Operating System</span>
                                <span class = "programmingSkill">Git</span>
                                <span class = "programmingSkill">MySQL</span>
                                <span class = "programmingSkill">Javascript</span>
                                <span class = "programmingSkill">CSS</span>
                                <span class = "programmingSkill">HTML</span>
                                <span class = "skill">Teamwork</span>
                                <span class = "skill">Time Management</span>
                                <span class = "skill">Problem-Solving</span>
                            </div>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    
                    <div className = "thinLine2"></div>
                    <p className = "sectionTag">Work Experience</p>
                    <div className = "thinLine"></div>
                    <div className = "experienceBox">
                        <div>
                            <button class = "experienceIconButton" onClick={(e) => { e.preventDefault(); window.open('https://www.bhf.org.uk/', '_blank') }}>
                                <img class = "experienceIcon" src = {BHF}/>
                            </button>
                            <div className = "experienceInfo">
                                <b className = "experienceTitle">British Heart Foundation</b>
                                <b className = "experienceDate">October 2016 - January 2017</b>
                            </div>
                            <div className = "experienceInfo">
                                <p className = "experiencePosition">Volunteer</p>
                                <p className = "experienceLocation">London, United Kingdom</p>
                            </div>

                            {/* <p className = "sectionTitle">Relevant Modules</p> */}
                            <p className = "sectionDescription">
                                Joined a team of nine volunteers to take in and sort donations and operate the till. 
                                Made sure all donations were sorted correctly and quickly to decrease turn around time.
                                Volunteered for four months in total.
                            </p>
                            <div class = "skillBar">
                                <span class = "skill">Communication</span>
                                <span class = "skill">Time Management</span>
                                <span class = "skill">Problem-Solving</span>
                                <span class = "skill">Teamwork</span>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    {/* <div className = "thinLine"></div> */}
                    
                    <div className = "experienceBox">
                        <div>
                            <button class = "experienceIconButton" onClick={(e) => { e.preventDefault(); window.open('https://www.britishairways.com/', '_blank') }}>
                                <img class = "experienceIcon" src = {BA}/>
                            </button>
                            <div className = "experienceInfo">
                                <b className = "experienceTitle">British Airways</b>
                                <b className = "experienceDate">July 2018</b>
                            </div>
                            <div className = "experienceInfo">
                                <p className = "experiencePosition">Flight Operations Placement Student</p>
                                <p className = "experienceLocation">London Heathrow, United Kingdom</p>
                            </div>

                            <p className = "sectionDescription">
                                Joined the British Airways Work Experience programme and completed flight operations training.
                                Worked with a team to do assessments and exercises while shadowing pilots and staff at headquarters.
                                Additionally had the opportunity to use their simulators and use gliders with senior pilots.
                            </p>
                            <div class = "skillBar">
                                <span class = "skill">Communication</span>
                                <span class = "skill">Problem-Solving</span>
                                <span class = "skill">Leadership</span>
                                <span class = "skill">Collaboration</span>
                                <span class = "skill">Time Management</span>
                                <span class = "skill">Teamwork</span>
                            </div>
                            <p></p>
                        </div>
                    </div>

                    <div className = "experienceBox">
                        <div>
                            <button class = "experienceIconButton" onClick={(e) => { e.preventDefault(); window.open('https://www.kcl.ac.uk/', '_blank') }}>
                                <img class = "experienceIcon" src = {KCL}/>
                            </button>
                            <div className = "experienceInfo">
                                <b className = "experienceTitle">King's College London</b>
                                <b className = "experienceDate">June 2021 - August 2021</b>
                            </div>
                            <div className = "experienceInfo">
                                <p className = "experiencePosition">Undergraduate Research Fellow</p>
                                <p className = "experienceLocation">London, United Kingdom</p>
                            </div>

                            <p className = "sectionDescription">
                                Joined a summer research fellowship programme at King's College London.
                                The topic of the fellowship was the visualisation of complex networks.
                                Worked with the other fellows on the programme to deliver analysis of the extremely large dataset regarding the ecosystem in Otago Harbour, New Zealand.
                                Used clustering to analyse and graph the data.
                            </p>
                            <div class = "skillBar">
                                <span class = "programmingSkill">Python</span>
                                <span class = "programmingSkill">AI</span>
                                <span class = "programmingSkill">Data Clustering</span>
                                <span class = "skill">Communication</span>
                                <span class = "skill">Problem-Solving</span>
                                <span class = "skill">Collaboration</span>
                                <span class = "skill">Time Management</span>
                                <span class = "skill">Research</span>
                                <span class = "skill">Teamwork</span>
                            </div>
                            <p></p>
                        </div>
                    </div>

                    <div className = "experienceBox">
                        <div>
                            <button class = "experienceIconButton" onClick={(e) => { e.preventDefault(); window.open('https://www.mercedes-amg-hpp.com/', '_blank') }}>
                                <img class = "experienceIcon" src = {Mercedes}/>
                            </button>
                            <div className = "experienceInfo">
                                <b className = "experienceTitle">Mercedes-AMG HPP</b>
                                <b className = "experienceDate">September 2021 - September 2022</b>
                            </div>
                            <div className = "experienceInfo">
                                <p className = "experiencePosition">Software and Controls Engineer (Placement)</p>
                                <p className = "experienceLocation">Brixworth, United Kingdom</p>
                            </div>

                            <p className = "sectionDescription">
                                Joined Mercedes-AMG HPP towards the start of September.
                                Worked on the battery management system for Vision EQXX, an EV that can go 1000+km on a single charge.
                                Also worked on the ECU software for the Formula One power units, adding functionality, fixing faults, and maintaining parts of the code.
                            </p>
                            <div class = "skillBar">
                                <span class = "programmingSkill">Simulink</span>
                                <span class = "programmingSkill">MATLAB</span>
                                <span class = "programmingSkill">Model-based design</span>
                                <span class = "skill">Communication</span>
                                <span class = "skill">Problem-Solving</span>
                                <span class = "skill">Collaboration</span>
                                <span class = "skill">Time Management</span>
                                <span class = "skill">Teamwork</span>
                                <span class = "skill">Inter-disciplinary Work</span>
                            </div>
                            <p></p>
                        </div>
                    </div>

                    <p className = "sectionTag">Achievements</p>
                    <div className = "thinLine"></div>
                    <div className = "experienceBox">
                        <div>
                            <button class = "experienceIconButton" onClick={(e) => { e.preventDefault(); window.open('https://devpost.com/software/unifin', '_blank') }}>
                                <img class = "experienceIcon" src = {HS6}/>
                            </button>
                            <div className = "experienceInfo">
                                <b className = "experienceTitle">HackSheffield 6</b>
                                <b className = "experienceDate">November 2020</b>
                            </div>
                            <div className = "experienceInfo">
                                <p className = "experiencePosition">Participant and Award Winner</p>
                                <p className = "experienceLocation">Virtual</p>
                            </div>
                            <p className = "sectionDescription">
                                Worked within a team of three at the hackathon to deliver a mobile app.
                                Decided as a team on a financial management app and we included features like analytics and receipt scanning.
                                The hack ultimately won two categories for 'Best Financial Hack' by Capital One and 'Best use of Google Cloud' by MLH.
                            </p>
                            <div class = "finalSkillBar">
                                <span class = "programmingSkill">React Native</span>
                                <span class = "programmingSkill">React Redux</span>
                                <span class = "programmingSkill">Javascript</span>
                                <span class = "programmingSkill">Google Firebase</span>
                                <span class = "programmingSkill">Google Vision API</span>
                                <span class = "skill">Communication</span>
                                <span class = "skill">Time Management</span>
                                <span class = "skill">Problem-Solving</span>
                                <span class = "skill">Teamwork</span>
                            </div>
                            {/* <div class = "finalSkillBar">

                            </div> */}
                            <p></p>
                        </div>
                    </div>
                        {/* <p className = "experienceTitle">King's College London</p> */}
                    </div>
                    {/* <div className = "timelinePage">
                        <p className = "timelineTitle">Achievements and Experiences</p>
                        <div className = "gradientLine"/>
                        <div className = "infoBox">
                            {data.map(item => {
                                return(
                                    <TimelineBox year={item.year} title={item.title} text={item.text}/>
                                )
                            })}
                        </div>
                    </div> */}
                </>:
                <>
                    <p className = "timelineTitle-m">Experience and Achievements</p>
                    <p className = "sectionTag-m">Education</p>
                    <div className = "thinLine-m"></div>
                    <div className = "experienceBox-m">
                        <div>
                            <button class = "experienceIconButton-m" onClick={(e) => { e.preventDefault(); window.open('https://www.kcl.ac.uk/', '_blank') }}>
                                <img class = "experienceIcon-m" src = {KCL}/>
                            </button>
                            <div className = "experienceInfo-m">
                                <b className = "experienceTitle-m">King's College London</b>
                                <b className = "experienceDate-m">September 2019 - Ongoing</b>
                            </div>
                            <div className = "experienceInfo-m">
                                <p className = "experiencePosition-m">Computer Science with an Industrial Year, BSc</p>
                                <p className = "experienceLocation-m">London, United Kingdom</p>
                            </div>

                            <p className = "sectionTitle-m">Relevant Modules</p>

                            <ul className = "courseworkList-m">
                                <li>Computer Systems</li>
                                <li>Computational and Mathematical Thinking for Engineers</li>
                                <li>Database Systems</li>
                                <li>Data Structures</li>
                                <li>Foundations of Computing I and II</li>
                                <li>Introduction to Software Engineering</li>
                                <li>Programming Practice and Applications</li>
                                <li>Introduction to Professional Practices</li>
                                <li>Internet Systems</li>
                                <li>Introduction to Artificial Intelligence</li>
                                <li>Operating Systems and Concurrency</li>
                                <li>Practical Experiences of Programming</li>
                                <li>Programming Language Design Paradigms</li>
                                <li>Robotics and Software Engineering Group Project</li>
                            </ul>
                            <div class = "skillBar-m">
                                <span class = "programmingSkill-m">Java</span>
                                <span class = "programmingSkill-m">Object-Oriented Programming</span>
                                <span class = "programmingSkill-m">C/C++</span>
                                <span class = "programmingSkill-m">Scala</span>
                                <span class = "programmingSkill-m">Robotics Operating System</span>
                                <span class = "programmingSkill-m">Git</span>
                                <span class = "programmingSkill-m">MySQL</span>
                                <span class = "programmingSkill-m">Javascript</span>
                                <span class = "programmingSkill-m">CSS</span>
                                <span class = "programmingSkill-m">HTML</span>
                                <span class = "skill-m">Teamwork</span>
                                <span class = "skill-m">Time Management</span>
                                <span class = "skill-m">Problem-Solving</span>
                            </div>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    
                    <div className = "thinLine2-m"></div>
                    <p className = "sectionTag-m">Work Experience</p>
                    <div className = "thinLine-m"></div>
                    <div className = "experienceBox-m">
                        <div>
                            <button class = "experienceIconButton-m" onClick={(e) => { e.preventDefault(); window.open('https://www.bhf.org.uk/', '_blank') }}>
                                <img class = "experienceIcon-m" src = {BHF}/>
                            </button>
                            <div className = "experienceInfo-m">
                                <b className = "experienceTitle-m">British Heart Foundation</b>
                                <b className = "experienceDate-m">October 2016 - January 2017</b>
                            </div>
                            <div className = "experienceInfo-m">
                                <p className = "experiencePosition-m">Volunteer</p>
                                <p className = "experienceLocation-m">London, United Kingdom</p>
                            </div>

                            {/* <p className = "sectionTitle">Relevant Modules</p> */}
                            <p className = "sectionDescription-m">
                                Joined a team of nine volunteers to take in and sort donations and operate the till. 
                                Made sure all donations were sorted correctly and quickly to decrease turn around time.
                                Volunteered for four months in total.
                            </p>
                            <div class = "skillBar-m">
                                <span class = "skill-m">Communication</span>
                                <span class = "skill-m">Time Management</span>
                                <span class = "skill-m">Problem-Solving</span>
                                <span class = "skill-m">Teamwork</span>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    {/* <div className = "thinLine"></div> */}
                    
                    <div className = "experienceBox-m">
                        <div>
                            <button class = "experienceIconButton-m" onClick={(e) => { e.preventDefault(); window.open('https://www.britishairways.com/', '_blank') }}>
                                <img class = "experienceIcon-m" src = {BA}/>
                            </button>
                            <div className = "experienceInfo-m">
                                <b className = "experienceTitle-m">British Airways</b>
                                <b className = "experienceDate-m">July 2018</b>
                            </div>
                            <div className = "experienceInfo-m">
                                <p className = "experiencePosition-m">Flight Operations Placement Student</p>
                                <p className = "experienceLocation-m">London Heathrow, United Kingdom</p>
                            </div>

                            <p className = "sectionDescription-m">
                                Joined the British Airways Work Experience programme and completed flight operations training.
                                Worked with a team to do assessments and exercises while shadowing pilots and staff at headquarters.
                                Additionally had the opportunity to use their simulators and use gliders with senior pilots.
                            </p>
                            <div class = "skillBar-m">
                                <span class = "skill-m">Communication</span>
                                <span class = "skill-m">Problem-Solving</span>
                                <span class = "skill-m">Leadership</span>
                                <span class = "skill-m">Collaboration</span>
                                <span class = "skill-m">Time Management</span>
                                <span class = "skill-m">Teamwork</span>
                            </div>
                            <p></p>
                        </div>
                    </div>

                    <div className = "experienceBox-m">
                        <div>
                            <button class = "experienceIconButton-m" onClick={(e) => { e.preventDefault(); window.open('https://www.kcl.ac.uk/', '_blank') }}>
                                <img class = "experienceIcon-m" src = {KCL}/>
                            </button>
                            <div className = "experienceInfo-m">
                                <b className = "experienceTitle-m">King's College London</b>
                                <b className = "experienceDate-m">June 2021 - August 2021</b>
                            </div>
                            <div className = "experienceInfo-m">
                                <p className = "experiencePosition-m">Undergraduate Research Fellow</p>
                                <p className = "experienceLocation-m">London, United Kingdom</p>
                            </div>

                            <p className = "sectionDescription-m">
                                Joined a summer research fellowship programme at King's College London.
                                The topic of the fellowship was the visualisation of complex networks.
                                Worked with the other fellows on the programme to deliver analysis of the extremely large dataset regarding the ecosystem in Otago Harbour, New Zealand.
                                Used clustering to analyse and graph the data.
                            </p>
                            <div class = "skillBar-m">
                                <span class = "programmingSkill-m">Python</span>
                                <span class = "programmingSkill-m">AI</span>
                                <span class = "programmingSkill-m">Data Clustering</span>
                                <span class = "skill-m">Communication</span>
                                <span class = "skill-m">Problem-Solving</span>
                                <span class = "skill-m">Collaboration</span>
                                <span class = "skill-m">Time Management</span>
                                <span class = "skill-m">Research</span>
                                <span class = "skill-m">Teamwork</span>
                            </div>
                            <p></p>
                        </div>
                    </div>

                    <div className = "experienceBox-m">
                        <div>
                            <button class = "experienceIconButton-m" onClick={(e) => { e.preventDefault(); window.open('https://www.mercedes-amg-hpp.com/', '_blank') }}>
                                <img class = "experienceIcon-m" src = {Mercedes}/>
                            </button>
                            <div className = "experienceInfo-m">
                                <b className = "experienceTitle-m">Mercedes-AMG HPP</b>
                                <b className = "experienceDate-m">September 2021 - September 2022</b>
                            </div>
                            <div className = "experienceInfo-m">
                                <p className = "experiencePosition-m">Software and Controls Engineer (Placement)</p>
                                <p className = "experienceLocation-m">Brixworth, United Kingdom</p>
                            </div>

                            <p className = "sectionDescription-m">
                                Joined Mercedes-AMG HPP towards the start of September.
                                Worked on the battery management system for Vision EQXX, an EV that can go 1000+km on a single charge.
                                Also worked on the ECU software for the Formula One power units, adding functionality, fixing faults, and maintaining parts of the code.
                            </p>
                            <div class = "skillBar-m">
                                <span class = "programmingSkill-m">Simulink</span>
                                <span class = "programmingSkill-m">MATLAB</span>
                                <span class = "programmingSkill-m">Model-based design</span>
                                <span class = "skill-m">Communication</span>
                                <span class = "skill-m">Problem-Solving</span>
                                <span class = "skill-m">Collaboration</span>
                                <span class = "skill-m">Time Management</span>
                                <span class = "skill-m">Teamwork</span>
                                <span class = "skill-m">Inter-disciplinary Work</span>
                            </div>
                            <p></p>
                        </div>
                    </div>

                    <p className = "sectionTag-m">Achievements</p>
                    <div className = "thinLine-m"></div>
                    <div className = "experienceBox-m">
                        <div>
                            <button class = "experienceIconButton-m" onClick={(e) => { e.preventDefault(); window.open('https://devpost.com/software/unifin', '_blank') }}>
                                <img class = "experienceIcon-m" src = {HS6}/>
                            </button>
                            <div className = "experienceInfo-m">
                                <b className = "experienceTitle-m">HackSheffield 6</b>
                                <b className = "experienceDate-m">November 2020</b>
                            </div>
                            <div className = "experienceInfo-m">
                                <p className = "experiencePosition-m">Participant and Award Winner</p>
                                <p className = "experienceLocation-m">Virtual</p>
                            </div>
                            <p className = "sectionDescription-m">
                                Worked within a team of three at the hackathon to deliver a mobile app.
                                Decided as a team on a financial management app and we included features like analytics and receipt scanning.
                                The hack ultimately won two categories for 'Best Financial Hack' by Capital One and 'Best use of Google Cloud' by MLH.
                            </p>
                            <div class = "finalSkillBar-m">
                                <span class = "programmingSkill-m">React Native</span>
                                <span class = "programmingSkill-m">React Redux</span>
                                <span class = "programmingSkill-m">Javascript</span>
                                <span class = "programmingSkill-m">Google Firebase</span>
                                <span class = "programmingSkill-m">Google Vision API</span>
                                <span class = "skill-m">Communication</span>
                                <span class = "skill-m">Time Management</span>
                                <span class = "skill-m">Problem-Solving</span>
                            </div>
                            {/* <div class = "finalSkillBar">

                            </div> */}
                            <p></p>
                        </div>
                    </div>
                        {/* <p className = "experienceTitle">King's College London</p> */}
                    </div>
                    {/* <div className = "timelinePage-m"> 
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
                    </div> */}
                </>
            }
            </>
        )
    }
}