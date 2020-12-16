import React from 'react';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';

const MemberWork = () => {
    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                <div
                    className="row"
                    style={{
                        margin: '0px',
                        marginBottom: '13px',
                    }}
                >
                    <h1>Our Github</h1>
                </div>

                <div className="row">
                    <div className="col-lg-7" style={{ paddingRight: '40px' }}>
                        <div className="repoCard">
                            {/* <!-- item.name <br />
                                item.html_url <br />
                                item.description <br />
                                item.created_at <br />
                                forked from item.parent.full_name   // name <br />
                                item.parent.owner.html_url   // link of the owner <br />
                                item.parent.owner.avatar_url   // pic of the owner <br /> --> */}
                            <h2>
                                <a href="/" target="_blank">
                                    item.name{' '}
                                </a>
                            </h2>
                            <p className="repoCardPara">
                                forked from{' '}
                                <a href="/" target="_blank">
                                    item.parent.full_name
                </a>
                            </p>
                            <p className="repoCardPara">item.description</p>
                            <br />
                            <p className="repoCardPara text-right">item.created_at | date</p>
                            <hr />
                        </div>
                    </div>
                    <div className="col-lg-5" style={{ paddingLeft: "30px"}}>
                        <div className="row">
                            <h2 style={{ marginBottom: "15px" }}>MSP on Github</h2>
                        </div>
                        <div className="row">
                            <img src="/" alt="" style={{width: "70px"}} />
                            <div
                                className="col"
                                style={{
                                    marginTop: 'auto',
                                    marginBottom: 'auto',
                                    marginLeft: '20px',
                                }}
                            >
                                <h3>orgs.login</h3>
                            </div>
                        </div>
                        <div className="row">
                            <img
                                src="/"
                                alt=""
                                style={{
                                    borderRadius: '50%',
                                    width: '70px',
                                    visibility: 'hidden',
                                }}
                            />
                            <div
                                className="col"
                                style={{
                                    marginTop: 'auto',
                                    marginBottom: 'auto',
                                    marginLeft: '20px',
                                }}
                            >
                                <p>orgs.description</p>
                                <p>
                                    <a href="/" target="_blank">
                                        open on Github
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "30px" }}>
                            <h3>People</h3>
                        </div>
                        <div className="row membersCard">
                            <a href="/" target="_blank" className="memberLink">
                                <img src="x.avatar_url" alt="" className="memberLinkImg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberWork;
