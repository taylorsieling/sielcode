import React from 'react'

function Resume() {
    return (
        <section id="resume">
            <div className="section-title">
                <h3>RÉSUMÉ</h3>
            </div>
            <div className="res-body">
                <div className="scroll">
                    <div>
                        <h4 className="resume-title">Experience</h4><hr/>
                        <p>
                            University of Texas Medical Branch<span className="right"><i>Jul 2016 - Present</i></span><br/>
                            Student Life Program Specialist<br/> 
                            <ul className="duties">
                                <li>Utilize VSC to design and code the weekly student e-newsletter and Sitefinity CMS to design the office website</li>
                                <li>Coordinate campus-wide events and activities for students to increase student engagement and retention</li>
                                <li>Manage multiple student organizations, including budgets, to promote leadership and involvement on campus</li>
                                <li>Supervise and hire federal work study students in multiple positions for the department</li>
                            </ul>
                        </p>
                        <p>
                            Various Catering Positions<span className="right"><i>Aug 2014 - May 2016</i></span><br/>
                            Newk's Eatery | Stephen F. Austin State Univ.<br/> 
                            <ul className="duties">
                                <li>Assisted clients in creating catering menus, including menu design and food selection, to fit the needs of their events </li>
                                <li>Designed and assembled catering displays for clients at events, including graphic elements and food presentation</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h4 className="resume-title">Education</h4><hr/>
                        <p>
                            Flatiron School <span className="right"><i>Aug 2020 - Jun 2021</i></span> <br/>
                            Software Engineering Program<br/> 
                        </p>
                        <p>
                            Stephen F. Austin State Univ. <span className="right">Aug 2012 - Dec 2015</span> <br/>
                            B.S. Hospitality Administration<br/> 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;
