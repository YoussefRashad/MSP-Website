import React, { useState } from 'react';
import Alert from '../components/Alert';
import sumbitFeedback from '../Node/sumbitFeedback'

const Feedback = () => {

  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [feedback, setFeedback] = useState('')
  const [alert, setAlert] = useState({ show: false })

  const hideAlert = () => {
    setAlert({ ...alert, show: false })
  }

  const handleSubmit = e => {
    e.preventDefault ();
    sumbitFeedback({ email, title, description: feedback }).then((res)=>{
      setAlert({ show: true, type: 'success', desc: 'sent your feedback by successfully :)' });
      setEmail(''); setTitle(''); setFeedback('');
    }).catch(error =>{
      setAlert({ show: true, type: 'danger', desc: 'there is an error, please try later ..' });
    })
  };

  return (
    <div className="d-flex flex-column msContant">
      {alert.show && <Alert type={alert.type} desc={alert.desc} display={alert.show} hideAlert={hideAlert}/>}
      <div className="row" id="msdiv">
        <div className="col-md-10" id="msMainOuter">
          <h4 style={{fontSize: 'xx-large'}}>Feedback</h4>
          <p style={{fontSize: 'x-large'}}>
            Your opinion helps us to improve ..
          </p>
          <div className="card mb-5" id="msMainInner">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label htmlFor="Email" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e)=> setEmail(e.target.value) }
                    />
                  </div>
                </div>

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

                <div className="form-group row" id="msbutton">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
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

export default Feedback;
