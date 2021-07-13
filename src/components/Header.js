import React from 'react'
import headshot from '../images/headshot.png'

export default function Header() {
    return (
        <section id="header">
            <div className="header">
                <div className="row">
                    <div className="row-two-head header-img">
                        <img className="headshot" src={headshot} alt="Taylor's Headshot"/>
                    </div>
                    <div className="row-two-head header-title">
                        <h1 className="main-title">Oh hey, I'm Tay.</h1>
                        <h1 className="main-title">Let's write some code.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
