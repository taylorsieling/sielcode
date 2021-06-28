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
                        <p>> Taylor.specialty <br/>  <span class="about-answer"> &nbsp;&nbsp; => "Full-Stack Web Developer"</span></p>
                        <p>> Taylor.location <br/>  <span class="about-answer"> &nbsp;&nbsp; => "Houston, TX"</span></p>
                        <p>> Taylor.education[0] <br/>  <span class="about-answer"> &nbsp;&nbsp; => &#123; School: "Flatiron School", Program: "Software Engineering" &#125; </span></p>
                        <p>> Taylor.education[1] <br/>  <span class="about-answer"> &nbsp;&nbsp; => &#123; School: "Stephen F. Austin State Univ", <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Degree: "Bachelor of Science", <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Major: "Hospitality Administration" &#125;</span></p>
                        <p>> Taylor.skills <br/>  <span class="about-answer"> &nbsp;&nbsp; => ["Javascript", "React", "Ruby", "Rails", "SQL", "HTML", "CSS"]</span></p>
                        <p>> Taylor.interests <br/>  <span class="about-answer"> &nbsp;&nbsp; => ["design", "code", "front-end", "tea", "knitting", "cats"]</span></p>
                        <p>> Taylor.goal <br/>  <span class="about-answer"> &nbsp;&nbsp; => "To help you code and design beautiful web applications &#60;3"</span></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
