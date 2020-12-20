import React, { useContext } from 'react'
import { TeamContext } from '../context/Teams'

import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import Pagination from '../components/Pagination';
import LoadingComponent from '../components/LoadingComponent';

const Team = () => {
    const { teams, loading } = useContext(TeamContext)
    const [page, setPage] = React.useState(1);

    const showData = teams.map((item, index) => {
        return (
            <div className="col-md-4 col-12 shadowItemWithoutBox" key={index}>
                <div className="card bg-dark text-white o-hidden mb-4 msCard">
                    <img className="card-img msImage" src={item.img} alt="CardImage" />

                    <div className="card-img-overlay msTextTeam">
                        <div className="text-center pt-4">
                            <h5 className="card-title mb-2 text-white">{item.name}</h5>
                            <div className="separator border-top mb-2" />
                            <p className="text-small font-italic">{item.word}</p>
                        </div>
                        <div className="p-1 text-left card-footer font-weight-light d-flex">
                            <span className="mr-3 d-flex align-items-center">
                                <i className="i-Calendar-4 mr-2" /> Season {item.season}{' '}
                            </span>
                            <span className="d-flex align-items-center">
                                <i className="i-Speach-Bubble-6 mr-1" />{item.position}
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        );
    })

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">

                <Breadcrumb title="Team" />

                {
                    loading ? <LoadingComponent />
                    :
                        teams.length === 0 ? <h2>no teams to display</h2>
                    :
                        <div>
                            <div className="row">
                                <Pagination page={page} setPage={setPage} count={
                                    teams.length/6 > 1 ? Math.floor(teams.length/6) : 0
                                } />
                            </div>
                            <div className="row">
                                {showData}
                            </div>
                            <div className="row">
                                <Pagination page={page} setPage={setPage} count={
                                    teams.length/6 > 1 ? Math.floor(teams.length/6) : 0
                                } />
                            </div>
                        </div>
                }

            </div>
        </div>
    );
}

export default Team