import React from 'react'

export default function About() {
    return (
        <section id="about">
            <div className="about">
            <div className="code">
                <div className="console-top">
                    <div className="console-buttons">
                        <div className="close"></div>
                        <div className="minimize"></div>
                        <div className="zoom"></div>
                    </div>
                </div>
                <div className="console-body">
                    <div className="about-text">
                        <p className="about-answer"> &#47;&#47; AboutMe.md</p>
                        <p>&gt; Taylor.specialty <br/>  <span className="about-answer"> &nbsp;&nbsp; =&gt; "Full-Stack Web Developer"</span></p>
                        <p>&gt; Taylor.location <br/>  <span className="about-answer"> &nbsp;&nbsp; =&gt; "Galveston, TX"</span></p>
                        <p>&gt; Taylor.education[0] <br/>  <span className="about-answer"> &nbsp;&nbsp; =&gt; &#123; School: "Flatiron School", Program: "Software Engineering" &#125; </span></p>
                        <p>&gt; Taylor.education[1] <br/>  <span className="about-answer"> &nbsp;&nbsp; =&gt; &#123; School: "Stephen F. Austin State Univ", <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Degree: "Bachelor of Science", <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Major: "Hospitality Administration" &#125;</span></p>
                        <p>&gt; Taylor.skills <br/>  <span className="about-answer"> &nbsp;&nbsp; =&gt; ["Javascript", "React", "Vue", "Ruby", "Rails", "SQL", "HTML", "CSS"]</span></p>
                        <p>&gt; Taylor.interests <br/>  <span className="about-answer"> &nbsp;&nbsp; =&gt; ["design", "code", "front-end", "tea", "knitting", "cats"]</span></p>
                        <p>&gt; Taylor.goal <br/>  <span className="about-answer"> &nbsp;&nbsp; =&gt; "To help you code and design beautiful web applications &#60;3"</span></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
