import React, { useContext, useEffect } from 'react'

import { ArticleContext } from '../context/Articles'

import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import LoadingComponent from '../components/LoadingComponent';
import ShowCard from '../components/ShowCard';

function Articles() {
    const { articles, loading } = useContext(ArticleContext)
    const [page, setPage] = React.useState(1);
    const noOfItemsInPage = 6;

    useEffect(() => {
        scrollAutoFromBackToTop()
        return () => {}
    }, [page])

    const getPagination = () => {
        return (
            <div className="row">
                <Pagination page={page} setPage={setPage} count={
                    articles.length / noOfItemsInPage > 1 ? Math.floor(articles.length / noOfItemsInPage) : 0
                } />
            </div>
        );
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
                            {getPagination()}
                            <div className="row">
                                {
                                    <ShowCard
                                        page={page}
                                        noOfItemsInPage={noOfItemsInPage}
                                        allowOverallRate={true}
                                        cards={articles}
                                        path={'articles'}
                                    />
                                }
                            </div>
                            {getPagination()}
                        </div>
                }
            </div>
        </div>
    )
}

export default Articles
