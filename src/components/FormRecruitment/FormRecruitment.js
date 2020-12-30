import React, { useState, useEffect } from 'react';

import LoadingComponent from '../LoadingComponent';
import FormInputs from './FormInputs';

const FormRecruitment = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    
    // loading
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])
    
    if(loading){
        return <LoadingComponent />
    }

    return (
        <main className="row">
            <div className="col-md-12 msContant">
                <div className="card mb-4">
                    <div className="card-body">
                        {
                            !isOpen ? 
                            
                                <div className="card-title mb-3">
                                    <strong className="text-capitalize">Sorry!</strong>
                                    {' '}
                                    This form is closet, hope you best next time.
                                </div>
                            :
                        
                                <div>
                                    <div className="card-title mb-3">Welcome on the Board!</div>
                                    <FormInputs />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FormRecruitment;