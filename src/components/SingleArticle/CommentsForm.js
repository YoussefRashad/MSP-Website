import React, { useState, useEffect, useContext } from 'react'
import Alert from '../Alert';
import Rate from '../Rating/Rate'
import { ArticleContext } from '../../context/Articles'
import LoadingComponent from '../LoadingComponent';

import { UserContext } from '../../context/User'

const CommentsForm = ({ id }) => {
    const { alert, showAlert, hideAlert } = React.useContext(UserContext)

    const [userName, setUserName] = useState('')
    const [title, setTitle] = useState('')
    const [review, setReview] = useState('')
    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState(2); // for rating

    // loading
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800);
        return () => {}
    }, [])

    const { sumbitComment } = useContext(ArticleContext)

    const handleSubmit = e => {
        e.preventDefault();
        if (userName) {
            if (title) {
                if (review) {
                    const date = new Date().toUTCString().substr(0, 17)
                    sumbitComment({ 
                        name: userName, 
                        image: '', 
                        title, 
                        comment: review, 
                        rate: value, 
                        evaluate: 0, 
                        date, 
                        id 
                    }).then((res) => {
                        showAlert({ show: true, type: 'success', msg: 'You Sumbut your review successfully' });
                        setUserName(''); setTitle(''); setReview(''); setValue(2);
                    }).catch(error => {
                        console.log(error);
                        showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' });
                    })
                } else {
                    showAlert({ show: true, type: 'danger', msg: 'Enter a valid review' });
                }
            } else {
                showAlert({ show: true, type: 'danger', msg: 'Enter a valid title' });
            }
        } else {
            showAlert({ show: true, type: 'danger', msg: 'Enter a valid user name' });
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
                                    
                                    {/* <!-- userName --> */}
                                    <div className="form-group row">
                                        <label htmlFor="Email" className="col-sm-2 col-form-label">
                                            User Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="userName"
                                                placeholder="User Name"
                                                required
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                                autoFocus
                                            />
                                        </div>
                                    </div>
                                    
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
                                            <Rate value={value} setValue={setValue}/>
                                        </div>
                                    </div>

                                    {/* <!-- BUTTON --> */}
                                    <div className="col-md-12 ml-md-5">
                                        <div className="form-group row text-center">
                                            <div className="col-md-12 col-sm-10">
                                                <button type="submit" className="btn btn-lg btn-primary">
                                                    Add a comment
                                                </button>
                                            </div>
                                        </div>
                                    </div>

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
