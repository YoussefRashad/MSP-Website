import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ArticleContext } from '../context/Articles'

import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import LoadingComponent from '../components/LoadingComponent';

function Articles() {
    const { articles, loading } = useContext(ArticleContext)
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        scrollAutoFromBackToTop()
        return () => {}
    }, [page])

    const showData = ()=>{
        let start = (page - 1) * 6;
        let returnedData = [];

        for (let iter = start; iter < articles.length && iter < start+6; iter++){
            returnedData.push(
            <div className="col-md-4 col-12 shadowItemWithoutBox" key={iter}>
                <Link to={`/articles/${articles[iter].idArticle}`} className="list-item" style={{ cursor: "pointer" }}>
                    <div className="card o-hidden mb-4 d-flex">
                        <div className="list-thumb d-flex">
                            <img src={`${articles[iter].img}`} alt={articles[iter].title} />
                        </div>
                        <div className="flex-grow-1">
                            <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                                <div className="w-80 w-sm-100">
                                    <div className="item-title text-center" style={{ fontSize: 'large' }}>
                                        {articles[iter].title}
                                    </div>
                                </div>
                                <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                                <p className="m-0 text-muted text-small w-15 w-sm-100">
                                    {articles[iter].created}
                                </p>
                                <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>)
        }
        return returnedData;
    }    
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">

                <Breadcrumb title="Articles" />
                {
                    loading ? <LoadingComponent /> 
                    :
                    articles.length === 0 ? <h2>no articles to display</h2>
                    :
                        <div>
                            <div className="row">
                                <Pagination page={page} setPage={setPage} count={
                                    articles.length/6 > 1 ? Math.floor(articles.length/6) : 0
                                } />
                            </div>
                            <div className="row">
                                {showData()}
                            </div>
                            <div className="row">
                                    <Pagination page={page} setPage={setPage} count={
                                        articles.length/6 > 1 ? Math.floor(articles.length/6) : 0
                                    } />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Articles
