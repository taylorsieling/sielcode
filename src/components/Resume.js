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
                            Bonterra Tech<span className="right"><i>Oct 2021 - Sep 2023</i></span><br/>
                            Fullstack Software Developer<br/>
                            <ul className="duties">
                                <li>Planned, built, and maintained applications for the Giving Day product - formerly known as GiveGab - primary using Ruby on Rails and Javascript (vanilla and VueJS) </li>
                                <li>Insured code quality, consistency, and accessibility compliance through code review and testing processes</li>
                                <li>Led an accessibility initiatives to improve giving day sites, standardize accessibility testing across apps, and acquire a Voluntary Product Accessibility Template (VPAT)® for the product</li>
                                <li>Monitored site performance during major giving days and troubleshot technical issued reported by project managers</li>
                                <li>Oversaw code deployments through Heroku</li>
                            </ul>
                        </p>
                        <p>
                            University of Texas Medical Branch<span className="right"><i>Jul 2016 - Oct 2021</i></span><br/>
                            Student Life Program Specialist<br/>
                            <ul className="duties">
                                <li>Utilized VSC to design and code the weekly student e-newsletter and Sitefinity CMS to design the office website</li>
                                <li>Coordinated campus-wide events and activities for students to increase student engagement and retention</li>
                                <li>Managed multiple student organizations, including budgets, to promote leadership and involvement on campus</li>
                                <li>Supervised work study students in multiple positions for the department</li>
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
                            Stephen F. Austin State Univ. <span className="right"><i>Aug 2012 - Dec 2015</i></span> <br/>
                            B.S. Hospitality Administration<br/> 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;
