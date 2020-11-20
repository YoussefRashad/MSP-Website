import React from 'react';

const MemberWorkComponent = () => {
  return (
    <div class="msMain">
      <div
        class="row"
        style={{
          margin: '0px',
          marginBottom: '13px',
        }}
      >
        <h1>Our Github</h1>
      </div>

      <div class="row">
        <div class="col-lg-7" style="padding-right: 40px">
          <div class="repoCard">
            {/* <!-- item.name <br />
                    item.html_url <br />
                    item.description <br />
                    item.created_at <br />
                    forked from item.parent.full_name   // name <br />
                    item.parent.owner.html_url   // link of the owner <br />
                    item.parent.owner.avatar_url   // pic of the owner <br /> --> */}
            <h2>
              <a href="/" target="_blank">
                item.name{' '}
              </a>
            </h2>
            <p class="repoCardPara">
              forked from{' '}
              <a href="/" target="_blank">
                item.parent.full_name
              </a>
            </p>
            <p class="repoCardPara">item.description</p>
            <br />
            <p class="repoCardPara text-right">item.created_at | date</p>
            <hr />
          </div>
        </div>
        <div class="col-lg-5" style="padding-left: 30px;">
          <div class="row">
            <h2 style="margin-bottom: 15px;">MSP on Github</h2>
          </div>
          <div class="row">
            <img src="/" alt="" style="width: 70px;" />
            <div
              class="col"
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '20px',
              }}
            >
              <h3>orgs.login</h3>
            </div>
          </div>
          <div class="row">
            <img
              src="/"
              alt=""
              style={{borderRadius: '50%', width: '70px', visibility: 'hidden'}}
            />
            <div
              class="col"
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '20px',
              }}
            >
              <p>orgs.description</p>
              <p>
                <a href="/" target="_blank">
                  open on Github
                </a>
              </p>
            </div>
          </div>
          <div class="row" style="margin-top: 30px;">
            <h3>People</h3>
          </div>
          <div class="row membersCard">
            <a href="/" target="_blank" class="memberLink">
              <img src="x.avatar_url" alt="" class="memberLinkImg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberWorkComponent;