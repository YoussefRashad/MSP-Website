import React, { useContext, useEffect } from 'react'

import { ArticleContext } from '../context/Articles'

import Breadcrumb from './Breadcrumb';
import LoadingComponent from './LoadingComponent';
import { scrollAutoFromBackToTop } from './ScrollButton';
import { GenerateCard as ShowFeatureCard } from './ShowCard';

function FeatureArticles() {

    useEffect(() => {
        scrollAutoFromBackToTop()
        return () => {}
    }, [])
    
    const { featureArticles, loading } = useContext(ArticleContext)
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">

                <Breadcrumb title="Articles" />
                {
                    loading ? <LoadingComponent />
                    :
                        featureArticles.length === 0 ? <h2>no articles to display</h2>
                    :
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
                }
            </div>
        </div>
    )
}

export default FeatureArticles
