import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <header className="main-header">
        <a href="index.html" className="logo-holder ajax">
          <img src="images/logo.png" alt="" />
        </a>
        {/* <!-- nav-button-wrap--> */}
        <div className="nav-button but-hol">
          <span className="nos"></span>
          <span className="ncs"></span>
          <span className="nbs"></span>
          <div className="menu-button-text">Menu</div>
        </div>
        {/* <!-- nav-button-wrap end-->	 			 */}
        <div className="progress-bar-wrap">
          <div className="progress-bar color-bg"></div>
        </div>
        <div className="header_social ">
          <ul>
            <li>
              <a href="#" target="_blank">
                Fb
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Tw
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                In
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Be
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- share-button --> */}
        <div className="folio-btn showshare">
          <div className="folio-btn-item"></div>
          <span className="folio-btn-tooltip ">Share</span>
        </div>
        {/* <!-- share-button end --> */}
      </header>

             {/* <!-- top-header--> */} 
        <div className="top-header top-header-half">
          <div className="page-subtitle">
            <span></span>
          </div>
          <a href="contacts.html" className="single-page-fixed-row-link ajax">
            <i className="fal fa-envelope"></i> <span>Get In Touch</span>
          </a>
        </div>
       {/* <!-- top-header  end-->	 */}
    </Fragment>
  );
};

export default Header;
