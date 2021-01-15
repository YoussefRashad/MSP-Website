import React, { useState, useEffect } from 'react'
import Rate from '../Rating/Rate'
import LoadingComponent from '../LoadingComponent';

import { UserContext } from '../../context/User'
import { Link } from 'react-router-dom';

const CommentsForm = ({ id, submitComment, setComments, comments }) => {
    const { showAlert, alert, user, isUser } = React.useContext(UserContext)

    const [title, setTitle] = useState('')
    const [review, setReview] = useState('')
    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState(2); // for rating

    const isEmpty = !title || !review || alert.show;

    // loading
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800);
        return () => { }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if (title) {
            if (review) {
                const date = new Date().toUTCString().substr(0, 17)
                submitComment({
                    name: user.userName,
                    email: user.email,
                    image: user.image,
                    title,
                    comment: review,
                    rate: value,
                    evaluate: 0,
                    date,
                    id
                }).then((res) => {
                    showAlert({ show: true, type: 'success', msg: 'You Sumbut your review successfully' });
                    setComments([
                        ...comments,
                        {
                            name: user.userName,
                            email: user.email,
                            image: user.image,
                            title,
                            comment: review,
                            rate: value,
                            evaluate: 0,
                            date
                        }
                    ])
                    setTitle(''); setReview(''); setValue(2);
                }).catch(error => {
                    showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' });
                })
            } else {
                showAlert({ show: true, type: 'danger', msg: 'Enter a valid review' });
            }
        } else {
            showAlert({ show: true, type: 'danger', msg: 'Enter a valid title' });
        }
    };

    return (
        <div className="d-flex flex-column msContant">
            <div className="row" id="msdiv">
                <div className="col-md-10" id="msMainOuter">
                    {
                        loading ? <LoadingComponent /> :

                            <div className="card mb-5 mt-3" id="msMainInner">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>

                                        {/* <!-- title --> */}
                                        <div className="form-group row">
                                            <label htmlFor="title" className="col-sm-2 col-form-label">
                                                Title
                                        </label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="title"
                                                    placeholder="Title"
                                                    required
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* <!-- Review --> */}
                                        <div className="form-group row">
                                            <label
                                                htmlFor="textarea"
                                                className="col-sm-2 col-form-label"
                                                id="msLabel"
                                            >
                                                Review
                                        </label>
                                            <div className="col-sm-10">
                                                <textarea
                                                    name="textarea"
                                                    id="textarea"
                                                    className="form-control"
                                                    cols="30"
                                                    rows="10"
                                                    required
                                                    value={review}
                                                    onChange={(e) => setReview(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* <!-- Rate --> */}
                                        <div className="row mt-3">
                                            <label htmlFor="title" className="col-sm-2 col-form-label">
                                                Rate
                                        </label>
                                            <div className="col-lg-2 col-md-3 col-sm-10">
                                                <Rate value={value} setValue={setValue} />
                                            </div>
                                        </div>

                                        {/* empty form text */}
                                        {
                                            isEmpty &&
                                            <div className="row">
                                                <div className="col-md form-group mb-3">
                                                    <p className="form-empty">Please fill out all form fields</p>
                                                </div>
                                            </div>
                                        }

                                        {/* <!-- BUTTON --> */}
                                        {
                                            !isEmpty ?
                                            !isUser ?  
                                            <div className="row">
                                                <div className="col-md form-group mb-3">
                                                    <p className="form-empty">Please login first to send your review.</p>
                                                    <p className="text-center text-20">
                                                        <Link to="/login">
                                                            Click here 
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            <div className="col-md-12 ml-md-5">
                                                <div className="form-group row text-center">
                                                    <div className="col-md-12 col-sm-10">
                                                        <button type="submit" className="btn btn-lg btn-primary">
                                                            Add a comment
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                            : ''
                                        }

                                    </form>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CommentsForm
