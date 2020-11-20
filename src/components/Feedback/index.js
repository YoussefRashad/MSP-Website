import React from 'react'
import './style.css'

const FeedbackComponent = () => {
    return (
    <div className="row" id="msdiv">
      <div className="col-md-10" id="msMainOuter">
        <h4 style={{fontSize: 'xx-large'}}>Feedback</h4>
        <p style={{fontSize: 'x-large'}}>Your opinion helps us to improve...</p>
        <div className="card mb-5" id="msMainInner">
          <div className="card-body">
            <form>
              <div className="form-group row">
                <label
                  for="inputEmail3"
                  className="col-sm-2 col-form-label"
                  id="msLabel"
                >
                  Tittle
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Main Idea..."
                    formControlName="tittle"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputPassword3"
                  className="col-sm-2 col-form-label"
                  id="msLabel"
                >
                  Feedback
                </label>
                <div className="col-sm-10">
                  <textarea
                    name=""
                    className="form-control"
                    cols="30"
                    rows="10"
                    formControlName="feedback"
                  ></textarea>
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
    );
};

export default FeedbackComponent
/*
<ng-template #modalSmall let-modal>
    <div className="modal-header">
        <h4 className="modal-title" id="modal-basic-title">MSP</h4>
        <button type="button" className="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div className="modal-body">
        <p>{{mess}}</p>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-outline-dark btn-rounded" (click)="modal.close('ok')">Ok</button>
    </div>
</ng-template>

*/