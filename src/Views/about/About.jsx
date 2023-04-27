import React from 'react';
import Header from '../Header';
import OwlCarousel from 'react-owl-carousel';
import testimonial from '../../image/testimonial-bg-1.jpg';
import { Helmet } from "react-helmet";
function About() {
 
  return (
    <>
     <div className="inner_pages_wrapper">
    <Header class='black_bg' />
    <Helmet>
                <title>mucheco</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
            </Helmet>

    {/* <!--====== Start Hero Section ======--> */}
    {/* <section class="hero-area">
        <div class="breadcrumbs-wrapper bg_cover">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="page-title-text text-center">
                            <h1 class="title">About Us</h1>
                            <ul class="breadcrumbs-link">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!--====== End Hero Section ======--> */}
    {/* <!--====== Start About Section ======--> */}
    <section class="fancy-about fancy-about-four pt-60 pb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="about-content-box mb-50" data-aos="fade-right" data-aos-duration="1000">
                        <div class="section-title mb-25 wow fadeInUp">
                            <span class="sub-title sub-title-bg blue-light-bg">why work with us?</span>
                            <h2 class="">We make great success achievable for any business</h2>
                        </div>
                        <p>Whether you're just starting out or looking to scale, we have all the solutions to help you reach your full potential.</p>
                        <blockquote class="quote-content mb-35 wow fadeInUp">
                            Stand out in the crowded eCommerce space and Let Mucheco®'s innovative team help you shine.
                        </blockquote>
                        <ul class="check-list list-circle-bg mb-20 wow fadeInUp">
                            <li>Technical Expertise</li>
                            <li>Vastly Experienced</li>
                            <li>Mutual by Nature</li>
                            <li>Fully Committed</li>
                        </ul>
                        {/* <!-- <a href="about.html" class="main-btn btn btn-purple wow fadeInUp">learn about more</a> --> */}
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about_top_rgt_img" data-aos="fade-left" data-aos-duration="1000">
                        <img src={require("../../image/about/about_top.jpg")} alt="" />
                    </div>
                    {/* <!-- <div class="img-holder-box mb-50" data-aos="fade-left" data-aos-duration="1000">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="experience-box wow fadeInDown">
                                    <div class="year">
                                        <h2>25</h2>
                                    </div>
                                </div>
                                <div class="img-holder wow fadeInUp">
                                    <img src="image/about/about-10.jpg" alt="About Image">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="img-holder wow fadeInDown">
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
    <section class="mission_vission pt-60 pb-60">
        <div class="container ">
            <div class="section-title text-center mb-25 wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <span class="sub-title sub-title-bg blue-light-bg">About Us</span>
                        <h2 class="">Driving Business Growth Through Quality IT Services</h2>
                    </div>
                </div>
               
            </div>
            <div class="about_para">
                <p>mucheco Commerce brings together a dedicated team of developers, designers, project managers,
                    QAs and analysts with world-class expertise in Magento and Mucheco CloudHub. Specialists in ecommerce,
                    integration and custom software development, we help ambitious businesses to grow…Mucheco® is a cloud-based application that simplifies online retailing across multiple marketplaces. We provide creative and responsive design services, integrated marketing solutions, and quality software services. Our team has expertise in IT education and training, and we've earned ISO 9001-2008 certification for our e-commerce solutions.</p>
            </div>
            <section class="faq-area about_acordion pt-50 pb-50">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="faq-img mb-50 wow fadeInLeft">
                                <img src={require("../../image/about/mission.png")} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="faq-content-box faq-content-box-one mb-50">
                                {/* <!-- <div class="section-title mb-30 wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                                    <span class="sub-title sub-title-bg blue-light-bg">Asked questions</span>
                                    <h2 class="text-underline">Any Questions On Mind?
                                    Asked Questions</h2>
                                </div> --> */}
                                <div class="faq-accordian faq-accordian-two wow fadeInUp" id="accordianOne" >
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                                                Our Mission:
                                            </a>
                                        </div>
                                        <div id="collapseOne" class="collapse show" data-parent="#accordianOne">
                                            <div class="card-body">
                                                <p>Our mission is to be a leader in the IT industry by providing innovative solutions that drive growth, improve efficiency, and create value for our customers. We are guided by the following five core principles:</p>
                                                <ul class="check-list list-circle-bg mb-20 wow fadeInUp">
                                                    <li>Customer centricity</li>
                                                    <li>Exceptional quality</li>
                                                    <li>Work in collaboration</li>
                                                    <li>Agile and nimble</li>
                                                    <li>Social Responsibility</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false">
                                                Our Vision:
                                            </a>
                                        </div>
                                        <div id="collapseTwo" class="collapse" data-parent="#accordianOne">
                                            <div class="card-body">
                                                <p>We envision a world where technology is harnessed to empower individuals and organizations to achieve their full potential. Our vision is anchored in the following five core principles:</p>
                                                    
                <ul class="check-list list-circle-bg mb-20 wow fadeInUp">
                    <li>Democratize technology </li>
                    <li>Push boundaries & solve problems </li>
                    <li>Sustainability for a better future</li>
                    <li>Embrace diversity & support all </li>
                    <li>Transform lives</li>
                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false">
                                                Our Values
                                            </a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-parent="#accordianOne">
                                            <div class="card-body">
                                                <p>Our values define who we are as a company and guide us in delivering exceptional services and solutions to our clientsthrough our five core values:</p>
                                                
                                                <ul class="check-list list-circle-bg mb-20 wow fadeInUp">
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
            {/* <!-- <div class="each_about_section section-title">
                <h2>Our Mission: </h2>
                <p>We are in the business of helping Merchants, Retailers and Developer community grow their sales and
                    operational efficiency through innovation experience and empathy.</p>
            </div>
            <div class="each_about_section section-title">
                <h2>Our Commerce Vision: </h2>
                <p>Mucheco Commerce is a leading Ecommerce Technology company focused on helping retailers improve their
                    sales and profitability through technology, innovation and experience.</p>
                <p>We partner with clients and technology providers in all sectors and regions to identify their
                    highest-value opportunities, address their most critical challenges, and transform their businesses.
                </p>
                <p>We are committed to:</p>
                <ul class="check-list list-circle-bg mb-20 wow fadeInUp">
                    <li>Distinct competitive advantage through our experience and our solutions.</li>
                    <li>Driving continuous positive impact for our customers, partners and people.</li>
                    <li>Succeeding together with passion, trust and integrity.</li>
                    <li>Providing unparalleled personal growth opportunities.</li>
                </ul>
            </div>
            <div class="each_about_section section-title">
                <h2>Our Values: </h2>
                <p>Our commitment to our client’s success and our standards sets mucheco apart as a world-class professional services organisation.</p>
                <p>The five core values of mucheco are:</p>
                <ul class="check-list list-circle-bg mb-20 wow fadeInUp">
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
    <div class="section pt-60 pb-60">
        <div class="container banner_over_cnt about_brand">
            <div class="row justify-content-center">
            <div class="section-title text-center mb-25 wow fadeInUp">
                <span class="sub-title sub-title-bg blue-light-bg">Our Customers</span>
                <h2 class="">Some of our customers </h2>
            </div>
            <div class="brands">
                <div class="brand">
                    <img src={require("../../image/mercato_br1.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/system_active_br2.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/desenfunda_br3.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/gather_br4.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/epolis_br5.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/sisti_br6.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/darvish_tech_br7.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/knoll_br8.png")} alt="" />
                </div>
                <div class="brand">
                    <img src={require("../../image/gor_br8.png")} alt="" />
                </div>

            </div>
            <a href="#" class="main-btn btn btn-purple wow fadeInUp about_brand_morebtn">load more</a>
        </div>
        </div>
    </div>
    {/* <!--====== our customer Section start ======--> */}
  {/* <!--====== Start Testimonial Section ======--> */}
  <section class="testimonial-area testimonial-style-two bg_cover pt-60 pb-100"
  style={{backgroundImage:`url(${testimonial})`}}>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-lg-6">
              <div class="section-title text-center mb-50 wow fadeInUp" data-aos="fade-up"
                  data-aos-duration="800">
                  <span class="sub-title sub-title-bg blue-light-bg">Our testimonials</span>
                  <h2 class="">What Our Clients Say About
                      Our IT Solutions</h2>
              </div>
          </div>
      </div>
      {/* <!-- Slider --> */}
      <div class=" testimonial-slider-two" id="news_blog">
      <OwlCarousel className='owl-theme' items={3} loop margin={10} nav>
          <div class="item" data-aos="fade-up" data-aos-duration="500">
              <div class="testimonial-item wow fadeInUp">
                  <div class="wt-thumb-box">
                      <div class="thumb">
                          <img src={require("../../image/testimonial/1click4all-logo.jpg")} alt="testimonial image" />
                      </div>
                      <div class="comment">
                          <h5>“Quality Team”</h5>
                      </div>
                  </div>
                  <div class="wt-content">
                      <p>Mucheco, where impossible is possible.
                          This platform combines all marketplace to one place and makes thing easy to manage, easy to control, 
                          sync all data to one place.</p>
                      <div class="quote-title-box">
                          <div class="quote">
                              <i class="flaticon-quotation"></i>
                          </div>
                          <div class="author-title">
                              <h5>1CLICK4ALL</h5>
                              <span class="position">Kevin Schreiner</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-duration="500">
              <div class="testimonial-item wow fadeInUp">
                  <div class="wt-thumb-box">
                      <div class="thumb">
                          <img src="../../image/testimonial/clint-gagan.jpg" alt="testimonial image" />
                      </div>
                      <div class="comment">
                          <h5>“Clean Code”</h5>
                      </div>
                  </div>
                  <div class="wt-content">
                      <p>I would just like to say how please we are with our new eBay shop,
                          you and your team have done a great job and will certainly give you a call when we next need something doing. </p>
                      <div class="quote-title-box">
                          <div class="quote">
                              <i class="flaticon-quotation"></i>
                          </div>
                          <div class="author-title">
                              <h5>DEEPEEKA</h5>
                              <span class="position">Gagan Agrawal</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div class="item" data-aos="fade-up" data-aos-duration="500">
              <div class="testimonial-item wow fadeInUp">
                  <div class="wt-thumb-box">
                      <div class="thumb">
                          <img src={require("../../image/testimonial/drondaron.jpg")} alt="testimonial image" />
                      </div>
                      <div class="comment">
                          <h5>“Quality Team”</h5>
                      </div>
                  </div>
                  <div class="wt-content">
                      <p>They did some work for us re automatic emails for our eBay and Amazon stores. Job well done.
                          They showed us how to use it and did training for us on the application. Will definitely use them again. </p>
                      <div class="quote-title-box">
                          <div class="quote">
                              <i class="flaticon-quotation"></i>
                          </div>
                          <div class="author-title">
                              <h5>AUTO EMAILS</h5>
                              <span class="position">DoronDanon</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div class="item" data-aos="fade-up" data-aos-duration="500">
              <div class="testimonial-item wow fadeInUp">
                  <div class="wt-thumb-box">
                      <div class="thumb">
                          <img src={require("../../image/testimonial/m4karting.jpg")} alt="testimonial image" />
                      </div>
                      <div class="comment">
                          <h5>“Quality Team”</h5>
                      </div>
                  </div>
                  <div class="wt-content">
                      <p> I would just like to say how please we are with our new eBay shop,
                          you and your team have done a great job and will certainly give you a call when we next need something doing. </p>
                      <div class="quote-title-box">
                          <div class="quote">
                              <i class="flaticon-quotation"></i>
                          </div>
                          <div class="author-title">
                              <h5>M4 KARTING</h5>
                              <span class="position">Ian Harris</span>
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

export default About;