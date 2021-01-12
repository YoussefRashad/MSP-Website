import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import LoadingComponent from '../components/LoadingComponent'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import Comments from '../components/Comments/Comments'
import ShowArticle from '../components/SingleArticle/ShowArticle'


import { ArticleContext } from '../context/Articles'
import { submitArticleComment } from '../Node/Articles'

function Article() {
    const { getArticleByID } = useContext(ArticleContext)
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])

    // get an article
    useEffect(() => {
        setLoading(true)
        const article = getArticleByID(id);
        setArticle(article)
        setComments(article.comments)
        setLoading(false)
        return () => { }
    }, []);

    // scroll up
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
                            <ShowArticle article={article}  />
                            <Comments 
                                id={article.id} 
                                comments={comments}
                                setComments={setComments}
                                submitComment={submitArticleComment}
                            />
                        </div>
                }
            </div>
        </div>
    )
}

export default Article