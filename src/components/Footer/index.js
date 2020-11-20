import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'

function Footer() {
    return (
    <div className="app-footer msMain">
        <div className="row">
        <div className="col-md-9">
            <p>
                <strong>MSP - Microsoft Student Partner </strong>
            </p>
            <p>
                Microsoft Student Tech Club at Helwan University is a student
                community program that promotes advanced technology through
                education, practice, and innovation. It also provides students with
                both technical and non-technical sessions needed which is packing
                their lives with high level of skills and supporting their careers
                with opportunities.
            </p>
        </div>
        </div>
        <div className="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
            <a
                className="btn btn-primary text-white btn-rounded mb-3 mb-sm-0 mr-0 mr-sm-3"
                href="mailto: MSP-2020@outlook.com"
                rel="noopener noreferrer"
            >
                Contact US
            </a>
            <Link
                className="btn btn-danger btn-rounded mb-3 mb-sm-0"
                to="/feedback"
                rel="noopener noreferrer"
            >
                Feedback
            </Link>

            <span className="flex-grow-1"></span>
            <Link to="/" className="d-flex align-items-center">
                <img
                    className="logo"
                    src={Logo}
                    style={{widht: '50px', height: '50px'}}
                    alt=""
                />
                <div>
                    <p className="m-0">&copy; 2020 MSP</p>
                    <p className="m-0">All rights reserved</p>
                </div>
            </Link>
        </div>
    </div>
    );
}

export default Footer;
