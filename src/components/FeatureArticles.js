import React, { useContext, useEffect } from 'react'

import { ArticleContext } from '../context/Articles'

import Breadcrumb from './Breadcrumb';
import LoadingComponent from './LoadingComponent';
import { scrollAutoFromBackToTop } from './ScrollButton';
import { GenerateCard as ShowFeatureCard } from './ShowCard';
import Pagination from './Pagination';

function FeatureArticles() {

    useEffect(() => {
        scrollAutoFromBackToTop()
        return () => {}
    }, [])
    
    const { featureArticles, loading } = useContext(ArticleContext)
    const [page, setPage] = React.useState(1)
    const noOfItemsInPage = 3;
    
    const getPagination = () => {
        return (
            <div className="row">
                <Pagination page={page} setPage={setPage} count={
                    featureArticles.length / noOfItemsInPage > 1 ? Math.floor(featureArticles.length / noOfItemsInPage) : 0
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
                        featureArticles.length === 0 ? <h2>no articles to display</h2>
                    :
                        <div>
                            <div className="row">
                                {
                                    featureArticles.map((item, index) => {
                                        return (
                                            <ShowFeatureCard 
                                                path={'articles'}
                                                id={item.id}
                                                image={item.img}
                                                title={item.title}
                                                overallRate={+item.overallRate}
                                                created={item.created}
                                                key={index}
                                            />
                                        );
                                    })
                                }
                            </div>
                            {getPagination()}
                        </div>
                }
            </div>
        </div>
    )
}

export default FeatureArticles
