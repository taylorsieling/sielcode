import React from 'react'
import headshot from '../images/headshot.png'

export default function Header() {
    return (
        <section id="header">
            <div className="header">
                <div className="row">
                    <div className="row-two header-one">
                        <h1 className="main-title">Hello World.<br/>I'm Taylor.</h1>
                    </div>
                    <div className="row-two">
                        <img className="headshot" src={headshot} alt="Taylor's Headshot"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
