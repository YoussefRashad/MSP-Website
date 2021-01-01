import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import LoadingComponent from '../components/LoadingComponent'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import Comments from '../components/SingleArticle/Comments'
import ShowArticle from '../components/SingleArticle/ShowArticle'


import { ArticleContext } from '../context/Articles'

function Article() {
    const { getArticleByID } = useContext(ArticleContext)
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const article = getArticleByID(id);
        setArticle(article)
        setLoading(false)
    });
    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])

    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                {
                        loading ? <LoadingComponent />
                    :
                        !article ? <h2 className="section-title">no article to display</h2>
                    :
                        <div>
                            <ShowArticle article={article} />
                            <Comments />
                        </div>
                }
            </div>
        </div>
    )
}

export default Article