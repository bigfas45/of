import React, { Fragment } from 'react';

const Nav = () => {
  return (
    <Fragment>
      <div className="nav-holder but-hol">
        <div className="nav-scroll-bar-wrap fl-wrap">
          <a href="index.html" className="ajax logo_menu">
            <img src="images/logo2.png" alt="" />
          </a>
          <div className="nav-container fl-wrap">
            {/* <!-- nav --> */}
            <nav className="nav-inner" id="menu">
              <ul>
                <li>
                  <a href="#" className="act-link">
                    Home
                  </a>
                  {/* <!--level 2 --> */}
                  <ul>
                    <li>
                      <a href="index.html" className="ajax">
                        Slider
                      </a>
                    </li>
                    <li>
                      <a href="index2.html" className="ajax">
                        Carousel
                      </a>
                    </li>
                    <li>
                      <a href="index3.html" className="ajax">
                        Video
                      </a>
                    </li>
                    <li>
                      <a href="index4.html" className="ajax">
                        Slideshow
                      </a>
                    </li>
                    <li>
                      <a href="index5.html" className="ajax">
                        Image
                      </a>
                    </li>
                  </ul>
                  {/* <!--level 2 end --> */}
                </li>
                <li>
                  <a href="#">Portfolio</a>
                  {/* <!--level 2 --> */}
                  <ul>
                    <li>
                      <a href="portfolio.html" className="ajax">
                        Horizontal
                      </a>
                    </li>
                    <li>
                      <a href="portfolio3.html" className="ajax">
                        Fullscreen Grid{' '}
                      </a>
                    </li>
                    <li>
                      <a href="portfolio2.html" className="ajax">
                        Column Grid
                      </a>
                    </li>
                    <li>
                      <a href="portfolio4.html" className="ajax">
                        Boxed Grid
                      </a>
                    </li>
                    <li>
                      <a href="portfolio5.html" className="ajax">
                        Column Filter
                      </a>
                    </li>
                    <li>
                      <a href="#">Single</a>
                      {/* <!--level 3 --> */}
                      <ul>
                        <li>
                          <a href="portfolio-single.html" className="ajax">
                            Style 1
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-single2.html" className="ajax">
                            Style 2
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-single3.html" className="ajax">
                            Style 3
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-single4.html" className="ajax">
                            Style 4
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-single5.html" className="ajax">
                            Style 5
                          </a>
                        </li>
                      </ul>
                      {/* <!--level 3 end --> */}
                    </li>
                  </ul>
                  {/* <!--level 2 end --> */}
                </li>
                <li>
                  <a href="contacts.html" className="ajax">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="blog.html" className="ajax">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  {/* <!--level 2 --> */}
                  <ul>
                    <li>
                      <a href="team-single.html" className="ajax">
                        Team Single
                      </a>
                    </li>
                    <li>
                      <a href="services-single.html" className="ajax">
                        Services Single
                      </a>
                    </li>
                    <li>
                      <a href="blog-single.html" className="ajax">
                        Blog Single
                      </a>
                    </li>
                    <li>
                      <a href="404.html" className="ajax">
                        404
                      </a>
                    </li>
                  </ul>
                  {/* <!--level 2 end --> */}
                </li>
              </ul>
            </nav>
            {/* <!-- nav end--> */}
          </div>
        </div>
        {/* <!-- nav-title--> */}
        <div className="nav-holder-line"></div>
        <div className="nav-title">
          <span>Menu</span>
        </div>
        {/* <!-- nav-title end--> */}
      </div>
      <div className="nav-holder-dec"></div>
      <div className="nav-overlay"></div>
    </Fragment>
  );
};

export default Nav;
