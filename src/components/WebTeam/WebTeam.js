import React from 'react';

// Website's face
import Face1 from '../../assets/images/MSP/websiteTeam/IMG_4179.JPG'

import Breadcrumb from '../Breadcrumb';
import Member from './Member';

function WebTeam() {
  const style = ['col-xl-12 col-md-6 col-lg-6', 'col-md-6 col-lg-6', 'col-lg-6 col-md-6']
  
  const webTeamData = [
    {
      image: Face1,
      title: 'Youssef Rashad',
      subTitle: 'Great way to make your business appear trust and relevant.',
      links: [
        { name: "LinkedIn", URL: "https://linkedin.com/in/youssef-rashad-92b597156" },
        { name: "Github", URL: "https://github.com/YoussefRashad" }
      ],
      position: 'Software Enginner',
      style: style[0]
    }
    // ,
    // {
    //   image: Face2,
    //   title: 'Youssef Rashad',
    //   subTitle: 'Great way to make your business appear trust and relevant.',
    //   position: 'Full Stack Developer',
    //   style: style[1]
    // },
    // {
    //   image: Face3,
    //   title: 'Youssef Rashad',
    //   subTitle: 'Great way to make your business appear trust and relevant.',
    //   position: 'JS Developer',
    //   style: style[2]
    // },
    // {
    //   image: Face4,
    //   title: 'Youssef Rashad',
    //   subTitle: 'Great way to make your business appear trust and relevant.',
    //   position: 'BackEnd Developer',
    //   style: style[0]
    // },
    // {
    //   image: Face5,
    //   title: 'Youssef Rashad',
    //   subTitle: 'Great way to make your business appear trust and relevant.',
    //   position: 'FrontEnd  Developer',
    //   style: style[2]
    // },
    // {
    //   image: Face6,
    //   title: 'Youssef Rashad',
    //   subTitle: 'Great way to make your business appear trust and relevant.',
    //   position: 'Mobile Developer',
    //   style: style[2]
    // }
  ]

  return (
    <div className="msMain">
      <Breadcrumb title="Website Team" />
      
      <div className="websiteTeamArea">
        <div className="container">
          <div className="row">
            {webTeamData.map((item, index) => <Member {...item} key={index} /> )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default WebTeam;