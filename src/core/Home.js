import React, { Fragment } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <Fragment>
      {/* <!--loader--> */}
      <Loader></Loader>
      {/* <!--loader end--> 
        <!-- main start  --> */}
      <div id="main">
        {/* <!-- main-header--> */}
        <Header></Header>

        <div id="wrapper">
          {/* <!-- content-holder  -->	 */}
          <div className="content-holder" data-pagetitle="Home Slider">
            {/* <!-- nav-holder--> */}

            <Nav></Nav>
            {/* <!-- nav-holder end -->  				
                    <!-- hero-wrap  --> */}
            <div
              className="hero-wrap fl-wrap full-height scroll-con-sec"
              id="sec0"
            >
              {/* <!--fs-slider-wrap -->						 */}
              <Slider></Slider>
              {/* <!--fs-slider-wrap end -->				 */}
           
              <div className="hero-slider-wrap_pagination"></div>
              <div className="hero-slider_control-wrap">
                <div className="hsc hero-slider-button-prev">
                  <span>
                    <i className="fal fa-angle-left"></i>
                  </span>{' '}
                </div>
                <div className="hsc hero-slider-button-next">
                  <span>
                    <i className="fal fa-angle-right"></i>
                  </span>
                </div>
              </div>
              <div className="hero-dec-line"></div>
              <a href="#sec1" className="custom-scroll-link start-btn">
                <span> Start explore </span>
                <i className="fal fa-long-arrow-down"></i>
              </a>
            </div>
            {/* <!-- hero-wrap  end--> 
                    // <!-- content--> */}
            <div className="content">
              {/* <!--fixed-column-wrap--> */}
              <div className="fixed-column-wrap init_fx-column fcw_mob-hidden">
                {/* <!--fixed-column-wrap-content--> */}
                <div className="fixed-column-wrap-content">
                  <div className="fixed-column-wrap_bg">
                    <div
                      className="bg bg-scroll"
                      data-bg="images/bg/4.jpg"
                    ></div>
                    <div className="overlay"></div>
                    <div className="column-image-anim"></div>
                    <div className="hero-scroll-down-notifer  ">
                      <div className="scroll-down-wrap ">
                        <div className="mousey">
                          <div className="scroller"></div>
                        </div>
                      </div>
                    </div>
                    <div className="fixed-column-dec"></div>
                  </div>
                  {/* <!--fixed-column-wrap_title--> */}
                  <div className="fixed-column-wrap_title">
                    <h2>
                      <span>01. About Us</span>
                    </h2>
                  </div>
                  {/* <!--fixed-column-wrap_title end--> */}
                  <div className="scroll-notifer">Scroll Down </div>
                  <div className="fwc-dec fwc-dec_top"></div>
                  <div className="fwc-dec fwc-dec_right"></div>
                  <div className="fixed-column-wrap_dec"></div>
                </div>
                {/* <!--fixed-column-wrap-content end--> */}
              </div>
              {/* <!--fixed-column-wrap end-->
                        <!--column-wrap-->  */}
              <div className="column-wrap">
                {/* <!--column-wrap-container -->    */}
                <div className="column-wrap-container white-bg fl-wrap">
                  <div className="col-wc_dec"></div>
                  {/* <!--section-->  */}
                  <section id="sec1" className="scroll-con-sec">
                    <div className="container">
                      <div className="section-title fl-wrap">
                        <h2>
                          About Our <strong> Agency</strong>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar.{' '}
                        </p>
                        <div className="sec-title_dec"></div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="about-img fl-wrap">
                            <img
                              src="images/about.jpg"
                              className="respimg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="text-block fl-wrap">
                            <h4 className="text-block_subtitle">
                              Award Winning Architecture
                              <br /> Design Agency
                            </h4>
                            <p>
                              Our team takes over everything, from an idea and
                              concept development to realization. We believe in
                              traditions and incorporate them within our
                              innovations. All our projects incorporate a unique
                              artistic image and functional solutions. Client is
                              the soul of the project. Our main goal is to
                              illustrate his/hers values and individuality
                              through design.
                            </p>
                            <p>
                              Our team takes over everything, from an idea and
                              concept development to realization. We believe in
                              traditions and incorporate them within our
                              innovations. All our projects incorporate a unique
                              artistic image and functional solutions. .
                            </p>
                            <div className="pr-tags fl-wrap">
                              <span>What we do : </span>
                              <ul>
                                <li>
                                  <a href="#">Architecture</a>
                                </li>
                                <li>
                                  <a href="#">Design</a>
                                </li>
                                <li>
                                  <a href="#">Interior</a>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#sec2"
                              className="btn float-btn custom-scroll-link"
                            >
                              Our Works
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="inline-facts-container   fl-wrap">
                        {/* <!-- inline-facts --> */}
                        <div className="inline-facts-wrap">
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div
                                  className="num"
                                  data-content="0"
                                  data-num="145"
                                >
                                  0
                                </div>
                              </div>
                            </div>
                            <h6>Finished projects</h6>
                          </div>
                        </div>
                        {/* <!-- inline-facts end -->
                                            <!-- inline-facts  --> */}
                        <div className="inline-facts-wrap">
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div
                                  className="num"
                                  data-content="0"
                                  data-num="357"
                                >
                                  0
                                </div>
                              </div>
                            </div>
                            <h6>Happy customers</h6>
                          </div>
                        </div>
                        {/* <!-- inline-facts end -->
                                            <!-- inline-facts  --> */}
                        <div className="inline-facts-wrap">
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div
                                  className="num"
                                  data-content="0"
                                  data-num="825"
                                >
                                  0
                                </div>
                              </div>
                            </div>
                            <h6>Working hours</h6>
                          </div>
                        </div>
                        {/* <!-- inline-facts end -->
                                            <!-- inline-facts  --> */}
                        <div className="inline-facts-wrap">
                          <div className="inline-facts">
                            <div className="milestone-counter">
                              <div className="stats animaper">
                                <div
                                  className="num"
                                  data-content="0"
                                  data-num="15"
                                >
                                  0
                                </div>
                              </div>
                            </div>
                            <h6>Awards won</h6>
                          </div>
                        </div>
                        {/* <!-- inline-facts end -->  */}
                      </div>
                    </div>
                    <div className="section-number">
                      <span>0</span>1<strong>.</strong>
                    </div>
                  </section>
                  {/* <!--section end--> 
                                <!-- section  -->				 */}
                  <section className="dark-bg sec-car scroll-con-sec" id="sec2">
                    <div className="fet_pr-carousel_title fl-wrap">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8">
                            <h2>
                              {' '}
                              Featured <strong>Projects</strong>
                            </h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Maecenas in pulvinar neque. Nulla finibus
                              lobortis pulvinar.{' '}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <a
                              href="portfolio.html"
                              className="ajax   fet_pr-carousel_link btn"
                            >
                              View all Cases
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--grid-carousel-wrap --> */}
                    <div className="grid-carousel-wrap fl-wrap">
                      <div className="grid-carousel fl-wrap">
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            {/* <!-- fet_pr-carousel-box  -->  */}
                            <div className="swiper-slide">
                              <div className="fet_pr-carousel-box">
                                <div className="fet_pr-carousel-box-media fl-wrap">
                                  <div
                                    className="bg par-elem"
                                    data-bg="images/folio/9.jpg"
                                    data-swiper-parallax="10%"
                                  ></div>
                                  <div className="overlay"></div>
                                  <div className="grid-det_category">
                                    <a href="#">Interior</a>{' '}
                                    <a href="#">Houses</a>
                                  </div>
                                  <div className="grid-det_num">01.</div>
                                </div>
                                <div className="fet_pr-carousel-box-text fl-wrap">
                                  <a
                                    href="portfolio-single.html"
                                    className="ajax"
                                  >
                                    Wood River Ships Center
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* <!-- fet_pr-carousel-box end -->
                                                    <!-- fet_pr-carousel-box  -->  */}
                            <div className="swiper-slide">
                              <div className="fet_pr-carousel-box">
                                <div className="fet_pr-carousel-box-media fl-wrap">
                                  <div
                                    className="bg par-elem"
                                    data-bg="images/folio/2.jpg"
                                    data-swiper-parallax="10%"
                                  ></div>
                                  <div className="overlay"></div>
                                  <div className="grid-det_category">
                                    <a href="#">Architecture</a>{' '}
                                    <a href="#">Houses</a>
                                  </div>
                                  <div className="grid-det_num">02.</div>
                                </div>
                                <div className="fet_pr-carousel-box-text fl-wrap">
                                  <a
                                    href="portfolio-single.html"
                                    className="ajax"
                                  >
                                    Theatre de Stoep{' '}
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* <!-- fet_pr-carousel-box end -->
                                                    <!-- fet_pr-carousel-box  -->  */}
                            <div className="swiper-slide">
                              <div className="fet_pr-carousel-box">
                                <div className="fet_pr-carousel-box-media fl-wrap">
                                  <div
                                    className="bg par-elem"
                                    data-bg="images/folio/11.jpg"
                                    data-swiper-parallax="10%"
                                  ></div>
                                  <div className="overlay"></div>
                                  <div className="grid-det_category">
                                    <a href="#">Architecture</a>{' '}
                                    <a href="#">Interior</a>
                                  </div>
                                  <div className="grid-det_num">03.</div>
                                </div>
                                <div className="fet_pr-carousel-box-text fl-wrap">
                                  <a
                                    href="portfolio-single.html"
                                    className="ajax"
                                  >
                                    White Walls Hotel
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* <!-- fet_pr-carousel-box end -->  
                                                    <!-- fet_pr-carousel-box  -->  */}
                            <div className="swiper-slide">
                              <div className="fet_pr-carousel-box">
                                <div className="fet_pr-carousel-box-media fl-wrap">
                                  <div
                                    className="bg par-elem"
                                    data-bg="images/folio/8.jpg"
                                    data-swiper-parallax="10%"
                                  ></div>
                                  <div className="overlay"></div>
                                  <div className="grid-det_category">
                                    <a href="#">Architecture</a>{' '}
                                    <a href="#">Houses</a>
                                  </div>
                                  <div className="grid-det_num">04.</div>
                                </div>
                                <div className="fet_pr-carousel-box-text fl-wrap">
                                  <a
                                    href="portfolio-single.html"
                                    className="ajax"
                                  >
                                    Private House in London
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* <!-- fet_pr-carousel-box end --> 													 */}
                          </div>
                        </div>
                      </div>
                      <div className="grid-carousel_pagination"></div>
                      <div className="gc-slider-cont gc-slider-cont-next">
                        <i className="fal fa-angle-right"></i>
                      </div>
                      <div className="gc-slider-cont gc-slider-cont-prev">
                        <i className="fal fa-angle-left"></i>
                      </div>
                    </div>
                    {/* <!--grid-carousel-wrap end -->							 */}
                  </section>
                  {/* <!-- section end-->	
                                <!-- section  -->	 */}
                  <section className="scroll-con-sec gray-bg" id="sec3">
                    <div className="container">
                      <div className="section-title fl-wrap">
                        <h2>
                          Services <strong> Provided</strong>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar.{' '}
                        </p>
                        <div className="sec-title_dec"></div>
                      </div>
                      <div className="column-wrapper_text fl-wrap">
                        {/* <!-- serv-wrap--> */}
                        <div className="serv-wrap fl-wrap">
                          {/* <!-- serv-item --> */}
                          <div className="serv-item">
                            <div className="serv-media">
                              <div
                                className="bg "
                                data-bg="images/services/1.jpg"
                              ></div>
                              <div className="team-info-num">01.</div>
                            </div>
                            <div className="serv-text">
                              <h4>
                                <a href="services-single.html" className="ajax">
                                  Architecture
                                </a>
                              </h4>
                              <p>
                                {' '}
                                Sed blandit, dolor id aliquam vestibulum, nibh
                                elit imperdiet turpis, quis molestie quam erat
                                vel nisi.
                              </p>
                              <ul>
                                <li>
                                  <a href="#">Concept</a>
                                </li>
                                <li>
                                  <a href="#">Design</a>
                                </li>
                                <li>
                                  <a href="#">3D Modeling</a>
                                </li>
                              </ul>
                              <a
                                href="services-single.html"
                                className="serv-link ajax"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                          {/* <!-- serv-item end -->
                                                <!-- serv-item --> */}
                          <div className="serv-item serv-item-right">
                            <div className="serv-media">
                              <div
                                className="bg "
                                data-bg="images/services/2.jpg"
                              ></div>
                              <div className="team-info-num">02.</div>
                            </div>
                            <div className="serv-text">
                              <h4>
                                <a href="services-single.html" className="ajax">
                                  Interior
                                </a>
                              </h4>
                              <p>
                                {' '}
                                Sed blandit, dolor id aliquam vestibulum, nibh
                                elit imperdiet turpis, quis molestie quam erat
                                vel nisi.
                              </p>
                              <ul>
                                <li>Concept</li>
                                <li>Design</li>
                                <li>3D Modeling</li>
                              </ul>
                              <a
                                href="services-single.html"
                                className="serv-link ajax"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                          {/* <!-- serv-item end -->
                                                <!-- serv-item --> */}
                          <div className="serv-item ">
                            <div className="serv-media">
                              <div
                                className="bg "
                                data-bg="images/services/3.jpg"
                              ></div>
                              <div className="team-info-num">03.</div>
                            </div>
                            <div className="serv-text">
                              <h4>
                                <a href="services-single.html" className="ajax">
                                  Commercial
                                </a>
                              </h4>
                              <p>
                                {' '}
                                Sed blandit, dolor id aliquam vestibulum, nibh
                                elit imperdiet turpis, quis molestie quam erat
                                vel nisi.
                              </p>
                              <ul>
                                <li>Concept</li>
                                <li>Design</li>
                                <li>3D Modeling</li>
                              </ul>
                              <a
                                href="services-single.html"
                                className="serv-link ajax"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                          {/* <!-- serv-item end -->											 */}
                        </div>
                        {/* <!-- serv-wrap end --> */}
                        <p>
                          Praesent nec leo venenatis elit semper aliquet id ac
                          enim. Maecenas nec mi leo. Etiam venenatis ut dui non
                          hendrerit. Integer dictum, diam vitae blandit
                          accumsan, dolor odio tempus arcu, vel ultrices nisi
                          nibh vitae ligula. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Morbi varius lacinia
                          vestibulum. Aliquam lobortis facilisis tellus, in
                          facilisis ex vehicula ac. In malesuada quis turpis vel
                          viverra.
                        </p>
                        <a
                          href="contacts.html"
                          className="btn float-btn ajax  "
                        >
                          <span>Get In Touch</span>
                        </a>
                      </div>
                    </div>
                    <div className="section-number">
                      {' '}
                      <span>0</span>2<strong>.</strong>
                    </div>
                  </section>
                  {/* <!-- section end-->	
                                <!-- section-->	 */}
                  <section className="dark-bg sec-car scroll-con-sec">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="video-promo-text fl-wrap mar-top">
                            <h3>
                              Our Video <strong>Presentation</strong>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Maecenas in pulvinar neque. Nulla finibus
                              lobortis pulvinar. Donec a consectetur nulla.
                              Nulla posuere sapien vitae lectus suscipit, et
                              pulvinar nisi tincidunt. Aliquam erat volutpat.{' '}
                            </p>
                            <a href="#" className="btn float-btn   ">
                              <span>Our Youtube Chanel</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="video-box dec-img fl-wrap">
                            <img
                              src="images/folio/18.jpg"
                              alt=""
                              className="respimg"
                            />
                            <a
                              className="video-box-btn image-popup"
                              href="https://vimeo.com/34741214"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* <!-- section  end-->			
                                <!-- section  -->				 */}
                  <section className="scroll-con-sec" id="sec4">
                    <div className="container">
                      <div className="section-title fl-wrap">
                        <h2>
                          Our Awesome <strong>Team</strong>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar.{' '}
                        </p>
                        <div className="sec-title_dec"></div>
                      </div>
                      <div className="row">
                        {/* <!-- team-box   -->  */}
                        <div className="col-md-6">
                          <div className="team-box">
                            <div className="team-photo">
                              <div className="overlay"></div>
                              <img
                                src="images/team/1.jpg"
                                alt=""
                                className="respimg"
                              />
                              <ul className="team-social">
                                <li>
                                  <a href="#" target="_blank">
                                    Fb
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    In
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Tw
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Vk
                                  </a>
                                </li>
                              </ul>
                              <div className="team-info-num">01.</div>
                              <a
                                href="team-single.html"
                                className="team-link ajax"
                              >
                                View Details
                              </a>
                            </div>
                            <div className="team-info">
                              <h3>
                                <a href="team-single.html" className="ajax">
                                  David Gray
                                </a>
                              </h3>
                              <h4>CEO / Architect</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- team-box end --> 
                                            <!-- team-box   -->  */}
                        <div className="col-md-6">
                          <div className="team-box">
                            <div className="team-photo">
                              <div className="overlay"></div>
                              <img
                                src="images/team/2.jpg"
                                alt=""
                                className="respimg"
                              />
                              <ul className="team-social">
                                <li>
                                  <a href="#" target="_blank">
                                    Fb
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    In
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Tw
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Vk
                                  </a>
                                </li>
                              </ul>
                              <div className="team-info-num">02.</div>
                              <a
                                href="team-single.html"
                                className="team-link ajax"
                              >
                                View Details
                              </a>
                            </div>
                            <div className="team-info">
                              <h3>
                                <a href="team-single.html" className="ajax">
                                  Alica Limishko
                                </a>
                              </h3>
                              <h4>Architect / Designer</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- team-box end --> 
                                            <!-- team-box   -->  */}
                        <div className="col-md-6">
                          <div className="team-box">
                            <div className="team-photo">
                              <div className="overlay"></div>
                              <img
                                src="images/team/4.jpg"
                                alt=""
                                className="respimg"
                              />
                              <ul className="team-social">
                                <li>
                                  <a href="#" target="_blank">
                                    Fb
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    In
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Tw
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Vk
                                  </a>
                                </li>
                              </ul>
                              <div className="team-info-num">03.</div>
                              <a
                                href="team-single.html"
                                className="team-link ajax"
                              >
                                View Details
                              </a>
                            </div>
                            <div className="team-info">
                              <h3>
                                <a href="team-single.html" className="ajax">
                                  Olivia Edminton
                                </a>
                              </h3>
                              <h4>Architect / Designer</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- team-box end --> 
                                            <!-- team-box   -->  */}
                        <div className="col-md-6">
                          <div className="team-box">
                            <div className="team-photo">
                              <div className="overlay"></div>
                              <img
                                src="images/team/3.jpg"
                                alt=""
                                className="respimg"
                              />
                              <ul className="team-social">
                                <li>
                                  <a href="#" target="_blank">
                                    Fb
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    In
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Tw
                                  </a>
                                </li>
                                <li>
                                  <a href="#" target="_blank">
                                    Vk
                                  </a>
                                </li>
                              </ul>
                              <div className="team-info-num">03.</div>
                              <a
                                href="team-single.html"
                                className="team-link ajax"
                              >
                                View Details
                              </a>
                            </div>
                            <div className="team-info">
                              <h3>
                                <a href="team-single.html" className="ajax">
                                  Kevin Brunt
                                </a>
                              </h3>
                              <h4>Architect / Designer</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- team-box end -->  */}
                      </div>
                    </div>
                    <div className="section-number">
                      {' '}
                      <span>0</span>4<strong>.</strong>
                    </div>
                  </section>
                  {/* <!-- section end-->	 */}
                  <div className="section-separator fl-wrap">
                    <span></span>
                  </div>
                  {/* <!--section  -->  */}
                  <section className="scroll-con-sec gray-bg " id="sec5">
                    <div className="container">
                      <div className="section-title fl-wrap">
                        <h2>
                          Clents <strong> And Testimonilas</strong>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar.{' '}
                        </p>
                        <div className="sec-title_dec"></div>
                      </div>
                      <div className="testimonilas-carousel-wrap fl-wrap">
                        <div className="testimonilas-carousel">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              {/* <!--testi-item--> */}
                              <div className="swiper-slide">
                                <div className="testi-item fl-wrap">
                                  <div className="testi-avatar">
                                    <img src="images/avatar/1.jpg" alt="" />
                                  </div>
                                  <div className="testimonilas-text fl-wrap">
                                    <h3>Andy Dimasky</h3>
                                    <p>
                                      "Exerci tation ullamcorper suscipit
                                      lobortis nisl ut aliquip ex ea commodo
                                      consequat. Duis autem vel eum iriure
                                      dolor. Duis autem vel eum sit amet
                                      semiriure dolor consectetur adipiscing
                                      elit."
                                    </p>
                                    <a
                                      href="#"
                                      className="testi-link"
                                      target="_blank"
                                    >
                                      Via Facebook
                                    </a>
                                    <span className="testi-number">01.</span>
                                  </div>
                                </div>
                              </div>
                              {/* <!--testi-item end-->
                                                        <!--testi-item--> */}
                              <div className="swiper-slide">
                                <div className="testi-item fl-wrap">
                                  <div className="testi-avatar">
                                    <img src="images/avatar/2.jpg" alt="" />
                                  </div>
                                  <div className="testimonilas-text fl-wrap">
                                    <h3>Frank Dellov</h3>
                                    <p>
                                      "Vestibulum orci felis, ullamcorper non
                                      condimentum non, ultrices ac nunc. Mauris
                                      non ligula suscipit, vulputate mi
                                      accumsan, dapibus felis. Nullam sed sapien
                                      dui. Nulla auctor sit amet sem non porta.
                                      "
                                    </p>
                                    <a
                                      href="#"
                                      className="testi-link"
                                      target="_blank"
                                    >
                                      Via Twitter
                                    </a>
                                    <span className="testi-number">02.</span>
                                  </div>
                                </div>
                              </div>
                              {/* <!--testi-item end-->
                                                        <!--testi-item--> */}
                              <div className="swiper-slide">
                                <div className="testi-item fl-wrap">
                                  <div className="testi-avatar">
                                    <img src="images/avatar/3.jpg" alt="" />
                                  </div>
                                  <div className="testimonilas-text fl-wrap">
                                    <h3>Centa Simpson</h3>
                                    <p>
                                      "Vestibulum orci felis, ullamcorper non
                                      condimentum non, ultrices ac nunc. Mauris
                                      non ligula suscipit, vulputate mi
                                      accumsan, dapibus felis. Nullam sed sapien
                                      dui. Nulla auctor sit amet sem non porta.
                                      "
                                    </p>
                                    <a
                                      href="#"
                                      className="testi-link"
                                      target="_blank"
                                    >
                                      Via Facebook
                                    </a>
                                    <span className="testi-number">03.</span>
                                  </div>
                                </div>
                              </div>
                              {/* <!--testi-item end-->
                                                        <!--testi-item--> */}
                              <div className="swiper-slide">
                                <div className="testi-item fl-wrap">
                                  <div className="testi-avatar">
                                    <img src="images/avatar/4.jpg" alt="" />
                                  </div>
                                  <div className="testimonilas-text fl-wrap">
                                    <h3>Nicolo Svensky</h3>
                                    <p>
                                      "Vestibulum orci felis, ullamcorper non
                                      condimentum non, ultrices ac nunc. Mauris
                                      non ligula suscipit, vulputate mi
                                      accumsan, dapibus felis. Nullam sed sapien
                                      dui. Nulla auctor sit amet sem non porta.
                                      "
                                    </p>
                                    <a
                                      href="#"
                                      className="testi-link"
                                      target="_blank"
                                    >
                                      Via Twitter
                                    </a>
                                    <span className="testi-number">04.</span>
                                  </div>
                                </div>
                              </div>
                              {/* <!--testi-item end--> */}
                            </div>
                          </div>
                        </div>
                        <div className="tc-pagination"></div>
                        <div className="tc-button_wrap">
                          <div className="tc-button tc-button-prev">
                            <i className="fal fa-angle-left"></i>
                          </div>
                          <div className="tc-button tc-button-next">
                            <i className="fal fa-angle-right"></i>
                          </div>
                        </div>
                      </div>
                      {/* <!-- client-list --> */}
                      <div className="fl-wrap client-list">
                        <ul>
                          <li>
                            <a href="#" target="_blank">
                              <img src="images/clients/1.png" alt="" />{' '}
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <img src="images/clients/2.png" alt="" />{' '}
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <img src="images/clients/3.png" alt="" />{' '}
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <img src="images/clients/4.png" alt="" />{' '}
                            </a>
                          </li>
                        </ul>
                        {/* <!-- client-list end--> */}
                      </div>
                    </div>
                    <div className="section-number">
                      {' '}
                      <span>0</span>5<strong>.</strong>
                    </div>
                  </section>
                  {/* <!--section end-->                          */}
                </div>
                {/* <!--column-wrap-container end-->  
                            <!--scroll-fixed-column-content--> */}
                <div className="scroll-fixed-column-content stf-con_mob-hidden fl-wrap">
                  <div className="container">
                    {/* <!--page-scroll-nav--> */}
                    <div className="page-scroll-nav fl-wrap">
                      <nav className="scroll-init color2-bg">
                        <ul className="no-list-style">
                          <li>
                            <a
                              className="scroll-link fbgs actscr-link"
                              href="#sec1"
                              data-bgscr="images/bg/long/5.jpg"
                              data-bgtex="01. About Us"
                            >
                              <span>About</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="scroll-link fbgs"
                              href="#sec2"
                              data-bgscr="images/bg/long/6.jpg"
                              data-bgtex="02. Porfolio"
                            >
                              <span>Cases</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="scroll-link fbgs"
                              href="#sec3"
                              data-bgscr="images/bg/long/7.jpg"
                              data-bgtex="03. Services"
                            >
                              <span>Services</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="scroll-link fbgs"
                              href="#sec4"
                              data-bgscr="images/bg/long/8.jpg"
                              data-bgtex="04. Our Team"
                            >
                              <span>Team</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="scroll-link fbgs"
                              href="#sec5"
                              data-bgscr="images/bg/long/1.jpg"
                              data-bgtex="05. Clients"
                            >
                              <span>Clients</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* <!--page-scroll-nav end-->							 */}
                  </div>
                  <div className="arrowpagenav"></div>
                </div>
                {/* <!--scroll-fixed-column-content end--> */}
              </div>
              {/* <!--column-wrap end-->					 */}
              <div className="limit-box fl-wrap"></div>
            </div>
            {/* <!-- content end  -->
                    <!-- footer --> */}
            <div className="height-emulator fl-wrap"></div>
            <footer className="main-footer">
              <div className="container">
                <div className="footer-decor">
                  <canvas id="bg-animation"></canvas>
                </div>
                {/* <!-- footer-inner --> */}
                <div className="footer-inner fl-wrap">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="footer-logo">
                        <img src="images/logo2.png" alt="" />
                      </div>
                      <div className="footer_text  footer-box fl-wrap">
                        <p>
                          Our team takes over everything, from an idea and
                          concept development to realization. We believe in
                          traditions and incorporate them within our
                          innovations.Client is the soul of the project.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="footer-header fl-wrap">
                        <span>01.</span> Contacts
                      </div>
                      {/* <!-- footer-contacts--> */}
                      <div className="footer-contacts footer-box fl-wrap">
                        <ul>
                          <li>
                            <span>Call:</span>
                            <a href="#">+489756412322</a>
                          </li>
                          <li>
                            <span>Write :</span>
                            <a href="#">yourmail@domain.com</a>
                          </li>
                          <li>
                            <span>Find us : </span>
                            <a href="#">USA 27TH Brooklyn NY</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- footer contacts end --> */}
                      <a
                        href="contacts.html"
                        className="ajax fc_button btn float-btn"
                      >
                        Get In Touch
                      </a>
                    </div>
                    <div className="col-md-4">
                      <div className="footer-header fl-wrap">
                        <span>02.</span> Subscribe
                      </div>
                      <div className="footer-box fl-wrap">
                        <p>
                          Want to be notified when we launch a new template or
                          an udpate. Just sign up and we'll send you a
                          notification by email.
                        </p>
                        <div className="subcribe-form fl-wrap">
                          <form id="subscribe" className="fl-wrap">
                            <input
                              className="enteremail"
                              name="email"
                              id="subscribe-email"
                              placeholder="Your Email"
                              spellcheck="false"
                              type="text"
                            />
                            <button
                              type="submit"
                              id="subscribe-button"
                              className="subscribe-button"
                            >
                              Send
                            </button>
                            <label
                              for="subscribe-email"
                              className="subscribe-message"
                            ></label>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- footer-inner end -->
                            <!-- subbfooter --> */}
                <div className="subbfooter fl-wrap">
                  <div className="policy-box">
                    <span> &#169; Pelzari 2021 / All rights reserved. </span>
                  </div>
                  <div className="footer-solcial">
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
                  <div className="to-top-btn to-top">
                    <i className="fal fa-long-arrow-up"></i>
                  </div>
                </div>
                {/* <!-- subbfooter end --> */}
              </div>
            </footer>
            {/* <!-- footer end --> */}
          </div>
          {/* <!-- content-holder end -->
                <!-- share-wrapper--> */}
          <div className="share-wrapper">
            <div className="close-share-btn">
              <i className="fal fa-times"></i>
            </div>
            <div className="share-container fl-wrap  isShare"></div>
          </div>
          {/* <!-- share-wrapper  end --> */}
        </div>
        {/* <!-- wrapper end -->
            <!-- cursor--> */}
        <div className="element">
          <div className="element-item"></div>
        </div>
        {/* <!-- cursor end--> */}
      </div>
    </Fragment>
  );
};

export default Home;
