import React from 'react';

const Search = () => {
  return (
    // animate
    <div className="search-ui rtl-ps-none" perfectScrollbar>
      <div className="search-header">
        <img src="../../assets/images/logo.png" alt="" className="logo" />
        <button className="btn btn-icon bg-transparent float-right mt-2">
          <i className="i-Close-Window text-22 text-muted"></i>
        </button>
      </div>

      <input
        type="text"
        placeholder="Type here"
        className="search-input"
        autofocus
      />

      <div className="search-title">
        <span className="text-muted" style={{fontSize: 'xx-large'}}>
          Search results
        </span>
      </div>

      <div className="search-results list-horizontal">
        {/*animate*/}
        <div className="list-item col-md-12 p-0">
          <div className="card o-hidden flex-row mb-4 d-flex">
            <div className="list-thumb d-flex">
              {/*<!-- TUMBNAIL -->*/}
              <img src="/" alt="" />
            </div>
            <div className="flex-grow-1 pl-2 d-flex">
              <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                {/*<!-- OTHER DATA -->*/}
                <div className="w-40 w-sm-100">
                  <div className="item-title" style="font-size: large;">
                    item.header
                  </div>
                </div>
                <p className="m-0 text-muted text-small w-15 w-sm-100">
                  Author
                </p>
                <p className="m-0 text-muted text-small w-15 w-sm-100">
                  item.author
                </p>
                <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  item.date
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-3">pagination-controls</div>
    </div>
  );
};

export default Search;
