import React from 'react';
import Header from '../Header';
import { Helmet } from "react-helmet";

import { NavLink } from 'react-router-dom';
function CaseStudy() {

    return (
        <>
            <div className="inner_pages_wrapper">
                <Header class_bg='black_bg' />
                <Helmet>
                    <title>mucheco</title>
                    <meta name="description" content="Helmet application" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                </Helmet>


                {/* <!--====== Start case_study_landing Section ======--> */}
                <section className="case_study_page">
                    <div className="section-title text-center mb-25 wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <span className="sub-title sub-title-bg blue-light-bg">CASE STUDIES</span>
                                <h2 className="">IT Excellence Showcased</h2>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-xs-1 case-item " >
                                <div className="case-item_inner" data-aos="fade-up" data-aos-duration="400">

                                    <img loading="lazy"
                                        src={require("../../image/case-study/uk_pallet.jpg")}
                                        className="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                                        alt="" decoding="async" />
                                    <div className="case-content">
                                        <div className="p-icon">
                                            <NavLink to='/about/CaseStudy/CaseStudy_Details'><i aria-hidden="true" className="fas fa-arrow-right"></i> </NavLink>
                                        </div>

                                        <h3 className="p-title">
                                            <span className="p-category"> <NavLink to='/about/CaseStudy/CaseStudy_Details' rel="tag">UK PALLET</NavLink></span>
                                            <NavLink to='/about/CaseStudy/CaseStudy_Details'>Commercial Deliveries</NavLink>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-1 case-item ">
                                <div className="case-item_inner" data-aos="fade-up" data-aos-duration="600">

                                    <img loading="lazy"
                                        src={require("../../image/case-study/2-520x640.jpg")}
                                        className="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                                        alt="" decoding="async" />
                                    <div className="case-content">
                                        <div className="p-icon">
                                            <a href="Case_Study_details.html"><i aria-hidden="true" className="fas fa-arrow-right"></i> </a>
                                        </div>

                                        <h3 className="p-title">
                                            <span className="p-category"> <a href="#" rel="tag">Business</a></span>
                                            <a href="">Business Analytics</a>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-1 case-item ">
                                <div className="case-item_inner" data-aos="fade-up" data-aos-duration="800">

                                    <img loading="lazy"
                                        src={require("../../image/case-study/3-520x640.jpg")}
                                        className="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                                        alt="" decoding="async" />
                                    <div className="case-content">
                                        <div className="p-icon">
                                            <a href="Case_Study_details.html"><i aria-hidden="true" className="fas fa-arrow-right"></i> </a>
                                        </div>

                                        <h3 className="p-title">
                                            <span className="p-category"> <a href="#" rel="tag">Business</a></span>
                                            <a href="">Business Analytics</a>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-1 case-item ">
                                <div className="case-item_inner" data-aos="fade-up" data-aos-duration="400">

                                    <img loading="lazy"
                                        src={require("../../image/case-study/4-1-520x640.png")}
                                        className="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                                        alt="" decoding="async" />
                                    <div className="case-content">
                                        <div className="p-icon">
                                            <a href="Case_Study_details.html"><i aria-hidden="true" className="fas fa-arrow-right"></i> </a>
                                        </div>

                                        <h3 className="p-title">
                                            <span className="p-category"> <a href="#" rel="tag">Business</a></span>
                                            <a href="">Business Analytics</a>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-1 case-item ">
                                <div className="case-item_inner" data-aos="fade-up" data-aos-duration="600">

                                    <img loading="lazy"
                                        src={require("../../image/case-study/5-1-520x640.png")}
                                        className="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                                        alt="" decoding="async" />
                                    <div className="case-content">
                                        <div className="p-icon">
                                            <a href="Case_Study_details.html"><i aria-hidden="true" className="fas fa-arrow-right"></i> </a>
                                        </div>

                                        <h3 className="p-title">
                                            <span className="p-category"> <a href="#" rel="tag">Business</a></span>
                                            <a href="">Business Analytics</a>
                                        </h3>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-1 case-item ">
                                <div className="case-item_inner" data-aos="fade-up" data-aos-duration="800">

                                    <img loading="lazy"
                                        src={require("../../image/case-study/6-2-520x640.png")}
                                        className="attachment-solvency_portfolio-slider size-solvency_portfolio-slider wp-post-image"
                                        alt="" decoding="async" />
                                    <div className="case-content">
                                        <div className="p-icon">
                                            <a href="Case_Study_details.html"><i aria-hidden="true" className="fas fa-arrow-right"></i> </a>
                                        </div>

                                        <h3 className="p-title">
                                            <span className="p-category"> <a href="#" rel="tag">Business</a></span>
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