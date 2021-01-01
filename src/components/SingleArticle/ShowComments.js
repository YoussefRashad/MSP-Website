import React from 'react'
import Rate from './Rate'
import Evaluating from './Evaluating'

const ShowComments = () => {
    return (
        <div className="card user-profile o-hidden mb-4">
            <div className="user-info">
                <p className="m-0 text-24" style={{ paddingTop: "30px" }}></p>
                <p className="text-muted m-0" style={{ paddingTop: "30px" }}></p>
            </div>
            <div className="card-body">
                <div>

                    <div className="row ml-4">
                        <div className="mb-4 col-lg-10 col-md-9 col-12">
                            <p className="text-primary mb-1 text-22"><i className="i-MaleFemale text-16 mr-1"></i>Youssef Rashad</p>
                            <p className="text-primary mb-1 text-20"><i className="i-Speach-Bubble-6 text-16 mr-1"></i>Title</p>
                            <span className="text-18">{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic cumque sunt quaerat sequi amet aperiam, dolorem quis ullam, deleniti vel fugit quidem libero expedita dolore, assumenda temporibus alias minus id! Ratione eaque provident ipsam itaque possimus enim! Eaque ea provident vero expedita quibusdam dolorum quas saepe ipsum, repellendus natus, ullam mollitia, distinctio nihil incidunt deleniti placeat eligendi enim inventore!'}</span>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12">
                            <Rate title="Rate" readOnly="true" />
                        </div>

                        <div className="mb-4 col-lg-10 col-md-9 col-12">
                            <span className="text-primary text-22"><i className="i-Calendar text-16 mr-1"></i>Date
                            </span>
                            <span className="text-18">{' Sat, 12 Dec 2020'}</span>
                        </div>
                        {/* <div className="col-lg-2 col-md-3 col-12">
                            <Evaluating title="Evaluate" />
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowComments