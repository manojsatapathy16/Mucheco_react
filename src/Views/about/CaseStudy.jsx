import React from 'react';
import Header from '../Header';
import { Helmet } from "react-helmet";

import { NavLink } from 'react-router-dom';
function CaseStudy() {
 
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
                            <h1 class="title">Case Study</h1>
                            <ul class="breadcrumbs-link">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Case Study</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!--====== End Hero Section ======--> */}
    {/* <!--====== Start case_study_landing Section ======--> */}
    <section class="case_study_page">
        <div class="section-title text-center mb-25 wow fadeInUp">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <span class="sub-title sub-title-bg blue-light-bg">CASE STUDIES</span>
                    <h2 class="">IT Excellence Showcased</h2>
                </div>
            </div>
           
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-xs-1 case-item " >
                    <div class="case-item_inner" data-aos="fade-up" data-aos-duration="400">

                        <img loading="lazy"
                            src={require("../../image/case-study/uk_pallet.jpg")}
                            class="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                            alt="" decoding="async" />
                        <div class="case-content">
                            <div class="p-icon">
                                <NavLink to='/about/CaseStudy/CaseStudy_Details'><i aria-hidden="true" class="fas fa-arrow-right"></i> </NavLink>
                            </div>

                            <h3 class="p-title">
                                <span class="p-category"> <a href="#" rel="tag">UK PALLET</a></span>
                                <a href="">Commercial Deliveries</a>
                            </h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-1 case-item ">
                    <div class="case-item_inner" data-aos="fade-up" data-aos-duration="600">

                        <img loading="lazy"
                            src={require("../../image/case-study/2-520x640.jpg")}
                            class="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                            alt="" decoding="async"/>
                        <div class="case-content">
                            <div class="p-icon">
                                <a href="Case_Study_details.html"><i aria-hidden="true" class="fas fa-arrow-right"></i> </a>
                            </div>

                            <h3 class="p-title">
                                <span class="p-category"> <a href="#" rel="tag">Business</a></span>
                                <a href="">Business Analytics</a>
                            </h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-1 case-item ">
                    <div class="case-item_inner" data-aos="fade-up" data-aos-duration="800">

                        <img loading="lazy"
                            src={require("../../image/case-study/3-520x640.jpg")}
                            class="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                            alt="" decoding="async"/>
                        <div class="case-content">
                            <div class="p-icon">
                                <a href="Case_Study_details.html"><i aria-hidden="true" class="fas fa-arrow-right"></i> </a>
                            </div>

                            <h3 class="p-title">
                                <span class="p-category"> <a href="#" rel="tag">Business</a></span>
                                <a href="">Business Analytics</a>
                            </h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-1 case-item ">
                    <div class="case-item_inner" data-aos="fade-up" data-aos-duration="400">

                        <img loading="lazy"
                            src={require("../../image/case-study/4-1-520x640.png")}
                            class="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                            alt="" decoding="async"/>
                        <div class="case-content">
                            <div class="p-icon">
                                <a href="Case_Study_details.html"><i aria-hidden="true" class="fas fa-arrow-right"></i> </a>
                            </div>

                            <h3 class="p-title">
                                <span class="p-category"> <a href="#" rel="tag">Business</a></span>
                                <a href="">Business Analytics</a>
                            </h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-1 case-item ">
                    <div class="case-item_inner" data-aos="fade-up" data-aos-duration="600">

                        <img loading="lazy"
                            src={require("../../image/case-study/5-1-520x640.png")}
                            class="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                            alt="" decoding="async"/>
                        <div class="case-content">
                            <div class="p-icon">
                                <a href="Case_Study_details.html"><i aria-hidden="true" class="fas fa-arrow-right"></i> </a>
                            </div>

                            <h3 class="p-title">
                                <span class="p-category"> <a href="#" rel="tag">Business</a></span>
                                <a href="">Business Analytics</a>
                            </h3>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-xs-1 case-item ">
                    <div class="case-item_inner" data-aos="fade-up" data-aos-duration="800">

                        <img loading="lazy"
                            src={require("../../image/case-study/6-2-520x640.png")}
                            class="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                            alt="" decoding="async"/>
                        <div class="case-content">
                            <div class="p-icon">
                                <a href="Case_Study_details.html"><i aria-hidden="true" class="fas fa-arrow-right"></i> </a>
                            </div>

                            <h3 class="p-title">
                                <span class="p-category"> <a href="#" rel="tag">Business</a></span>
                                <a href="">Business Analytics</a>
                            </h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====== End case_study_landing Section ======--> */}
   
     </div>
   
     
    </>
    );
}

export default CaseStudy;