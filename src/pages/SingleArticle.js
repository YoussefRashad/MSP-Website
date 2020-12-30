import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import LoadingComponent from '../components/LoadingComponent'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import { FE_URL } from '../utils/URL'

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
    
    const showInfo = ()=>{
        return(

            <div className="card user-profile o-hidden mb-4">
                <div>
                    <img src={`${FE_URL}/${article.img}`} style={{ width: "100%" }} alt="" />
                </div>
                <div className="user-info">
                    <p className="m-0 text-24" style={{ paddingTop: "30px" }}></p>
                    <p className="text-muted m-0" style={{ paddingTop: "30px" }}></p>
                </div>
                <div className="card-body">
                    <div>
                        <h2 style={{ fontSize: "40px", fontFamily: "Cairo, sans-serif" }} className="text-center">
                            {article.title}</h2>
                        <div className="msPar" >
                            {article.description}
                        </div>
                        <hr />
                        <div className="row ml-4">
                            <div style={{ fontSize: "x-large" }}>
                                <div className="mb-4">
                                    <p className="text-primary mb-1"><i className="i-Calendar text-16 mr-1"></i>Date</p>
                                    <span>{article.created}</span>
                                </div>
                                <div className="mb-4">
                                    <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-1"></i>Author</p>
                                    <span>{article.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                {
                        loading ? <LoadingComponent />
                    :
                        !article ? <h2 className="section-title">no article to display</h2>
                    :
                        showInfo()
                }
            </div>
        </div>
    )
}

export default Article