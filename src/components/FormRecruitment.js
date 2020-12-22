import React from 'react';

const FormRecruitment = () => {
    return (
        <div>
            <ngb-alert
                _ngcontent-yxw-c6=""
                className="alert-card mb-4 alert alert-info alert-dismissible"
                role="alert"
                ng-reflect-type="info"
            >
                <strong _ngcontent-yxw-c6="" className="text-capitalize">Sorry!</strong>
                {' '}
            This form is closet, hope you best next time
            </ngb-alert>

            <div className="row">
                <div className="col-md-12 msContant">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-title mb-3">Welcome on the Board!</div>
                            <form>
                                {/* <!-- NAME --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formControlName="name"
                                        />
                                    </div>
                                </div>
                                {/* <!-- NAME VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                

                                {/* <!-- BUTTON --> */}
                                <div className="col-md-12">
                                    <div className="form-group row" id="msbutton">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormRecruitment;
