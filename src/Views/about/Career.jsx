import React from 'react';
import Header from '../Header';
import { Helmet } from "react-helmet";

function Career() {
 
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
                                <h1 class="title">Career</h1>
                                <ul class="breadcrumbs-link">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">Career</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!--====== End Hero Section ======--> */}
        {/* <!--====== Start Features Section ======--> */}
        <section class="features-area features-style-four pt-60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="text-wrapper">
                            <div class="section-title mb-25 wow fadeInUp" data-aos="fade-up">
                                <span class="sub-title sub-title-bg blue-light-bg">WHY JOIN US?</span>
                                <h2 class="">Expertise, dedication, and results - that's our team.</h2>
                            </div>
                            
                            <div class="block-style-twentyOne d-flex wow fadeInUp" data-aos="fade-up">
                                <div class="icon purple-blue-bg">
                                    <img src={require("../../image/career/secure-shield.png")} alt=""/>
                                </div>
                                <div class="text">
                                    <h4>Job security and stability</h4>
                                    <p>Secure and reliable employment with long-term growth potential.</p>
                                </div>
                            </div>
                            <div class="block-style-twentyOne d-flex wow fadeInUp" data-aos="fade-up">
                                <div class="icon blue-light-bg">
                                    <img src={require("../../image/career/increment.png")} alt=""/>
                                </div>
                                <div class="text">
                                    <h4>Competitive Salary & Bonuses</h4>
                                    <p>We offer competitive salaries and comprehensive benefits packages.</p>
                                </div>
                            </div>
                            <div class="block-style-twentyOne d-flex wow fadeInUp" data-aos="fade-up">
                                <div class="icon purple-blue-bg">
                                    <img src={require("../../image/menu_icons/career.png")} alt=""/>
                                </div>
                                <div class="text">
                                    <h4>Career development</h4>
                                    <p>Grow your career with training, mentorship, and advancement opportunities.</p>
                                </div>
                            </div>
                            <div class="block-style-twentyOne d-flex wow fadeInUp" data-aos="fade-up">
                                <div class="icon blue-light-bg">
                                    <img src={require("../../image/career/work-flexible.png")} alt=""/>
                                </div>
                                <div class="text">
                                    <h4>Flexible Timings</h4>
                                    <p>Achieve work-life balance with flexible schedules and remote options.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img-holder-box">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="img-holder border-top-left-radius wow fadeInLeft" data-aos="fade-left">
                                        <img src={require("../../image/career/img-7.jpg")} alt="Features Image"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="img-holder wow fadeInUp" data-aos="fade-up">
                                        <img src={require("../../image/career/img-8.jpg")} alt="Features Image"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="img-holder wow fadeInDown" data-aos="fade-down">
                                        <img src={require("../../image/career/img-9.jpg")} alt="Features Image"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="img-holder border-bottom-right-radius mt-30 wow fadeInRight" data-aos="fade-right">
                                        <img src={require("../../image/career/img-10.jpg")} alt="Features Image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End Features Section ======--> */}
        {/* <!--====== Start Features Section ======--> */}
        <section class="features-area pt-120 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title mb-25 wow fadeInUp text-center" data-aos="fade-up">
                            <span class="sub-title sub-title-bg blue-light-bg">HOW WE HIRE?</span>
                            <h2 class="">Candidate skills, passion, and personality over qualifications</h2>
                        </div>
                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="block-style-twentyTwo animate-icon d-flex align-items-start mb-30 wow fadeInUp" data-wow-delay=".2s" data-aos="fade-up" data-aos-duration="400">
                            <div class="icon">
                                <i class="fal fa-briefcase"></i>
                            </div>
                            <div class="text">
                                <h3>CV screening</h3>
                                <p>Assess qualifications, experience, leadership, and teamwork skills.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="block-style-twentyTwo animate-icon d-flex align-items-start mb-30 wow fadeInUp" data-wow-delay=".3s" data-aos="fade-up" data-aos-duration="600">
                            <div class="icon">
                                <i class="fal fa-atom-alt"></i>
                            </div>
                            <div class="text">
                                <h3>Interview</h3>
                                <p>Evaluate fit, motivation, culture, and communication skills.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="block-style-twentyTwo animate-icon d-flex align-items-start mb-30 wow fadeInUp" data-wow-delay=".4s" data-aos="fade-up" data-aos-duration="800">
                            <div class="icon">
                                <i class="fal fa-bell"></i>
                            </div>
                            <div class="text">
                                <h3>Skills assessment</h3>
                                <p>Test technical skills, problem-solving, design, or project management.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="block-style-twentyTwo animate-icon d-flex align-items-start mb-30 wow fadeInUp" data-wow-delay=".5s" data-aos="fade-up" data-aos-duration="1000">
                            <div class="icon">
                                <i class="fal fa-headphones-alt"></i>
                            </div>
                            <div class="text">
                                <h3>Offer and onboarding</h3>
                                <p>Collaborate on offers, negotiate, conduct background checks, and onboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End Features Section ======--> */}
        {/* <!--====== Start Job Section ======--> */}
        <section class="job-area job-style-one light-gray-bg pb-130 pt-130">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title mb-25 wow fadeInUp text-center" data-aos="fade-up">
                            <span class="sub-title sub-title-bg blue-light-bg">OUR CURRENT OPENINGS</span>
                            {/* <!-- <h2 class="">We are hiring for diverse roles and backgrounds, apply now.</h2> --> */}
                            <h2 class="">We do not have any open positions available at this time.</h2>
                        </div>
                        
                    </div>
                </div>
                <div class="no_vacancy">
                    <img src={require("../../image/career/no_vacancy.png")} alt=""/>
                </div>
                {/* <!-- <div class="open_vacancy">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="400">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="600">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="800">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="1000">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="1200">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".7s" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="1400">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".8s" style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="1600">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-job-item text-center mb-30 wow fadeInUp" data-wow-delay=".9s" style="visibility: visible; animation-delay: 0.9s; animation-name: fadeInUp;" data-aos="fade-up" data-aos-duration="1800">
                            <div class="icon">
                                <img src="image/icon-3.png" alt="">
                            </div>
                            <div class="text">
                                <h3 class="title"><a href="#">Senior Design</a></h3>
                                <span class="salary"><i class="far fa-tags"></i>$250 - 859/ monthly</span>
                                <p>Quis autem veleum reprehe
                                    nderit quin voluptate</p>
                                <a href="#" class="main-btn btn-purple">apply now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="button text-center mt-30" data-wow-delay=".8s">
                            <a href="#" class="main-btn btn-blue-light ">View more jobs</a>
                        </div>
                    </div>
                </div>
            </div> --> */}
            </div>
        </section>
        {/* <!--====== End Job Section ======--> */}
   
     </div>
   
     
    </>
    );
}

export default Career;