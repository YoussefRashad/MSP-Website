import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Logo from '../assets/images/MSP/essential/logo.png';
import SearchImg from '../assets/images/MSP/essential/iconfinder_search_172546.png';

import { UserContext } from '../context/User'
import Setting from './Setting'

function Header () {

    let active = useLocation().pathname;
    const history = useHistory()
    const { isUser } = React.useContext(UserContext)

    const headerItems = [
      {
        title: 'articles'
      },
      {
        title: 'workshops'
      },
      {
        title: 'events'
      },
      {
        title: 'forms'
      },
      {
        title: 'team'
      },
      {
        title: 'videos'
      }
    ]
    
    
  return (
    <div className="header navbar-expand-lg navbar-light">
      <Link className="logo text-decoration-none navbar-brand" to="/">
        <span className="msHome">
          <img
            src={Logo}
            alt=""
            height="40px"
            width="40px"
            style={{ marginRight: '20px' }}
          />
            MSP Egypt
          </span>
      </Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="header-right collapse navbar-collapse" id="navbarSupportedContent">
        {
          headerItems.map((item, index)=>{
              return (
                <Link
                  className={ (active.search('/'+item.title) === 0 ? 'active ' : '') +
                  'linkHome text-decoration-none text-capitalize'}
                  to={`/${item.title}`}
                  key={index}
                >
                  {`${item.title}`}
                </Link>
              );
          })
        }

        {
          !isUser ?
            <Link
              className={`${active === '/login' ? 'active' : ''
                } linkHome text-decoration-none text-capitalize`}
              to="/login"
            >
              login
            </Link>
          :
            <Setting />
        }
        
        <button id="searchIconWeb" className="link" onClick={() => history.push('/search')}>
          <img
            src={SearchImg}
            alt=""
            style={{ height: '30px', marginTop: '12px', marginLeft: '12px' }}
          />
        </button>
      </div>
    
    </div>
  );
    
}

export default Header;