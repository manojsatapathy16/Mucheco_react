import React from 'react';
import Header from '../Header';
import OwlCarousel from 'react-owl-carousel';
import testimonial from '../../image/testimonial-bg-1.jpg';
import { Helmet } from "react-helmet";
import { Outlet } from 'react-router-dom';
function About() {
 
  return (
    <>
     <div className="inner_pages_wrapper">
    <Header class_bg='black_bg' />
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
                            <h1 className="title">About Us</h1>
                            <ul className="breadcrumbs-link">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">About Us</li>
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
                            <span className="sub-title sub-title-bg blue-light-bg">why work with us?</span>
                            <h2 className="">We make great success achievable for any business</h2>
                        </div>
                        <p>Whether you're just starting out or looking to scale, we have all the solutions to help you reach your full potential.</p>
                        <blockquote className="quote-content mb-35 wow fadeInUp">
                            Stand out in the crowded eCommerce space and Let Mucheco®'s innovative team help you shine.
                        </blockquote>
                        <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                            <li>Technical Expertise</li>
                            <li>Vastly Experienced</li>
                            <li>Mutual by Nature</li>
                            <li>Fully Committed</li>
                        </ul>
                        {/* <!-- <a href="about.html" className="main-btn btn btn-purple wow fadeInUp">learn about more</a> --> */}
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about_top_rgt_img" data-aos="fade-left" data-aos-duration="1000">
                        <img src={require("../../image/about/about_top.jpg")} alt="" />
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
    <section className="mission_vission pt-60 pb-60">
        <div className="container ">
            <div className="section-title text-center mb-25 wow fadeInUp">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <span className="sub-title sub-title-bg blue-light-bg">About Us</span>
                        <h2 className="">Driving Business Growth Through Quality IT Services</h2>
                    </div>
                </div>
               
            </div>
            <div className="about_para">
                <p>mucheco Commerce brings together a dedicated team of developers, designers, project managers,
                    QAs and analysts with world-className expertise in Magento and Mucheco CloudHub. Specialists in ecommerce,
                    integration and custom software development, we help ambitious businesses to grow…Mucheco® is a cloud-based application that simplifies online retailing across multiple marketplaces. We provide creative and responsive design services, integrated marketing solutions, and quality software services. Our team has expertise in IT education and training, and we've earned ISO 9001-2008 certification for our e-commerce solutions.</p>
            </div>
            <section className="faq-area about_acordion pt-50 pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-img mb-50 wow fadeInLeft">
                                <img src={require("../../image/about/mission.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content-box faq-content-box-one mb-50">
                                {/* <!-- <div className="section-title mb-30 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                                    <span className="sub-title sub-title-bg blue-light-bg">Asked questions</span>
                                    <h2 className="text-underline">Any Questions On Mind?
                                    Asked Questions</h2>
                                </div> --> */}
                                <div className="faq-accordian faq-accordian-two wow fadeInUp" id="accordianOne" >
                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                                                Our Mission:
                                            </a>
                                        </div>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordianOne">
                                            <div className="card-body">
                                                <p>Our mission is to be a leader in the IT industry by providing innovative solutions that drive growth, improve efficiency, and create value for our customers. We are guided by the following five core principles:</p>
                                                <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                                                    <li>Customer centricity</li>
                                                    <li>Exceptional quality</li>
                                                    <li>Work in collaboration</li>
                                                    <li>Agile and nimble</li>
                                                    <li>Social Responsibility</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false">
                                                Our Vision:
                                            </a>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordianOne">
                                            <div className="card-body">
                                                <p>We envision a world where technology is harnessed to empower individuals and organizations to achieve their full potential. Our vision is anchored in the following five core principles:</p>
                                                    
                <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                    <li>Democratize technology </li>
                    <li>Push boundaries & solve problems </li>
                    <li>Sustainability for a better future</li>
                    <li>Embrace diversity & support all </li>
                    <li>Transform lives</li>
                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false">
                                                Our Values
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse" data-parent="#accordianOne">
                                            <div className="card-body">
                                                <p>Our values define who we are as a company and guide us in delivering exceptional services and solutions to our clientsthrough our five core values:</p>
                                                
                                                <ul className="check-list list-circle-bg mb-20 wow fadeInUp">
                                                    <li>Customer first always</li>
                                                    <li>Uncompromising Quality and Integrity</li>
                                                    <li>Collaborative Excellence</li>
                                                    <li>Relentless Innovation and Inspiration</li>
                                                    <li>Full Ownership and Speed of Delivery</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
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

    {/* <Outlet /> */}
     
    </>
    );
}

export default About;