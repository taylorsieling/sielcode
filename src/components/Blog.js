import React from 'react'

function Blog(props) {

    const article = props.article

    return (
        <div id={article.id} className="row-four">
            <a className="hvr-grow" href={article.url}>
            <div className="card-header">
                <img className="card-img" src={article.social_image}/>
            </div>
            <div className="card-body card-art">
                <p className="posted">{article.readable_publish_date}</p>
                <h4>{article.title}</h4>
            </div>
            <div className="card-footer">
                <p className="posted">Read Time: {article.reading_time_minutes} mins</p>
            </div>
            </a>
        </div>
    )
}

export default Blog;
