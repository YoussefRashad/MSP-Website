import React, { useEffect } from 'react'
import { VideosContext } from '../../context/Videos'

import Breadcrumb from '../Breadcrumb'
import ShowCard from '../ShowCard';
import Pagination from '../Pagination'

const VideosShow = ({ page, setPage, noOfItemsInPage }) => {

    const { selectedVideos, setCommitteesVideos } = React.useContext(VideosContext)


    useEffect(() => {
        setCommitteesVideos('preparation')
    }, [])

    const getPagination = () => {
        
        return (
            <div className="row">
                <Pagination page={page} setPage={setPage} count={
                    selectedVideos.length / noOfItemsInPage > 1 ? Math.floor(selectedVideos.length / noOfItemsInPage) : 0
                } />
            </div>
        );
    }

    return (
        <div className="d-flex flex-column msContant">
            <div className="">
                <Breadcrumb title="Videos" />
                <div>
                    {getPagination()}
                    <div className="row">
                        {
                            <ShowCard
                                page={page}
                                noOfItemsInPage={noOfItemsInPage}
                                allowOverallRate={true}
                                cards={selectedVideos}
                                path={'videos'}
                            /> 
                        }
                        
                    </div>
                    {getPagination()}
                </div>
            </div>
        </div>
    )
}

export default VideosShow