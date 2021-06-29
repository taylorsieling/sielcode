import React, { useState, useEffect } from 'react'
import Blog from '../components/Blog'

function Blogs() {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const url = "https://dev.to/api/articles?username=taylorsieling"

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('fetching', data)
            setArticles(data)
        })
    }, [])

    return (
        <section id="blog">
            <div>
                <h3>RECENT BLOG POSTS</h3><hr/>
            </div>
            <div className="row">
                {(articles.map((article, i) => <Blog key={i} article={article}/>))}
            </div>
            <div>
                <h3>VIEW MORE ON DEV.TO <i class="fa fa-arrow-right" aria-hidden="true"></i></h3>
            </div>
        </section>
    )
}

export default Blogs;