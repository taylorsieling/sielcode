import React, { useState } from 'react'

function Navigation() {

    const [navbar, setNavbar] = useState(false);
    const handleToggle = () => setNavbar(!navbar);
    const closeMobile = () => setNavbar(false);

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
                <div className="mobile-menu menu-icon" onClick={handleToggle}>
                    {navbar ? (
                    <i className="fas fa-times fa-2x"></i>
                    ) : (
                    <i className="fas fa-bars fa-2x"></i>
                    )}
                </div>
            </div>

            

        </section>
    )
}

export default Navigation;
