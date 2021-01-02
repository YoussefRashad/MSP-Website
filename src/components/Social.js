import React from 'react';

function Social() {
  const scoailLinks = [
    {
      link: 'https://www.facebook.com/HelwanTC',
      styling: 'i-Facebook-2 text-32 text-primary',
      title: 'Facbook'
    },
    {
      link: 'https://twitter.com/Msp_TechClub',
      styling: 'i-Twitter text-32 text-primary',
      title: 'Twitter'
    },
    {
      link: 'https://www.instagram.com/msptechclub/',
      styling: 'i-Instagram text-32 text-primary',
      title: 'Instagram'
    },
    {
      link: 'https://www.youtube.com',
      styling: 'i-Youtube text-32 text-primary',
      title: 'Youtube'
    },
    {
      link: 'https://www.linkedin.com/company/msptechclubhelwan/',
      styling: 'i-Linkedin-2 text-32 text-primary',
      title: 'Linked In'
    },
    {
      link: 'https://www.github.com/Microsoft-Student-Partner-HU/',
      styling: 'i-Github-2 text-32 text-primary',
      title: 'Github'
    },
    {
      link: 'https://www.behance.net/MSPHU',
      styling: 'i-Behance text-32 text-primary',
      title: 'Behance'
    }
  ]
  return (
    <div className="msMain">
      <hr />
      <h4 style={{fontSize: 'x-large'}}>Reach us</h4>
      <p className="mb-4">
        The Official accounts of Microsoft Tech Club at Helwan University.
      </p>
      <div className="row">
        {
          scoailLinks.map((item, index)=>{
            return(
              <div className="col-md-2 col-sm-4 col-6 text-center shadowItemWithoutBox" key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <i className={item.styling}></i>
                  <p className="text-16 mt-1">{item.title}</p>
                </a>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Social;
