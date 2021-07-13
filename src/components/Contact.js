import React from 'react'
import contactpic from '../images/contactpic.png'

export default function Contact() {
    return (
        <section id="contact">
            <div className="contact">
                <div className="contact-div">
                    <div className="row">
                        <div className="row-two-con"><img src={contactpic} alt="headshot" className="contact-pic"/></div>
                        <div className="contact">
                            <p className="contact-title">Let's Stay in Touch!</p>                            
                            <p className="icon">
                                <a href="mailto:taylorasieling@gmail.com" target="_blank"><i class="fas fa-envelope-square fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp; 
                                <a href="https://twitter.com/sielcode" target="_blank"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/in/taylorasieling/" target="_blank"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
                                <a href="https://dev.to/taylorsieling" target="_blank"><i class="fab fa-dev fa-3x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp; 
                                <a href="https://github.com/taylorsieling" target="_blank"><i class="fab fa-github-square fa-3x"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
