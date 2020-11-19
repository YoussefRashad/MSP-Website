import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/images/logo.png';
import SearchImg from '../../assets/images/iconfinder_search_172546.png';

function Header () {
    let active = useLocation().pathname.replace('/', '');
    
    return (
      <div className="header">
        <Link className="logo text-decoration-none" to="/">
          <span className="msHome">
            <img
              src={Logo}
              alt=""
              height="40px"
              width="40px"
              style={{marginRight: '20px'}}
            />
            MSP Helwan
          </span>
        </Link>

        <div className="header-right">
          <Link
            className={`linkHome text-decoration-none ${active === 'articles' ? 'active' : ''
            }`}
            to="/articles"
          >
            Articles
          </Link>
          <Link
            className={`linkHome text-decoration-none ${active === 'forms' ? 'active' : ''
            }`}
            to="/forms"
          >
            Forms
          </Link>
          <Link
            className={`linkHome text-decoration-none ${active === 'video' ? 'active' : ''
            }`}
            to="/video"
          >
            Videos
          </Link>
          <Link
            className={`linkHome text-decoration-none ${active === 'topic' ? 'active' : ''
            }`}
            to="/topic"
          >
            Topics
          </Link>
          <Link
            className={`linkHome text-decoration-none ${active === 'about' ? 'active' : ''
            }`}
            to="/about"
          >
            About
          </Link>
          <button id="searchIconWeb" className="link">
            <img
              src={SearchImg}
              alt=""
              style={{height: '30px', marginTop: '12px', marginLeft: '12px'}}
            />
          </button>
        </div>
      </div>
    );
}

export default Header;
