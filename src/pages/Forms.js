import React from 'react'
import FormRecruitment from '../components/FormRecruitment'
import FormEvent from '../components/FormEvent'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'

function Forms() {

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                <div className="breadcrumb">
                    <h1 style={{fontSize: "xx-large"}}>Forms</h1>
                </div>

                <div className="separator-breadcrumb border-top"></div>

                <div className="card-body msContant">
                    <ngb-tabset className="nav-center">
                        <ngb-tab title="Recruitmen">
                            <ng-template ngbTabContent>
                                <FormRecruitment />
                            </ng-template>
                        </ngb-tab>
                        <ngb-tab title="Event">
                            <ng-template ngbTabContent>
                                <FormEvent />
                            </ng-template>
                        </ngb-tab>
                    </ngb-tabset>
                </div>
            </div>
        </div>
    )
}

export default Forms
