import React from 'react'

function Projects() {
    return (
        <section id="projects">
            <div>
                <h3>FEATURED PROJECTS</h3>
            </div>
            <hr/>
        <div className="row" id="projects">
            <div className="row-three">
                <div className="card-header">
                    <img className="card-img" src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="fasdfdf"/>
                </div>
                <div className="card-body">
                    <p><strong>Swiftify: </strong>Rate every Taylor Swift song. View your stats. Compare with friends.</p>
                </div>
            </div>
            <div className="row-three">
                <div className="card-header">
                    <img className="card-img" src="https://images.unsplash.com/photo-1519831802596-6aadd85ff671?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="adfsdf"/>
                </div>
                <div className="card-body">
                    <p><strong>The Kitten Foster: </strong>Record your kitten foster intake information. Update it as they grow.</p>
                </div>
            </div>
            <div className="row-three">
                <div className="card-header">
                    <img className="card-img" src="https://images.unsplash.com/photo-1518626413694-515489e9af5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3BlcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="fdasfas"/>
                </div>
                <div className="card-body">
                    <p><strong>Plantd: </strong>For the forgetful plant parent - Add your houseplants. Monitor their care.</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Projects;