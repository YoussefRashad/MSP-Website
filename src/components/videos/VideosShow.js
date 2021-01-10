import React, { useState, useEffect } from 'react'
import Breadcrumb from '../Breadcrumb'
import ShowCard from '../ShowCard';
import Pagination from '../Pagination'

const VideosShow = ({ videos }) => {
    const [page, setPage] = useState(1)
    const noOfItemsInPage = 6

    const getPagination = () => {
        return (
            <div className="row">
                <Pagination page={page} setPage={setPage} count={
                    videos.length / noOfItemsInPage > 1 ? Math.floor(videos.length / noOfItemsInPage) : 0
                } />
            </div>
        );
    }
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="">
                <Breadcrumb title="Videos" />
                <div>
                    {/* {getPagination()} */}
                    <div className="row">
                        {/*{
                             <ShowCard
                                page={page}
                                noOfItemsInPage={noOfItemsInPage}
                                allowOverallRate={true}
                                cards={articles}
                                path={'articles'}
                            /> 
                        }*/}
                        

                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EB_9bmDrK0k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <iframe width="560" height="315" src="https://drive.google.com/file/d/1j5vfnJDM2npSp_E_kV2gY0HFaMCP6SIH/preview" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        




                        {/* https://drive.google.com/file/d/1GpcfCOkHj5q2mMVRQhuccZJ_UeUh-OeU/view?usp=sharing */}
                        {/* https://drive.google.com/file/d/1GpcfCOkHj5q2mMVRQhuccZJ_UeUh-OeU/preview */}
                    </div>
                     {/* {getPagination()} */}
                </div>
            </div>
        </div>
    )
}

export default VideosShow
