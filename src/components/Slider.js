import React, { Fragment } from 'react';

const Slider = () => {
  return (
    <Fragment>
      <div className="fs-slider-wrap fs-slider-det full-height fl-wrap">
        <div
          className="fs-slider lightgallery full-height fl-wrap"
          data-mousecontrol2="false"
        >
          <div className="swiper-container  ">
            <div className="swiper-wrapper">
              {/* <!-- swiper-slide--> */}
              <div className="swiper-slide">
                <div className="fs-slider-item fl-wrap">
                  <div className="fs-slider_align_title">
                    <div className="hhw_header">Welcome to Our Website</div>
                    <h2>
                      <a href="#sec1" className="custom-scroll-link">
                        Pelzari Architecture
                        <br />
                        Design <span> Agency</span>
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.{' '}
                    </p>
                    <div className="clearfix"></div>
                    <a href="#sec1" className="hero_btn custom-scroll-link">
                      Read More About Us
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- swiper-slide-->
                                        <!-- swiper-slide--> */}
              <div className="swiper-slide hov_zoom">
                <div className="fs-slider-item fl-wrap">
                  <div className="fs-slider_align_title">
                    <div className="hhw_header">25.05.2020</div>
                    <h2>
                      <a href="portfolio-single.html" className="ajax">
                        Trinity River <br /> <span>Audubon</span> Centre
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.{' '}
                    </p>
                    <div className="clearfix"></div>
                    <a href="portfolio-single.html" className="hero_btn ajax">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- swiper-slide-->
                                        <!-- swiper-slide--> */}
              <div className="swiper-slide hov_zoom">
                <div className="fs-slider-item fl-wrap">
                  <div className="fs-slider_align_title">
                    <div className="hhw_header">11.04.2020</div>
                    <h2>
                      <a href="portfolio-single.html" className="ajax">
                        Private <span>House</span> in <br /> London UK
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.{' '}
                    </p>
                    <div className="clearfix"></div>
                    <a href="portfolio-single.html" className="hero_btn ajax">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- swiper-slide-->
                                        <!-- swiper-slide--> */}
              <div className="swiper-slide hov_zoom">
                <div className="fs-slider-item fl-wrap">
                  <div className="fs-slider_align_title">
                    <div className="hhw_header">14.02.2021</div>
                    <h2>
                      <a href="portfolio-single.html" className="ajax">
                        One World <br />
                        Trade <span>Center</span>
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar.{' '}
                    </p>
                    <div className="clearfix"></div>
                    <a href="portfolio-single.html" className="hero_btn ajax">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- swiper-slide--> */}
            </div>
          </div>
        </div>
        {/* <!-- hero-slider-img--> */}
        <div className="hero-slider-img hidden-item">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* <!-- swiper-slide--> */}
              <div className="swiper-slide">
                <div
                  className="bg"
                  data-bg="images/bg/4.jpg"
                  data-swiper-parallax="20%"
                ></div>
                <div className="overlay"></div>
              </div>
              {/* <!-- swiper-slide end-->
                                        <!-- swiper-slide--> */}
              <div className="swiper-slide">
                <div
                  className="bg"
                  data-bg="images/bg/5.jpg"
                  data-swiper-parallax="20%"
                ></div>
                <div className="overlay"></div>
              </div>
              {/* <!-- swiper-slide end-->
                                        <!-- swiper-slide--> */}
              <div className="swiper-slide">
                <div
                  className="bg"
                  data-bg="images/bg/17.jpg"
                  data-swiper-parallax="20%"
                ></div>
                <div className="overlay"></div>
              </div>
              {/* <!-- swiper-slide end-->
                                        <!-- swiper-slide--> */}
              <div className="swiper-slide">
                <div
                  className="bg"
                  data-bg="images/bg/8.jpg"
                  data-swiper-parallax="20%"
                ></div>
                <div className="overlay"></div>
              </div>
              {/* <!-- swiper-slide end--> */}
            </div>
          </div>
        </div>
        {/* <!-- hero-slider-img  end-->							 */}
      </div>

      {/*      <!-- hero-slider_details_wrap-->  */}
      <div className="hero-dec"> </div>
      <div className="fwc-dec fwc-dec_top"></div>
      <div className="fwc-dec fwc-dec_right"></div>
      <div className="clone-counter">
        <div className="current">01</div>
      </div>
      <div className="hero-slider_details_wrap">
        <div className="slide-progress-wrap">
          <div className="slide-progress"></div>
        </div>
        <div className="swiper-counter hs_counter">
          <div className="current">01</div>
          <div id="total"></div>
        </div>
        <div className="play-pause_slider2 hsc_pp2 auto_actslider2">
          <i className="fas fa-play"></i>
        </div>
      </div>
      {/* <!-- hero-slider_details_wrap  end -->					 */}
    </Fragment>
  );
};

export default Slider;
