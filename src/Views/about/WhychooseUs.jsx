import React from 'react';
import Header from '../Header';
import OwlCarousel from 'react-owl-carousel';
import testimonial from '../../image/testimonial-bg-1.jpg';
import { Helmet } from "react-helmet";
function WhychooseUs() {
 
  return (
    <>
     <div className="inner_pages_wrapper">
    <Header class_bg='black_bg' />
    <img src={require("./logo-1.png")} alt="Site Logo" />
   
    {/* hiiiii */}
    <Helmet>
                <title>mucheco</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
            </Helmet>

    {/* <!--====== Start Hero Section ======--> */}
        {/* <section className="hero-area">
            <div className="breadcrumbs-wrapper bg_cover">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-title-text text-center">
                                <h1 className="title">Why Choose Us</h1>
                                <ul className="breadcrumbs-link">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Why Choose Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!--====== End Hero Section ======--> */}
      {/* <!--====== Start About Section ======--> */}
    <section className="fancy-about fancy-about-four pt-60 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="about-content-box mb-50" data-aos="fade-right" data-aos-duration="1000">
                        <div className="section-title mb-25 wow fadeInUp">
                            <span className="sub-title sub-title-bg blue-light-bg">Why Choose Us?</span>
                            <h2 className="">We help you create an exceptional eCommerce experience for your customers.</h2>
                        </div>
                        <strong>A team with a constant source of innovation and excellence</strong>
                        <p>With world-className expertise in leading eCommerce platforms, including Magento, Shopify, BigCommerce, and WooCommerce, we've got all the tools and knowledge needed to help you succeed. From creating beautiful and functional online stores to building custom software solutions and integrating complex systems, we've got you covered.</p>
<p>What sets us apart is our unwavering dedication to your success. We don't just want to deliver a project and move on - we want to be your long-term partner, helping you grow and scale your eCommerce business for years to come. Our team is committed to providing top-notch service, exceptional quality, and timely delivery, all with a personal touch.</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about_top_rgt_img" data-aos="fade-left" data-aos-duration="1000">
                        <img src={require("../../image/about/why_choose_us.jpg")} alt=""/>
                    </div>
                    {/* <!-- <div className="img-holder-box mb-50" data-aos="fade-left" data-aos-duration="1000">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="experience-box wow fadeInDown">
                                    <div className="year">
                                        <h2>25</h2>
                                    </div>
                                </div>
                                <div className="img-holder wow fadeInUp">
                                    <img src="image/about/about-10.jpg" alt="About Image">
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="img-holder wow fadeInDown">
                                    <img src="image/about/about-11.jpg" alt="About Image">
                                </div>
                            </div>
                        </div>
                    </div> --> */}
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End About Section ======--> */}
    {/* <!--====== Start mission & Vission Section ======--> */}
    <section className="features-area mission_vission pt-60 pb-60 why_choose_us_experties">
        <div className="container ">
            <div className="section-title text-center mb-25 wow fadeInUp">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <span className="sub-title sub-title-bg blue-light-bg">Competencies</span>
                        <h2 className="">What We Excel At?</h2>
                    </div>
                </div>
               
            </div>
            <div className="about_para">
                <p>Mucheco brings together a dedicated team of developers, designers, project managers, QAs and analysts with world-className expertise to deliver stunning eCommerce sites that drive growth and success. Whether you're a startup or an established enterprise, we've the knowledge and expertise to help you succeed.</p>
            </div>
            <section className="faq-area about_acordion pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                                <div className="icon square_icon">
                                    {/* <!-- <i className="flaticon-help"></i> --> */}
                                    <img src={require("../../image/about/technical_ex.png")} alt=""/>
                                </div>
                                <div className="text">
                                    <h3 className="">Technical Expertise </h3>
                                    <p className="justify_txt">We are passionate about creating exceptional multichannel shopping experiences that drive your eCommerce success. Our team of experts has a deep understanding of leading eCommerce platforms such as Magento, Shopify, BigCommerce, and WooCommerce, and we're dedicated to delivering outstanding results that exceed your expectations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp aos-init aos-animate" data-aos="fade-up" data-aos-duration="700">
                                <div className="icon square_icon">
                                    {/* <!-- <i className="flaticon-technical-support"></i> --> */}
                                    <img src={require("../../image/about/vastly_experienced.png")} alt=""/>
                                </div>
                                <div className="text">
                                    <h3 className="">Vastly Experienced </h3>
                                    <p className="justify_txt">With years of experience in the eCommerce industry, we have a proven track record of delivering successful solutions for a diverse range of organizations. Our vast experience and expertise ensure that we're well-equipped to tackle any challenge and deliver exceptional results for your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
                                <div className="icon square_icon">
                                    {/* <!-- <i className="flaticon-it"></i> --> */}
                                    <img src={require("../../image/about/mutual_nature.png")} alt=""/>
                                </div>
                                <div className="text">
                                    <h3 className="">Mutual by Nature  </h3>
                                    <p className="justify_txt">We believe that the key to success is collaboration. That's why we work closely with our clients, aiming to establish a true partnership that extends beyond the typical vendor-client relationship. We strive to make your team feel like an integral part of our team, working together towards a common goal. With Mucheco, you can count on a long-term partnership that drives success for your business. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp aos-init" data-aos="fade-up" data-aos-duration="1100">
                                <div className="icon square_icon">
                                    {/* <!-- <i className="flaticon-technical-support-1"></i> --> */}
                                    <img src={require("../../image/about/fully_commited.png")} alt=""/>
                                </div>
                                <div className="text">
                                    <h3 className="">Fully Committed  </h3>
                                    <p className="justify_txt">We're fully committed to delivering exceptional customer service and support.Our open platform for support allows you to easily monitor and manage your requests and queries, providing you with peace of mind and quick resolution of any issues. With Mucheco, you can count on personalized and dedicated support that truly puts your business first. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- <div className="each_about_section section-title">
                <h2>Our Mission: </h2>
                <p>We are in the business of helping Merchants, Retailers and Developer community grow their sales and
                    operational efficiency through innovation experience and empathy.</p>
            </div>
            <div className="each_about_section section-title">
                <h2>Our Commerce Vision: </h2>
                <p>Mucheco Commerce is a leading Ecommerce Technology company focused on helping retailers improve their
                    sales and profitability through technology, innovation and experience.</p>
                <p>We partner with clients and technology providers in all sectors and regions to identify their
                    highest-value opportunities, address their most critical challenges, and transform their businesses.
                </p>
                <p>We are committed to:</p>
                <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                    <li>Distinct competitive advantage through our experience and our solutions.</li>
                    <li>Driving continuous positive impact for our customers, partners and people.</li>
                    <li>Succeeding together with passion, trust and integrity.</li>
                    <li>Providing unparalleled personal growth opportunities.</li>
                </ul>
            </div>
            <div className="each_about_section section-title">
                <h2>Our Values: </h2>
                <p>Our commitment to our client’s success and our standards sets mucheco apart as a world-className professional services organisation.</p>
                <p>The five core values of mucheco are:</p>
                <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                    <li>Customer First</li>
                    <li>Quality and Integrity Always</li>
                    <li>Teaming up to Excel</li>
                    <li>Eager to Improve and Inspire</li>
                    <li>Take ownership to Deliver Fast</li>
                </ul>
            </div> --> */}
        </div>
    </section>
    {/* <!--====== end mission & Vission Section ======--> */}
    {/* <!--====== our customer Section start ======--> */}
    <div className="section pt-60 pb-60">
        <div className="container banner_over_cnt about_brand">
            <div className="row justify-content-center">
            <div className="section-title text-center mb-25 wow fadeInUp">
                <span className="sub-title sub-title-bg blue-light-bg">Our Customers</span>
                <h2 className="">Some of our customers </h2>
            </div>
            <div className="brands">
                <div className="brand">
                    <img src={require("../../image/mercato_br1.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/system_active_br2.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/desenfunda_br3.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/gather_br4.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/epolis_br5.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/sisti_br6.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/darvish_tech_br7.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/knoll_br8.png")} alt="" />
                </div>
                <div className="brand">
                    <img src={require("../../image/gor_br8.png")} alt="" />
                </div>

            </div>
            <a href="#" className="main-btn btn btn-purple wow fadeInUp about_brand_morebtn">load more</a>
        </div>
        </div>
    </div>
    {/* <!--====== our customer Section start ======--> */}
    {/* <!--====== Start Testimonial Section ======--> */}
    <section className="testimonial-area testimonial-style-two bg_cover pt-60 pb-100"
  style={{backgroundImage:`url(${testimonial})`}}>
  <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp" data-aos="fade-up"
                  data-aos-duration="800">
                  <span className="sub-title sub-title-bg blue-light-bg">Our testimonials</span>
                  <h2 className="">What Our Clients Say About
                      Our IT Solutions</h2>
              </div>
          </div>
      </div>
      {/* <!-- Slider --> */}
      <div className=" testimonial-slider-two" id="news_blog">
      <OwlCarousel className='owl-theme' items={3} loop margin={10} nav autoplay ={true}>
          <div className="item" data-aos="fade-up" data-aos-duration="500">
              <div className="testimonial-item wow fadeInUp">
                  <div className="wt-thumb-box">
                      <div className="thumb">
                          <img src={require("../../image/testimonial/1click4all-logo.jpg")} alt="testimonial image" />
                      </div>
                      <div className="comment">
                          <h5>“Quality Team”</h5>
                      </div>
                  </div>
                  <div className="wt-content">
                      <p>Mucheco, where impossible is possible.
                          This platform combines all marketplace to one place and makes thing easy to manage, easy to control, 
                          sync all data to one place.</p>
                      <div className="quote-title-box">
                          <div className="quote">
                              <i className="flaticon-quotation"></i>
                          </div>
                          <div className="author-title">
                              <h5>1CLICK4ALL</h5>
                              <span className="position">Kevin Schreiner</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="500">
              <div className="testimonial-item wow fadeInUp">
                  <div className="wt-thumb-box">
                      <div className="thumb">
                          <img src={require("../../image/testimonial/clint-gagan.jpg")} alt="testimonial image" />
                      </div>
                      <div className="comment">
                          <h5>“Clean Code”</h5>
                      </div>
                  </div>
                  <div className="wt-content">
                      <p>I would just like to say how please we are with our new eBay shop,
                          you and your team have done a great job and will certainly give you a call when we next need something doing. </p>
                      <div className="quote-title-box">
                          <div className="quote">
                              <i className="flaticon-quotation"></i>
                          </div>
                          <div className="author-title">
                              <h5>DEEPEEKA</h5>
                              <span className="position">Gagan Agrawal</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="500">
              <div className="testimonial-item wow fadeInUp">
                  <div className="wt-thumb-box">
                      <div className="thumb">
                          <img src={require("../../image/testimonial/drondaron.jpg")} alt="testimonial image" />
                      </div>
                      <div className="comment">
                          <h5>“Quality Team”</h5>
                      </div>
                  </div>
                  <div className="wt-content">
                      <p>They did some work for us re automatic emails for our eBay and Amazon stores. Job well done.
                          They showed us how to use it and did training for us on the application. Will definitely use them again. </p>
                      <div className="quote-title-box">
                          <div className="quote">
                              <i className="flaticon-quotation"></i>
                          </div>
                          <div className="author-title">
                              <h5>AUTO EMAILS</h5>
                              <span className="position">DoronDanon</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="500">
              <div className="testimonial-item wow fadeInUp">
                  <div className="wt-thumb-box">
                      <div className="thumb">
                          <img src={require("../../image/testimonial/m4karting.jpg")} alt="testimonial image" />
                      </div>
                      <div className="comment">
                          <h5>“Quality Team”</h5>
                      </div>
                  </div>
                  <div className="wt-content">
                      <p> I would just like to say how please we are with our new eBay shop,
                          you and your team have done a great job and will certainly give you a call when we next need something doing. </p>
                      <div className="quote-title-box">
                          <div className="quote">
                              <i className="flaticon-quotation"></i>
                          </div>
                          <div className="author-title">
                              <h5>M4 KARTING</h5>
                              <span className="position">Ian Harris</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          </OwlCarousel>
         

      </div>
      {/* <!-- Slider END --> */}

  </div>
</section>
    {/* <!--====== End Testimonial Section ======--> */}
    </div>
    </>
    );
}

export default WhychooseUs;