import React, { useState, useEffect} from 'react';
import CustomRepos from '../components/Github/CustomRepos';
import Member from '../components/Github/Member';
import Organiaztion from '../components/Github/Organiaztion';
import LoadingComponent from '../components/LoadingComponent';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';

import { getGithubOrgs, getGithubRepos, getGithubRepo, getGithubMember } from '../utils/Github'



const MemberWork = () => {

    const [githubOrgs, setGithubOrgs] = useState({})
    const [githubRepos, setGithubRepos] = useState([])
    const [customRepos, setCustomRepos] = useState([])
    const [githubMembers, setGithubMembers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        scrollAutoFromBackToTop()
        setLoading(true);

        getGithubOrgs().then(orgsResponse => {
            //console.log('Orgs >> ', response);
            setGithubOrgs(orgsResponse)
        }).then(()=>{
            getGithubRepos().then(reposResponse => {
                setGithubRepos(reposResponse)
                reposResponse.map(item => {
                    getGithubRepo(item.name).then(repoResponse => {
                        //console.log(repoResponse.parent);
                        setCustomRepos([...customRepos, repoResponse])
                    })
                })
            })
        }).then(()=>{
            getGithubMember().then(memberResponse => {
                //console.log('Member >> ', response);
                setGithubMembers(memberResponse)
                setLoading(false)
            })
        })

    }, [])

    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
            {
                loading ? <LoadingComponent /> :
                <div>
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
                            {console.log(customRepos.length)}
                            {console.log(customRepos)}
                            {
                                customRepos.map((item, index) => (
                                    <CustomRepos
                                        key={index}
                                        html_url={item.html_url}
                                        name={item.name}
                                        description={item.description}
                                        created_at={item.created_at}
                                        parent={item.parent}
                                    />
                                ))
                            }
                        </div>

                        <div className="col-lg-5" style={{ paddingLeft: "30px" }}>
                            <div className="row">
                                <h2 style={{ marginBottom: "15px" }}>MSP on Github</h2>
                            </div>

                            <Organiaztion
                                avatar_url={githubOrgs.avatar_url}
                                login={githubOrgs.login}
                                description={githubOrgs.description}
                                html_url={githubOrgs.html_url}
                            />

                            <div className="row" style={{ marginTop: "30px" }}>
                                <h3>People</h3>
                            </div>
                            <div className="row membersCard">
                                {
                                    githubMembers.map((item, index) => <Member html_url={item.html_url} avatar_url={item.avatar_url} key={index} />)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            }
            </div>
        </div>
    );
};

export default MemberWork;