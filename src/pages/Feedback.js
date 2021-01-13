import React, { useState } from 'react';

import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import { submitFeedback } from '../Node/submitForm'
import { UserContext } from '../context/User'
import { Link } from 'react-router-dom';

const Feedback = () => {
  const { showAlert, alert, user, isUser } = React.useContext(UserContext)

  const [title, setTitle] = useState('')
  const [feedback, setFeedback] = useState('')

  const isEmpty = !title || !feedback || alert.show
  
  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [])

  const handleSubmit = e => {
    e.preventDefault ();
      if (title){
        if (feedback){
          submitFeedback({ email: user.email, userName: user.userName ,title, description: feedback }).then((res) => {
            showAlert({ show: true, type: 'success', msg: 'You Send your feedback successfully' });
            setTitle(''); setFeedback('');
          }).catch(error => {
            showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' });
          })
        }else{
          showAlert({ show: true, type: 'danger', msg: 'Enter a valid feedback' });
        }
      }else{
        showAlert({ show: true, type: 'danger', msg: 'Enter a valid title' });
      }
  };

  return (
    <div className="d-flex flex-column msContant">
      <div className="row" id="msdiv">
        <div className="col-md-10" id="msMainOuter">
          <h4 style={{fontSize: 'xx-large'}}>Feedback</h4>
          <p style={{fontSize: 'x-large'}}>
            Your opinion helps us to improve ..
          </p>
          <div className="card mb-5 mt-3" id="msMainInner">
            <div className="card-body">
              <form onSubmit={handleSubmit}>

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
                      onChange={(e) => setTitle(e.target.value) }
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="textarea"
                    className="col-sm-2 col-form-label"
                    id="msLabel"
                  >
                    Feedback
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      name="textarea"
                      id="textarea"
                      className="form-control"
                      cols="30"
                      rows="10"
                      required
                      value={feedback}
                      onChange={(e)=> setFeedback(e.target.value) }
                    />
                  </div>
                </div>

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
                          <p className="form-empty">Please login first to send your feedback.</p>
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
                            Send the feedback
                          </button>
                        </div>
                      </div>
                    </div>
                    : ''
                }

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;