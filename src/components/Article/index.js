import React from 'react'
import Img from '../../assets/images/products/speaker-1.jpg'

function Article() {
    return (
        <div className="msMain">

            <div className="card user-profile o-hidden mb-4">
                <div>
                    <img src={Img} style={{width: "100%"}} alt="" />
                </div>
                <div className="user-info">
                    <p className="m-0 text-24" style={{ paddingTop: "30px" }}></p>
                    <p className="text-muted m-0" style={{ paddingTop: "30px" }}></p>
                </div>
                <div className="card-body">
                    <div>
                        <h2 style={{ fontSize: "40px", fontFamily: "Cairo, sans-serif"}} className="text-center">
                            article.header</h2>
                        <div className="msPar" >

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4 col-6" style={{fontSize: "x-large"}}>
                                <div className="mb-4">
                                    <p className="text-primary mb-1"><i className="i-Calendar text-16 mr-1"></i>Date</p>
                                    <span>article.date</span>
                                </div>
                                <div className="mb-4">
                                    <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-1"></i>Author</p>
                                    <span>article.author</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Article

/*

*/