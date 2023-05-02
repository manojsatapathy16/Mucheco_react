import React , {useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import bannerimage from "../image/banner1.webp";
import AOS from 'aos';
import '../css/aos.css'
import Header from './Header';
import { Helmet } from "react-helmet";
import CursorCircle from '../components/CursorCircle';
import { Outlet } from 'react-router-dom';


function Home_page() {

 // aos initilize start
 const brands=['mercato_br1.png','system_active_br2.png','desenfunda_br3.png','gather_br4.png','epolis_br5.png','sisti_br6.png',
'darvish_tech_br7.png','knoll_br8.png','gor_br8.png','dream-furnishings_br9.png']

const post_blog=[{post_img:'latest_news1.jpg',post_date:' 08 Feb 2023',post_name:'Donec a porttitor phari sod tellus Nunc quis erosn.',
 post_description:'Praesent nec dapibus enim, ut pulvinar metus. Suspendisse arcu orci, pulvinar vitae...'},

 {post_img:'latest_news2.jpg',post_date:' 10 Aug 2023',post_name:'Donec a porttitor phari sod tellus Nunc quis erosn.',
 post_description:'Praesent nec dapibus enim, ut pulvinar metus. Suspendisse arcu orci, pulvinar vitae...'},

 {post_img:'latest_news3.jpg',post_date:' 16 Jun 2023',post_name:'Donec a porttitor phari sod tellus Nunc quis erosn.',
 post_description:'Praesent nec dapibus enim, ut pulvinar metus. Suspendisse arcu orci, pulvinar vitae...'}
]
 

  return (
    <>
    {/* <CursorCircle> */}


   
  <Header page='home-page' />
   {/* <!--====== Start Hero Section ======--> */}
   <Helmet>
                <title>mucheco</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
            </Helmet>
   <section className="hero-area">
        <div className="hero-wrapper-one hero-slider-one slick-initialized slick-slider slick-dotted slick-vertical">
            <div className="slick-list draggable" >
                <div className="slick-track">
                    <div className="single-slider bg_cover slick-slide slick-current slick-active"
                        style={{backgroundImage: `url(${bannerimage})`}} data-slick-index="2"
                        aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide02"
                        aria-describedby="slick-slide-control02">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="hero-content text-left">
                                       
                                    <h1 data-aos="fade-down" data-aos-duration="500" 
                                            className="">Revolutionizing Your <br/> Online
                                            <span style={{color: '#DB1C00'}}>P</span>r<span style={{color: '#3ac0eb'}}>e</span>se<span style={{color:'#FA6800'}}>n</span>ce</h1>
                                        <p data-aos="fade-up" data-aos-duration="500">Empowering businesses to conquer the digital marketplace<br/> with Specialized <span className="banner_para_span">eCommerce Technology</span></p>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
    {/* <!--====== End Hero Section ======--> */}
    
    {/* <!--====== Start About Section ======--> */}
    <section className="fancy-about fancy-about-one pt-50 position-relative pb-45" id="about_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="about-img-box mb-50 wow fadeInLeft" data-aos="fade-right" data-aos-duration="1000">
                        <img src={require("../image/about-1.jpg")} alt="About image" />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="text-wrapper mb-50 wow fadeInRight" data-aos="fade-left" data-aos-duration="1000">
                        <div className="section-title mb-20">
                            <span className="sub-title red-dark text-underline">About us</span>
                            <h2 className="text-transform side_line">Discover our story of innovation & excellence.</h2>
                        </div>
                        <p>Welcome to Mucheco®, your one-stop solution for simplifying online retailing across multiple marketplaces like eBay, Amazon, Rakuten, Sears, Jet.com, and Newegg. We are a cloud-based application that offers cost-effective solutions for online selling, along with creative and responsive design services that ensure your online presence stands out.
                            
                            </p>
                        <a href="/about" className="main-btn bg_blu">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End About Section ======--> */}
    {/* <!--====== Start Features Section ======--> */}
    <section className="fancy-features light-gray-bg pt-120 pb-90 Features_start home_what_we_do">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center mb-45 wow fadeInUp" data-aos="fade-up">
                        <span className="sub-title red-dark text-underline">what we do?</span>
                        <h2 className="text-uppercase">Bringing your online vision to life with innovative design and development.</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-40 wow fadeInUp" data-aos="fade-up" data-aos-duration="500">
                        <div className="icon">
                            <img src={require("../image/icon-2.png")} alt="" />
                        </div>
                        <div className="text">
                            <h3 className="text-underline"><a href="/service/inventory-management">Multichannel Management</a></h3>
                            <p>We enable seamless communication and coordination across various channels with omnichannel integration.
                            </p>
                            {/* <!-- <a href="#" className="red-dark">Read More</a> --> */}
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-40 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
                        <div className="icon">
                            <img src={require("../image/icon-3.png")} alt="" />
                        </div>
                        <div className="text">
                            <h3 className="text-underline"><a href="/service/discovery-and-design">Development and Support</a></h3>
                            <p>We offer end-to-end software development and maintenance services with agile methodologies. 
                            </p>
                            {/* <!-- <a href="#" className="red-dark">Read More</a> --> */}
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="block-style-two animate-icon mb-40 wow fadeInUp" data-aos="fade-up" data-aos-duration="900">
                        <div className="icon">
                            <img src={require("../image/icon-4.png")} alt="" />
                        </div>
                        <div className="text">
                            <h3 className="text-underline"><a href="/service/search-engine-optimization">Digital Marketing</a></h3>
                            <p>Our data-driven approach to SEO, PPC, and SMM helps to increase online visibility.
                            </p>
                            {/* <!-- <a href="#" className="red-dark">Read More</a> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End Features Section ======--> */}
    {/* <!-- case study section start --> */}
    <div className="case_study">
        <div className="container">
            <div className="section-title mb-45 wow fadeInUp case_study_title">
                <div className="blank_case_study"></div>
                <div className="case_title_main">
                    <span className="sub-title red-dark text-underline">latest Case Studies</span>
                    <h2 className="text-uppercase">A diversified resilient portfolio.</h2>

                </div>
            </div>
            {/* <!-- Slider --> */}
            <div className="" id="case_studyy">
            <OwlCarousel className='owl-theme' items={3} loop margin={10} nav autoplay ={true}>
                <div className="item">
                    <img src={require("../image/case-study/uk_pallet.jpg")} alt="" width="100%" />
                    <div className="case_img_overtxt">
                        <div className="case_img_overtxt_details">
                            <p>UK Pallet Commercial Delivery</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={require("../image/case_study_item2.jpg")} alt="" width="100%" />
                    <div className="case_img_overtxt">
                        <div className="case_img_overtxt_details">about image2</div>
                    </div>
                </div>
                <div className="item">
                    <img src={require("../image/case_study_item3.jpg")} alt="" width="100%" />
                    <div className="case_img_overtxt">
                        <div className="case_img_overtxt_details">about image3</div>
                    </div>
                </div>
                <div className="item">
                    <img src={require("../image/case_study_item1.jpg")} alt="" width="100%" />
                    <div className="case_img_overtxt">
                        <div className="case_img_overtxt_details">about image1</div>
                    </div>
                </div>
                <div className="item">
                    <img src={require("../image/case_study_item2.jpg")} alt="" width="100%" />
                    <div className="case_img_overtxt">
                        <div className="case_img_overtxt_details">about image2</div>
                    </div>
                </div>
                </OwlCarousel>
            </div>
            {/* <!-- Slider END --> */}
        </div>

    </div>
    {/* <!-- case study section end --> */}
  
    {/* <!--====== Start Service Section ======--> */}
    <section className="service-area dark-black-bg pt-130 pb-130" id="service_section">
        <div className="container">
            <div className="row align-items-center service-style-one">
                <div className="col-lg-4">
                    <div className="text-wrapper mb-40 wow fadeInLeft" data-aos="fade-right" data-aos-duration="1000">
                        <div className="section-title section-title mb-20">
                            <span className="sub-title red-dark text-underline">HOW WE WORK?</span>
                            <h2 className="text-uppercase">Innovation doesn't happen by chance. 
                            </h2>
                        </div>
                        <p>Partnering with you for success, every step of the way. From effective communication, to expert planning, and flawless execution.</p>
                        <a href="/Portfolio" className="main-btn">explore projects</a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="service-wrapper">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="block-style-three animate-icon border-right-1 wow fadeInUp"
                                >
                                <div className="service_wrapper_icon_txt" data-aos="fade-up" data-aos-duration="300">
                                    <div className="icon">
                                        <img src={require("../image/service_icon2.png")} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3 className="title"><a href="#">Strategy</a></h3>
                                        <p>We align the project scope with client's requirements, conduct feasibility studies and define project roadmap.</p>
                                    </div>
                                </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="block-style-three animate-icon pr-lg-0 wow fadeInUp">
                                    <div className="service_wrapper_icon_txt" data-aos="fade-up" data-aos-duration="500">
                                        <div className="icon">
                                            <img src={require("../image/service_icon1.png")} alt="" />
                                        </div>
                                        <div className="text">
                                            <h3 className="title"><a href="#">Design & Development</a></h3>
                                            <p>Our experts develop high-quality software with robust architecture, optimized coding, and responsive design.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="block-style-three animate-icon border-right-1 wow fadeInUp">
                                <div className="service_wrapper_icon_txt" data-aos="fade-up" data-aos-duration="700">
                                    <div className="icon">
                                        <img src={require("../image/service_icon3.png")} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3 className="title"><a href="#">Testing</a></h3>
                                        <p>Our QA team ensures software quality with various testing methodologies, like manual, automated, and regression testing. </p>
                                    </div>
                                </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="block-style-three animate-icon pr-lg-0 wow fadeInUp">
                                    <div className="service_wrapper_icon_txt" data-aos="fade-up" data-aos-duration="900">
                                        <div className="icon">
                                            <img src={require("../image/service_icon4.png")} alt="" />
                                        </div>
                                        <div className="text">
                                            <h3 className="title"><a href="#">Deploy</a></h3>
                                            <p>We use a continuous integration, and delivery (CI/CD) pipeline during deployment for seamless delivery.</p>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ====== End Service Section ====== --> */}
    {/* <!-- portfolio section start --> */}
    <div className="portfolio" id="portfolio">
        <div className="container">
            <div className="portfolio-title mb-45 wow fadeInUp portfolio_title">
                <div className="portfolio_title_main side_line">
                    <span className="sub-title red-dark text-underline">Testimonials</span>
                    <h2 className="text-uppercase">Our Client Reviews</h2>

                </div>
            </div>
            {/* <!-- Slider --> */}
            <div className="" id="portfolioo">
            <OwlCarousel className='owl-theme' items={2} loop margin={10} nav autoplay ={true}>
                <div className="item">
                    <div className="testimonial-item">
                        <div className="item-content basic">
                            <span><img src={require("../image/quote_portfolio.png")} className="quote_img" alt="image" /></span>
                            <p>Mucheco, where impossible is possible.
                                 This platform combines all marketplace to one place and makes thing easy to manage, easy to control, 
                                 sync all data to one place.</p>
                        </div>
                        <div className="testimonial-content">
                            <div className="image-wrap">
                                <img src={require("../image/testimonial/1click4all-logo.jpg")} className="attachment-large size-large wp-post-image" alt="" />
                            </div>
                            <div className="testimonial-information">
                                <div className="testimonial-name">1CLICK4ALL</div>
                                <span className="testimonial-title">Kevin Schreiner</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-item">
                        <div className="item-content basic">
                            <span><img src={require("../image/quote_portfolio.png")} className="quote_img" alt="image" /></span>
                            <p>I would just like to say how please we are with our new eBay shop,
                                 you and your team have done a great job and will certainly give you a call when we next need something doing. </p>
                        </div>
                        <div className="testimonial-content">
                            <div className="image-wrap">
                                <img src={require("../image/testimonial/m4karting.jpg")} className="attachment-large size-large wp-post-image" alt="" />
                            </div>
                            <div className="testimonial-information">
                                <div className="testimonial-name">M4 KARTING</div>
                                <span className="testimonial-title">Ian Harris</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-item">
                        <div className="item-content basic">
                            <span><img src={require("../image/quote_portfolio.png")} className="quote_img" alt="image" /></span>
                            <p>I was very happy with the team of MucheCo for my website design and integration with amazon, 
                                eBay. The team is available at any time. I am very satisfied and happy with the office setup and lovely team.</p>
                        </div>
                        <div className="testimonial-content">
                            <div className="image-wrap">
                                <img src={require("../image/testimonial/clint-gagan.jpg")} className="attachment-large size-large wp-post-image" alt="" />
                            </div>
                            <div className="testimonial-information">
                                <div className="testimonial-name">DEEPEEKA</div>
                                <span className="testimonial-title">Gagan Agrawal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-item">
                        <div className="item-content basic">
                            <span><img src={require("../image/quote_portfolio.png")} className="quote_img" alt="image" /></span>
                            <p>They did some work for us re automatic emails for our eBay and Amazon stores. Job well done.
                                 They showed us how to use it and did training for us on the application. Will definitely use them again.</p>
                        </div>
                        <div className="testimonial-content">
                            <div className="image-wrap">
                                <img src={require("../image/testimonial/drondaron.jpg")} className="attachment-large size-large wp-post-image" alt="" />
                            </div>
                            <div className="testimonial-information">
                                <div className="testimonial-name">AUTO EMAILS</div>
                                <span className="testimonial-title">DoronDanon</span>
                            </div>
                        </div>
                    </div>
                </div>
                </OwlCarousel>

            </div>
            {/* <!-- Slider END --> */}
        </div>

    </div>
    {/* <!-- portfolio section end --> */}

    {/* <!-- news&blog section start --> */}
    <div className="news_blog">
        <div className="container">
            <div className="portfolio-title mb-30 wow fadeInUp portfolio_title">
                <div className="portfolio_title_main side_line">
                    <span className="sub-title red-dark text-underline">News & BLog</span>
                    <h2 className="text-uppercase">Read Our Latest News & Articles</h2>

                </div>
            </div>
            {/* <!-- Slider --> */}
            <div className="" id="news_blog">
            <OwlCarousel className='owl-theme' items={3} loop margin={10} nav autoplay ={true}>
            {post_blog.map((each,key)=>{
                return(                  
                <div className="item" key={key}>
                <div className="blog-inner-wrap ">
                    <div className="image-wrap">
                        <a className="pointer-events"
                            href="#"
                            tabIndex="0">
                            <img src={require(`../image/${each.post_img}`)}
                                className="post-image"
                                alt="" /> </a>
                        <div className="date"><i className='far fa-clock'></i>
                            {each.post_date}</div>
                    </div>
                    <div className="blog-content">
                        <h3 className="blog-name"><a className="pointer-events"
                                href="#">{each.post_name}</a></h3>
                        <p>{each.post_description}</p>
                        <div className="blog-btn-part btn_borer_no">
                            <a className="blog-btn"
                                href="#">
                                <span className="btn-txt">Get Started</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
                )
            })}

               
                </OwlCarousel>

            </div>
            {/* <!-- Slider END --> */}
        </div>

    </div>
    {/* <!-- news&blog section end --> */}
    {/* <!--====== Start Features Section ======--> */}
    <section className="fancy-features banner_over_cnt">
        <div className="continer-fluid p-0">
            <div className="features-style-one pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title mb-45 wow fadeInUp"
                                style={{visibility: 'visible'}}>
                                <p className="sub-title red-dark">25 Glorious Years  <span> of Crafting </span></p>
                                <h2 className="text-uppercase">Success Stories for Global Brands</h2>
                            </div>
                        </div>
                    </div>
                    <div className="brands">
                        {brands.map((each,key)=>{
                            return(
                            <div className="brand" key={key}>
                            <img src={require(`../image/${each}`)} alt="" />
                        </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End Features Section ======--> */}
    {/* </CursorCircle> */}
    <Outlet/>
    </>
    );
}

export default Home_page;