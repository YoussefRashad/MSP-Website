import React from 'react'
import './style.css'

const FormRecruitment = () => {
    return (
        <div>
            
        </div>
    )
}

export default FormRecruitment

/*

<div class="module-loader" *ngIf="moduleLoading">
    <div class="spinner spinner-bubble spinner-bubble-primary mr-3"></div>
</div>

<ngb-alert *ngIf="!avaliable && !moduleLoading" _ngcontent-yxw-c6="" class="alert-card mb-4 alert alert-info alert-dismissible"
    role="alert" ng-reflect-type="info">
    <strong _ngcontent-yxw-c6="" class="text-capitalize">Sorry!</strong> This form is closet, hope you best next time
</ngb-alert>

<div class="row" *ngIf="avaliable && !moduleLoading">
    <div class="col-md-12 msContant">
        <div class="card mb-4">
            <div class="card-body">
                <div class="card-title mb-3">Welcome on the Board!</div>
                <form [formGroup]="formBasic" (ngSubmit)="submit()">
                    <!-- NAME -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.name}}</label>
                            <input type="text" class="form-control" formControlName="name">
                        </div>
                    </div>

                    <!-- NAME VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.name.invalid && (formBasic.controls.name.dirty || formBasic.controls.name.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.name.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.email}}</label>
                            <input type="email" class="form-control" formControlName="email" (keyup)="checkEmail()">
                        </div>
                    </div>

                    <!-- EMAIL VLAIDATION-->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.email.invalid && (formBasic.controls.email.dirty || formBasic.controls.email.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.email.errors.required">
                                    This field is required.
                                </div>
                                <div *ngIf="formBasic.controls.email.errors.pattern">
                                    Please provide a valid email address.
                                </div>
                            </div>
                            <div *ngIf="emailCheck" class="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div>
                                    This email is arleady Registered.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PHONE -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.phone}}</label>
                            <input type="text" class="form-control" formControlName="phone">
                        </div>
                    </div>

                    <!-- PHONE VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.phone.invalid && (formBasic.controls.phone.dirty || formBasic.controls.phone.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
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
                    <div class="col-md form-group mb-3" style="padding-left: 0px;padding-right: 0px;">
                        <label for="firstName">{{questions.facebook}}</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">facebook.com/</span>
                            </div>
                            <input type="text" class="form-control" formControlName="facebook">
                        </div>
                    </div>

                    <!-- FACEBOOK VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.facebook.invalid && (formBasic.controls.facebook.dirty || formBasic.controls.facebook.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.facebook.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q1 -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.q1}}</label>
                            <textarea class="form-control" aria-label="With textarea" formControlName="q1"></textarea>
                        </div>
                    </div>

                    <!-- Q1 VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q1.invalid && (formBasic.controls.q1.dirty || formBasic.controls.q1.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q1.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q2 -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.q2}}</label>
                            <textarea class="form-control" aria-label="With textarea" formControlName="q2"></textarea>
                        </div>
                    </div>

                    <!-- Q2 VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q2.invalid && (formBasic.controls.q2.dirty || formBasic.controls.q2.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
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
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.q3}}</label>
                            <textarea class="form-control" aria-label="With textarea" formControlName="q3"></textarea>
                        </div>
                    </div>

                    <!-- Q3 VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q3.invalid && (formBasic.controls.q3.dirty || formBasic.controls.q3.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
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
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="picker1">{{questions.q4}}</label>
                            <select class="form-control" formControlName="q4">
                                <option *ngFor="let x of committee" value="{{x.id}}">{{x.name}}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Q4 VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q4.invalid && (formBasic.controls.q4.dirty || formBasic.controls.q4.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q4.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q5 -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="picker1">{{questions.q5}}</label>
                            <select class="form-control" formControlName="q5">
                                <option *ngFor="let x of committee" value="{{x.id}}">{{x.name}}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Q5 VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q5.invalid && (formBasic.controls.q5.dirty || formBasic.controls.q5.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
                                <div *ngIf="formBasic.controls.q5.errors.required">
                                    This field is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Q6 -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.q6}}</label>
                            <textarea class="form-control" aria-label="With textarea" formControlName="q6"></textarea>
                        </div>
                    </div>

                    <!-- Q6 VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q6.invalid && (formBasic.controls.q6.dirty || formBasic.controls.q6.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
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
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <label for="firstName">{{questions.q7}}</label>
                            <textarea class="form-control" aria-label="With textarea" formControlName="q7"></textarea>
                        </div>
                    </div>

                    <!-- Q7 VALIDATION -->
                    <div class="row">
                        <div class="col-md form-group mb-3">
                            <div *ngIf="formBasic.controls.q7.invalid && (formBasic.controls.q7.dirty || formBasic.controls.q7.touched)"
                                class="alert-card mb-4 alert alert-danger alert-dismissible">
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
                    <div class="col-md-12" *ngIf="(formBasic.valid && !emailCheck)">
                        <div class="form-group row" id="msbutton">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12" *ngIf="!(formBasic.valid && !emailCheck)">
                        <div class="form-group row" id="msbutton">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary" disabled>Send</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>


*/