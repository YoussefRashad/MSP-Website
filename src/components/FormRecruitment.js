import React from 'react'

const FormRecruitment = () => {
    return (
        <div>
            <ngb-alert _ngcontent-yxw-c6="" className="alert-card mb-4 alert alert-info alert-dismissible" role="alert" ng-reflect-type="info">
                <strong _ngcontent-yxw-c6="" className="text-capitalize">Sorry!</strong> This form is closet, hope you best next time
            </ngb-alert>
        </div>
    )
}

export default FormRecruitment

/*



<div className="row" *ngIf="avaliable && !moduleLoading">
    <div className="col-md-12 msContant">
        <div className="card mb-4">
            <div className="card-body">
                <div className="card-title mb-3">Welcome on the Board!</div>
                <form [formGroup]="formBasic" (ngSubmit)="submit()">
                    <!-- NAME -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.name}}</label>
                            <input type="text" className="form-control" formControlName="name">
                        </div>
                    </div>

                    <!-- NAME VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.name.invalid && (formBasic.controls.name.dirty || formBasic.controls.name.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.name.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Email -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.email}}</label>
                            <input type="email" className="form-control" formControlName="email" (keyup)="checkEmail()">
                        </div>
                    </div>

                    <!-- EMAIL VLAIDATION-->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.email.invalid && (formBasic.controls.email.dirty || formBasic.controls.email.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.email.errors.required">
                                    This field is required.
                                </div>
                                <div *ngIf="formBasic.controls.email.errors.pattern">
                                    Please provide a valid email address.
                                </div>
                            </div>
                            <div *ngIf="emailCheck" className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div>
                                    This email is arleady Registered.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PHONE -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.phone}}</label>
                            <input type="text" className="form-control" formControlName="phone">
                        </div>
                    </div>

                    <!-- PHONE VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.phone.invalid && (formBasic.controls.phone.dirty || formBasic.controls.phone.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.phone.errors.required">
                                    This field is required.
                                </div>
                                <div>
                                    Please provide a valid Phone number
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- FACEBOOK -->
                    <div className="col-md form-group mb-3" style="padding-left: 0px;padding-right: 0px;">
                        <label for="firstName">{{questions.facebook}}</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">facebook.com/</span>
                            </div>
                            <input type="text" className="form-control" formControlName="facebook">
                        </div>
                    </div>

                    <!-- FACEBOOK VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.facebook.invalid && (formBasic.controls.facebook.dirty || formBasic.controls.facebook.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.facebook.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q1 -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.q1}}</label>
                            <textarea className="form-control" aria-label="With textarea" formControlName="q1"></textarea>
                        </div>
                    </div>

                    <!-- Q1 VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q1.invalid && (formBasic.controls.q1.dirty || formBasic.controls.q1.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q1.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q2 -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.q2}}</label>
                            <textarea className="form-control" aria-label="With textarea" formControlName="q2"></textarea>
                        </div>
                    </div>

                    <!-- Q2 VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q2.invalid && (formBasic.controls.q2.dirty || formBasic.controls.q2.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q2.errors.required">
                                    This field is required.
                                </div>
                                <div>
                                    This field must be more than 120 character
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q3 -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.q3}}</label>
                            <textarea className="form-control" aria-label="With textarea" formControlName="q3"></textarea>
                        </div>
                    </div>

                    <!-- Q3 VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q3.invalid && (formBasic.controls.q3.dirty || formBasic.controls.q3.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q3.errors.required">
                                    This field is required.
                                </div>
                                <div>
                                    This field must be more than 120 character
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q4 -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="picker1">{{questions.q4}}</label>
                            <select className="form-control" formControlName="q4">
                                <option *ngFor="let x of committee" value="{{x.id}}">{{x.name}}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Q4 VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q4.invalid && (formBasic.controls.q4.dirty || formBasic.controls.q4.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q4.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q5 -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="picker1">{{questions.q5}}</label>
                            <select className="form-control" formControlName="q5">
                                <option *ngFor="let x of committee" value="{{x.id}}">{{x.name}}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Q5 VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q5.invalid && (formBasic.controls.q5.dirty || formBasic.controls.q5.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q5.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q6 -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.q6}}</label>
                            <textarea className="form-control" aria-label="With textarea" formControlName="q6"></textarea>
                        </div>
                    </div>

                    <!-- Q6 VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q6.invalid && (formBasic.controls.q6.dirty || formBasic.controls.q6.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q6.errors.required">
                                    This field is required.
                                </div>
                                <div>
                                    This field must be more than 120 character
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q7 -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <label for="firstName">{{questions.q7}}</label>
                            <textarea className="form-control" aria-label="With textarea" formControlName="q7"></textarea>
                        </div>
                    </div>

                    <!-- Q7 VALIDATION -->
                    <div className="row">
                        <div className="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q7.invalid && (formBasic.controls.q7.dirty || formBasic.controls.q7.touched)"
                                className="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q7.errors.required">
                                    This field is required.
                                </div>
                                <div>
                                    This field must be more than 120 character
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BUTTON -->
                    <div className="col-md-12" *ngIf="(formBasic.valid && !emailCheck)">
                        <div className="form-group row" id="msbutton">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12" *ngIf="!(formBasic.valid && !emailCheck)">
                        <div className="form-group row" id="msbutton">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary" disabled>Send</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>


*/