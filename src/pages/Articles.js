import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { ArticleContext } from '../context/Articles'

import Breadcrumb from '../components/Breadcrumb';

function Articles() {

    const { articles, loading } = useContext(ArticleContext)
    console.log(articles);
    const showData = articles.map((item, index) => {
        return (
            <div className="col-4" key={index}>
                <Link to={`/articles/${item.idArticle}`} className="list-item" style={{ cursor: "pointer" }}>
                    <div className="card o-hidden mb-4 d-flex">
                        <div className="list-thumb d-flex">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="flex-grow-1">
                            <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                                <div className="w-40 w-sm-100">
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
                    <div className="row">
                        {showData}
                        <div className="col-md-12 mt-3">
                            pagination-controls
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Articles
