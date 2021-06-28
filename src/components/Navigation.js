import React from 'react'

export default function Navigation() {
    return (
        <section id="navigation">
            <div className="topnav">
                <p>Taylor Sieling</p>
                <a href="#contact">Contact</a>
                <a href="#resume">Résumé</a>
                <a href="#blog">Blog</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars fa-2x"></i>
                </a>
            </div>
        </section>
    )
}
