import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import SearchImg from '../assets/images/iconfinder_search_172546.png';

function Header () {
    let active = useLocation().pathname;
    const history = useHistory()
    
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
            className={`${active === '/articles' ? 'active' : ''
            } linkHome text-decoration-none`}
            to="/articles"
          >
            Articles
          </Link>
          {/* <Link
            className={`${active === '/forms' ? 'active' : ''
            } linkHome text-decoration-none`}
            to="/forms"
          >
            Forms
          </Link> */}
          {/* <Link
            className={`${active === '/videos' ? 'active' : ''
            } linkHome text-decoration-none`}
            to="/videos"
          >
            Videos
          </Link> */}
          {/* <Link
            className={`${active === '/topic' ? 'active' : ''
              } linkHome text-decoration-none`}
            to="/topic"
          >
            Topics
          </Link> */}
          <Link
            className={`${active === '/workshops' ? 'active' : ''
              } linkHome text-decoration-none`}
            to="/workshops"
          >
            Workshops
          </Link>
          <Link
            className={`${active === '/events' ? 'active' : ''
              } linkHome text-decoration-none`}
            to="/events"
          >
            Events
          </Link>
          <Link
            className={`${active === '/team' ? 'active' : ''
              } linkHome text-decoration-none`}
            to="/team"
          >
            Team
          </Link>
          <button id="searchIconWeb" className="link" onClick={()=>history.push('/search')}>
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