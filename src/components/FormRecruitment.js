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

                                {/* <!-- Email --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            formControlName="email"
                                        />
                                    </div>
                                </div>
                                {/* <!-- EMAIL VLAIDATION--> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                Please provide a valid email address.
                                            </div>
                                        </div>
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This email is arleady Registered.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- PHONE --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formControlName="phone"
                                        />
                                    </div>
                                </div>

                                {/* <!-- PHONE VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                Please provide a valid Phone number
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- FACEBOOK --> */}
                                <div
                                    className="col-md form-group mb-3"
                                    style={{ paddingLeft: '0px', paddingRight: '0px' }}
                                >
                                    <label for="firstName">questions.facebook</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">
                                                facebook.com/
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            formControlName="facebook"
                                        />
                                    </div>
                                </div>

                                {/* <!-- FACEBOOK VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Q1 --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.q1</label>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            formControlName="q1"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Q1 VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Q2 --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.q2</label>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            formControlName="q2"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Q2 VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                This field must be more than 120 character
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Q3 --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.q3</label>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            formControlName="q3"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Q3 VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                This field must be more than 120 character
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Q4 --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.q4</label>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            formControlName="q4"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Q4 VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                This field must be more than 120 character
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Q5 --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.q5</label>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            formControlName="q5"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Q5 VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                This field must be more than 120 character
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Q6 --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.q6</label>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            formControlName="q6"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Q6 VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                This field must be more than 120 character
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Q7 --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <label for="firstName">questions.q7</label>
                                        <textarea
                                            className="form-control"
                                            aria-label="With textarea"
                                            formControlName="q7"
                                        />
                                    </div>
                                </div>

                                {/* <!-- Q7 VALIDATION --> */}
                                <div className="row">
                                    <div className="col-md form-group mb-3">
                                        <div className="alert-card mb-4 alert alert-danger alert-dismissible">
                                            <div>
                                                This field is required.
                                            </div>
                                            <div>
                                                This field must be more than 120 character
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

                                <div className="col-md-12">
                                    <div className="form-group row" id="msbutton">
                                        <div className="col-sm-10">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled
                                            >
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
