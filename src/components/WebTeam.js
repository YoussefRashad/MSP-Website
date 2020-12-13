import React from 'react';

// Lucia Best Burger Menu Images
import Face1 from '../assets/images/faces/10.jpg'
import Face2 from '../assets/images/faces/15.jpg'
import Face3 from '../assets/images/faces/2.jpg'
import Face4 from '../assets/images/faces/3.jpg'
import Face5 from '../assets/images/faces/13.jpg'
import Face6 from '../assets/images/faces/9.jpg'
import Breadcrumb from './Breadcrumb';

function Teams({ image, title, subTitle, position, style, index }) {
  return (
    <div className={style} key={index}>
      <div className="single_delicious d-flex align-items-center">
        <div className="thumb">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <span>{position}</span>
        </div>
      </div>
    </div>
  )
}


function WebTeam() {
  const style = ['col-xl-6 col-md-6 col-lg-6', 'col-md-6 col-lg-6', 'col-lg-6 col-md-6']
  const webTeamData = [
    {
      image: Face1,
      title: 'Youssef Rashad',
      subTitle: 'Great way to make your business appear trust and relevant.',
      position: 'Team Leader - MERN stack',
      style: style[0]
    },
    {
      image: Face2,
      title: 'Youssef Rashad',
      subTitle: 'Great way to make your business appear trust and relevant.',
      position: 'Full Stack Developer',
      style: style[1]
    },
    {
      image: Face3,
      title: 'Youssef Rashad',
      subTitle: 'Great way to make your business appear trust and relevant.',
      position: 'JS Developer',
      style: style[2]
    },
    {
      image: Face4,
      title: 'Youssef Rashad',
      subTitle: 'Great way to make your business appear trust and relevant.',
      position: 'BackEnd Developer',
      style: style[0]
    },
    {
      image: Face5,
      title: 'Youssef Rashad',
      subTitle: 'Great way to make your business appear trust and relevant.',
      position: 'FrontEnd  Developer',
      style: style[2]
    },
    {
      image: Face6,
      title: 'Youssef Rashad',
      subTitle: 'Great way to make your business appear trust and relevant.',
      position: 'Mobile Developer',
      style: style[2]
    }
  ]

  return (
    <div className="msMain">
      <Breadcrumb title="Website Team" />
      
      <div className="best_burgers_area">
        <div className="container">
          <div className="row">
            {webTeamData.map((item, index) => Teams({ ...item, index }))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default WebTeam;