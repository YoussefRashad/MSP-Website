import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ArticleContext } from '../context/Articles'

import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';

function Articles() {

    useEffect(() => {
        scrollAutoFromBackToTop()
        return () => {}
    }, [])
    
    const { articles, featureArticles, loading } = useContext(ArticleContext)

    const showData = articles.map((item, index) => {
        return (
            <div className="col-md-4 col-12" key={index}>
                <Link to={`/articles/${item.idArticle}`} className="list-item" style={{ cursor: "pointer" }}>
                    <div className="card o-hidden mb-4 d-flex">
                        <div className="list-thumb d-flex">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="flex-grow-1">
                            <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                                <div className="w-80 w-sm-100">
                                    <div className="item-title" style={{ fontSize: 'large' }}>
                                        {item.title}
                                    </div>
                                </div>
                                <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                                <p className="m-0 text-muted text-small w-15 w-sm-100">
                                    {item.created}
                                </p>
                                <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">

                <Breadcrumb title="Articles" />
                {
                    loading ? <h2>loading ...</h2> 
                    :
                    articles.length === 0 ? <h2>no articles to display</h2>
                    :
                        <div>
                            <div className="row">
                                    <Pagination />
                            </div>
                            <div className="row">
                                {showData}
                            </div>
                            <div className="row">
                                    <Pagination />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Articles
