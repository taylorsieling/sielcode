import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

function Navigation() {

    const [isOpen, setOpen] = useState(false)

    const getClassName = () => {
        if (isOpen)
            return "topnav"
        else
            return "topnav responsive"
    }

    return (
        <section id="navigation">
            <div className={getClassName()} id="myTopnav">
                <p>Taylor Sieling</p>
                <a href="#contact">Contact</a>
                <a href="#resume">Résumé</a>
                <a href="#blog">Blog</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#navigation" class="icon"><Hamburger size={20} toggled={isOpen} toggle={setOpen} /></a>  
            </div>
        </section>
    )
}

export default Navigation;
