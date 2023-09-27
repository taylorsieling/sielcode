import React from 'react'

function Projects() {
    return (
        <section id="projects">
            <div>
                <h3>FEATURED PROJECTS</h3>
            </div>
            <hr/>
        <div className="row" id="projects">
            <div className="row-four">
                <div className="card-header card-project">
                    <img className="card-img" src="https://i.imgur.com/Oc8U8Ft.jpg" alt="fasdfdf"/>
                    <h3>
                        {/* <a href="https://drive.google.com/file/d/10P0UGyJsalA9w-7sAhpJYvLcNU3GJE_K/view?usp=sharing" target="_blank" rel="noreferrer" className="card-link">Demo</a>
                        <br/>-<br/> */}
                        <a href="https://github.com/taylorsieling/foster-buddy" target="_blank" rel="noreferrer" className="card-link">Github</a>
                    </h3>
                </div>
                <div className="card-body">
                    <p><strong>Foster Buddy: </strong>A reimagined version of The Kitten Foster app, a management application for foster and rescue animals.</p>
                    <div className="mobile-links">
                        {/* <a href="https://drive.google.com/file/d/10P0UGyJsalA9w-7sAhpJYvLcNU3GJE_K/view?usp=sharing" target="_blank" rel="noreferrer" className="project-btn">Demo</a> */}
                        <a href="https://github.com/taylorsieling/foster-buddy" target="_blank" rel="noreferrer" className="project-btn">Github</a>
                    </div>
                </div>
            </div>
            
            <div className="row-four">
                <div className="card-header card-project">
                    <img className="card-img" src="https://i.imgur.com/0NkYzf2.jpg" alt="adfsdf"/>
                    <h3>
                        <a href="https://drive.google.com/file/d/10P0UGyJsalA9w-7sAhpJYvLcNU3GJE_K/view?usp=sharing" target="_blank" rel="noreferrer" className="card-link">Demo</a>
                        <br/>-<br/>
                        <a href="https://github.com/taylorsieling/knittin-kitten-foster" target="_blank" rel="noreferrer" className="card-link">Github</a>
                    </h3>
                </div>
                <div className="card-body">
                    <p><strong>The Kitten Foster: </strong>Record your kitten foster intake information. Update it as they grow.</p>
                    <div className="mobile-links">
                        <a href="https://drive.google.com/file/d/10P0UGyJsalA9w-7sAhpJYvLcNU3GJE_K/view?usp=sharing" target="_blank" rel="noreferrer" className="project-btn">Demo</a>
                        <a href="https://github.com/taylorsieling/knittin-kitten-foster" target="_blank" rel="noreferrer" className="project-btn">Github</a>
                    </div>
                </div>
            </div>
            <div className="row-four">
                <div className="card-header card-project">
                    <img className="card-img" src="https://images.unsplash.com/photo-1529340376075-067b25b3d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="fdasfas"/>
                    <h3>
                        <a href="https://drive.google.com/file/d/1ISBLu2TNM_MEnHWoUhA3URNPoH8fICII/view?usp=sharing" target="_blank" rel="noreferrer" className="card-link">Demo</a>
                        <br/>-<br/>
                        <a href="https://github.com/taylorsieling/plantd" target="_blank" rel="noreferrer" className="card-link">Github</a>
                    </h3>                
                </div>
                <div className="card-body">
                    <p><strong>Plantd: </strong>For the forgetful plant parent - Add your houseplants. Monitor their care.</p>
                    <div className="mobile-links">
                        <a href="https://drive.google.com/file/d/1ISBLu2TNM_MEnHWoUhA3URNPoH8fICII/view?usp=sharing"  target="_blank" rel="noreferrer" className="project-btn">Demo</a>
                        <a href="https://github.com/taylorsieling/plantd" target="_blank" rel="noreferrer" className="project-btn">Github</a>
                    </div>
                </div>
            </div>
            <div className="row-four">
                <div className="card-header card-project">
                    <img className="card-img" src="https://images.unsplash.com/photo-1559881231-1010b6f3a96a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="adfsdf"/>
                    <h3><a href="https://drive.google.com/file/d/1g1UAQz_gQ6L6wmuuAQpKCM9otyUqcwZX/view?usp=sharing" target="_blank" rel="noreferrer" className="card-link">Demo</a>
                        <br/>-<br/>
                        <a href="https://github.com/taylorsieling/penciled-in" target="_blank" rel="noreferrer" className="card-link">Github</a>
                    </h3>
                </div>
                <div className="card-body">
                    <p><strong>Penciled In: </strong>For event planners to advertise their events, and event goers to find them.</p>
                    <div className="mobile-links">
                        <a href="https://drive.google.com/file/d/1g1UAQz_gQ6L6wmuuAQpKCM9otyUqcwZX/view?usp=sharing" target="_blank" rel="noreferrer" className="project-btn">Demo</a>
                        <a href="https://github.com/taylorsieling/penciled-in" target="_blank" rel="noreferrer" className="project-btn">Github</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Projects;
