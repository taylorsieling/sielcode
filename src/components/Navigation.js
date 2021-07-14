import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

function Navigation() {

    const [navbar, setnavbar] = useState(false);
    const [mobile, setMobile] = useState(false);

    const handleToggle = () => setnavbar(!navbar);
    const closeMobile = () => setMobile(false);

    return (
        <section id="navigation">

            <div className="navbar">
                <div className="nav-name">
                    <p>Taylor Sieling</p>
                </div>
                <div className="nav-links">
                    <ul className={navbar ? "nav-options active" : "nav-options"}>
                        <li className="option" onClick={closeMobile}>
                            <a href="#about">About</a>
                        </li>
                        <li className="option" onClick={closeMobile}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="option" onClick={closeMobile}>
                            <a href="#resume">Résumé</a>
                        </li>
                        <li className="option" onClick={closeMobile}>
                            <a href="#blog">Blog</a>
                        </li>
                        <li className="option" onClick={closeMobile}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mobile-menu" onClick={handleToggle}>
                    {navbar ? (
                    <i class="fas fa-bars fa-2x"></i>
                    ) : (
                    <i class="fas fa-times fa-2x"></i>
                    )}
                </div>

        </section>
    )
}

export default Navigation;
