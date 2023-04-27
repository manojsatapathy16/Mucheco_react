import { React, useState, useLayoutEffect, useEffect } from 'react';
import Header from './Header';
import ctabg from "../image/cta-bg-2.jpg";
import testimonialbg from "../image/testimonial-bg-1.jpg";
import Loader from '../components/Loader';
import { CallApi_Without_Token } from '../Services/Client';
import { API } from '../Services/Apis';
import { Helmet } from "react-helmet";


function ServiceDetails(props) {
    const api_type = props.type
    const [detailsData, setDetailsData] = useState([]);
    const [loading, setLoading] = useState(false);
    // contact submit and validation
    const initialValues = { firstname: '', lastname: '', phone: '', email: '', message: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSuccess, setIsSuccess] = useState({})

    useLayoutEffect(() => {
        fetchInfo();
    }, [api_type])

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            sendData(formValues);

            setFormValues(initialValues);
        }
    }, [formErrors]);

    const fetchInfo = async () => {
        setLoading(true)
        var formdata = new FormData();
        formdata.append("request_type", api_type);
        const data = await CallApi_Without_Token('POST', API.SERVICE_DETAILS, formdata)
        setLoading(false)
        if (data.status === 1) {
            setDetailsData(data)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }
    // onchange handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    // onsubmit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    //   send data to backend
    const sendData = (value) => {
        var formdata = new FormData();
        formdata.append("request_type", 'service');
        formdata.append("service", detailsData?.data?.readmore?.title);
        formdata.append("first_name", value.firstname);
        formdata.append("last_name", value.lastname);
        formdata.append("email", value.email);
        formdata.append("phone", value.phone);
        formdata.append("message", value.message);
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://88.208.224.110/mucheco2023api/api/contact_us.php", requestOptions)
            .then(response => response.text())
            .then(result => setIsSuccess(JSON.parse(result)))
            .catch(error => console.log('error', error));

    }
    // validate form
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
            errors.firstname = 'First name is required!';
        }
        if (!values.lastname) {
            errors.lastname = 'Last name is required!';
        }
        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!';
        }
        if (!values.phone) {
            errors.phone = 'phone number is required!';
        } else if (!values.phone.length == 10) {
            errors.phone = 'phone number is required!';
        }

        return errors;
    };

    return (
        <>
            <div className="inner_pages_wrapper">
                <Header class='black_bg' />

                <Loader show={loading} />
                <Helmet>
                <title>mucheco</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
            </Helmet>

                {/* <!--====== Start About Section ======--> */}
                <section class="fancy-about fancy-about-five pt-50 pb-80 my_fancy">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="text-wrapper" data-aos="fade-right" data-aos-duration="1000">
                                    <div class="experience-box wow fadeInLeft">

                                        <div class="content">
                                            <div class="section-title service_details_heading mb-25">
                                                <span class="sub-title sub-title-bg blue-light-bg">{detailsData?.data?.readmore?.title}</span>
                                                <h2 class="">{detailsData?.data?.readmore?.heading}</h2>
                                            </div>

                                            <blockquote>
                                                <p>{detailsData?.data?.readmore?.desc_short}
                                                    <span id="dots">...</span><span id="more">
                                                        {detailsData?.data?.readmore?.desc_long}</span>
                                                </p>
                                                <button onclick="myFunction()" id="readmore">Read More <i class="fal fa-long-arrow-right"></i></button>
                                            </blockquote>
                                            <ul class="check-list list-circle-bg mb-20 wow fadeInUp absolute_check">
                                                <li>{detailsData?.data?.readmore?.lis[0]}</li>
                                                <li>{detailsData?.data?.readmore?.lis[1]}</li>
                                                <li>{detailsData?.data?.readmore?.lis[2]}</li>
                                                <li>{detailsData?.data?.readmore?.lis[3]} </li>
                                                <li>{detailsData?.data?.readmore?.lis[4]}</li>
                                                <li>{detailsData?.data?.readmore?.lis[5]}</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="service_details_top_right" data-aos="fade-left" data-aos-duration="1000">
                                    <img src={require("../image/service_details/about-9.jpg")} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>

                </section>
                {/* <!--====== End About Section ======--> */}

                {/* <!--====== Start counter Section ======--> */}
                <section class="features-area position-relative mb-90-minus" data-aos="fade-up" data-aos-duration="1000">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-6 counter-column">
                                <div class="counter_column_inn">
                                    <div class="counter_icon">
                                        <img src={require("../image/service_details/customer-feedback.png")} alt="" />
                                    </div>
                                    <div class="counter-item">
                                        <h2 class="number"><span class="count count-num">{detailsData?.data?.liveCount[0]?.count}</span>+</h2>
                                        <p>{detailsData?.data?.liveCount[0]?.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-6 counter-column">
                                <div class="counter_column_inn">
                                    <div class="counter_icon">
                                        <img src={require("../image/service_details/evaluation.png")} alt="" />
                                    </div>
                                    <div class="counter-item">
                                        <h2 class="number"><span class="count count-num">{detailsData?.data?.liveCount[1]?.count}</span>+</h2>
                                        <p>{detailsData?.data?.liveCount[1]?.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-6 counter-column">
                                <div class="counter_column_inn">
                                    <div class="counter_icon">
                                        <img src={require("../image/service_details/complete.png")} alt="" />
                                    </div>
                                    <div class="counter-item">
                                        <h2 class="number"><span class="count count-num">{detailsData?.data?.liveCount[2]?.count}</span>+</h2>
                                        <p>{detailsData?.data?.liveCount[2]?.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End counter Section ======--> */}
                {/* <!--====== Start Features Section ======--> */}
                <section class="features-area light-gray-bg pt-220 pb-100">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="section-title text-center mb-50 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                                    <span class="sub-title sub-title-bg blue-light-bg">what we do</span>
                                    <h2 class="">{detailsData?.data?.key_features_title}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp" data-aos="fade-up" data-aos-duration="500">
                                    <div class="icon">
                                        {/* <!-- <i class="flaticon-help"></i> --> */}
                                        <img src={require("../image/flaticon-help.png")} alt="" />
                                    </div>
                                    <div class="text">
                                        <h3 class="">{detailsData?.data?.key_features[0]?.title}</h3>
                                        <p>{detailsData?.data?.key_features[0]?.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp" data-aos="fade-up" data-aos-duration="700">
                                    <div class="icon">
                                        {/* <!-- <i class="flaticon-technical-support"></i> --> */}
                                        <img src={require("../image/expertise.png")} alt="" />
                                    </div>
                                    <div class="text">
                                        <h3 class="">{detailsData?.data?.key_features[1]?.title}</h3>
                                        <p>{detailsData?.data?.key_features[1]?.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp" data-aos="fade-up" data-aos-duration="900">
                                    <div class="icon">
                                        {/* <!-- <i class="flaticon-it"></i> --> */}
                                        <img src={require("../image/powerful_database.png")} alt="" />
                                    </div>
                                    <div class="text">
                                        <h3 class="">{detailsData?.data?.key_features[2]?.title}</h3>
                                        <p>{detailsData?.data?.key_features[2]?.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp" data-aos="fade-up" data-aos-duration="1100">
                                    <div class="icon">
                                        {/* <!-- <i class="flaticon-technical-support-1"></i> --> */}
                                        <img src={require("../image/brand_representation.png")} alt="" />
                                    </div>
                                    <div class="text">
                                        <h3 class="">{detailsData?.data?.key_features[3]?.title}</h3>
                                        <p>{detailsData?.data?.key_features[3]?.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp" data-aos="fade-up" data-aos-duration="1100">
                                    <div class="icon">
                                        {/* <!-- <i class="flaticon-technical-support-1"></i> --> */}
                                        <img src={require("../image/product_engineering.png")} alt="" />
                                    </div>
                                    <div class="text">
                                        <h3 class="">{detailsData?.data?.key_features[4]?.title}</h3>
                                        <p>{detailsData?.data?.key_features[4]?.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block-style-twenty animate-icon d-flex mb-30 wow fadeInUp" data-aos="fade-up" data-aos-duration="1100">
                                    <div class="icon">
                                        {/* <!-- <i class="flaticon-technical-support-1"></i> --> */}
                                        <img src={require("../image/technical-support.png")} alt="" />
                                    </div>
                                    <div class="text">
                                        <h3 class="">{detailsData?.data?.key_features[5]?.title}</h3>
                                        <p>{detailsData?.data?.key_features[5]?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End Features Section ======--> */}

                {/* <!--====== Start Fancy Block Section ======--> */}
                <section class="fancy-text-block fancy-text-block-eleven pt-130 pb-80">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="img-holder-box mb-20">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="img-holder border-top-left-radius mb-30 wow fadeInLeft" data-aos="fade-right" data-aos-duration="1000">
                                                <img src={require("../image/gallery-9.jpg")} alt="" />
                                            </div>
                                            <div class="img-holder border-bottom-left-radius mb-30 wow fadeInLeft" data-aos="fade-right" data-aos-duration="1000">
                                                <img src={require("../image/gallery-10.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="img-holder mb-30 wow fadeInRight" data-aos="fade-right" data-aos-duration="1000">
                                                <img src={require("../image/gallery-11.jpg")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="text-wrapper mb-50">
                                    <div class="section-title mb-25 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                                        <span class="sub-title sub-title-bg blue-light-bg">{detailsData?.data?.why_choose?.title}</span>
                                        <h2 class="">{detailsData?.data?.why_choose?.heading}</h2>
                                        <p>{detailsData?.data?.why_choose?.description}</p>
                                    </div>

                                    <ul class="check-list list-circle-bg mb-20 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                                        <li>{detailsData?.data?.why_choose?.lis[0]}</li>
                                        <li>{detailsData?.data?.why_choose?.lis[1]}</li>
                                        <li>{detailsData?.data?.why_choose?.lis[2]}</li>
                                        <li>{detailsData?.data?.why_choose?.lis[3]}</li>
                                        <li>{detailsData?.data?.why_choose?.lis[4]}</li>
                                        <li>{detailsData?.data?.why_choose?.lis[5]}</li>
                                    </ul>
                                    {/* <a href="about.html" class="main-btn btn-blue-light wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">Learn More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End Fancy Block Section ======--> */}
                {/* <!--====== Start workflow Section ======--> */}
                <section class="work_flow_section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="section-title text-center mb-50 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                                    <span class="sub-title sub-title-bg blue-light-bg">HOW ITS DONE?</span>
                                    <h2 class="">Process Flowchart</h2>
                                </div>
                            </div>
                        </div>
                        <div class="flow_items">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="elementor-widget-container" data-aos="fade-right" data-aos-duration="400">
                                        <div class="pt-process-step pt-process-2">
                                            <img class="pt-before-img"
                                                src={require("../image/arrow-1.png")}
                                                alt="arrow-img" />
                                            <div class="pt-process-icon"><span><img src={require("../image/project_planning.png")} alt="" /></span><span
                                                class="pt-process-number">{detailsData?.data?.process[0]?.sl}</span></div>
                                            <div class="pt-process-info">
                                                <h4 class="pt-process-title">{detailsData?.data?.process[0]?.title}</h4>
                                                <p class="pt-process-description">{detailsData?.data?.process[0]?.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="elementor-widget-container" data-aos="fade-right" data-aos-duration="600">
                                        <div class="pt-process-step pt-process-2">
                                            <img decoding="async" class="pt-before-img"
                                                src={require("../image/arrow-2.png")}
                                                alt="arrow-img" />
                                            <div class="pt-process-icon"><span><img src={require("../image/sitemap_servicedetails.png")} alt="" /></span><span
                                                class="pt-process-number">{detailsData?.data?.process[1]?.sl}</span></div>
                                            <div class="pt-process-info">
                                                <h4 class="pt-process-title">{detailsData?.data?.process[1]?.title}</h4>
                                                <p class="pt-process-description">{detailsData?.data?.process[1]?.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="elementor-widget-container" data-aos="fade-right" data-aos-duration="800">
                                        <div class="pt-process-step pt-process-2">
                                            <img decoding="async" class="pt-before-img end_arrow"
                                                src={require("../image/arrow-1.png")}
                                                alt="arrow-img" />
                                            <div class="pt-process-icon"><span><img src={require("../image/content_creation.png")} alt="" /></span><span
                                                class="pt-process-number">{detailsData?.data?.process[2]?.sl}</span></div>
                                            <div class="pt-process-info">
                                                <h4 class="pt-process-title">{detailsData?.data?.process[2]?.title}</h4>
                                                <p class="pt-process-description">{detailsData?.data?.process[2]?.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="row even_row_flow_items">
                                <div class="col-lg-4">
                                    <div class="elementor-widget-container" data-aos="fade-left" data-aos-duration="1400">
                                        <div class="pt-process-step pt-process-2">
                                            {/* <!-- <img class="pt-before-img"
                            src="image/arrow-2.png"
                            alt="arrow-img"> --> */}
                                            <div class="pt-process-icon"><span><img src={require("../image/site_launch.png")} alt="" /></span><span
                                                class="pt-process-number">{detailsData?.data?.process[5]?.sl}</span></div>
                                            <div class="pt-process-info">
                                                <h4 class="pt-process-title">{detailsData?.data?.process[5]?.title}</h4>
                                                <p class="pt-process-description">{detailsData?.data?.process[5]?.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="elementor-widget-container" data-aos="fade-left" data-aos-duration="1200">
                                        <div class="pt-process-step pt-process-2">
                                            <img decoding="async" class="pt-before-img"
                                                src={require("../image/arrow-2.png")}
                                                alt="arrow-img" />
                                            <div class="pt-process-icon"><span><img src={require("../image/testing_service_details.png")} alt="" /></span><span
                                                class="pt-process-number">{detailsData?.data?.process[4]?.sl}</span></div>
                                            <div class="pt-process-info">
                                                <h4 class="pt-process-title">{detailsData?.data?.process[4]?.title}</h4>
                                                <p class="pt-process-description">{detailsData?.data?.process[4]?.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="elementor-widget-container" data-aos="fade-left" data-aos-duration="1000">
                                        <div class="pt-process-step pt-process-2">
                                            <img decoding="async" class="pt-before-img"
                                                src={require("../image/arrow-1.png")}
                                                alt="arrow-img" />
                                            <div class="pt-process-icon"><span><img src={require("../image/start_planning.png")} alt="" /></span><span
                                                class="pt-process-number">{detailsData?.data?.process[3]?.sl}</span></div>
                                            <div class="pt-process-info">
                                                <h4 class="pt-process-title">{detailsData?.data?.process[3]?.title}</h4>
                                                <p class="pt-process-description">{detailsData?.data?.process[3]?.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End workflow Section ======--> */}
                {/* 
      <!--====== Start gallery Section ======--> */}
                <section class="galllery_section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="section-title text-center mb-50 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                                    <span class="sub-title sub-title-bg blue-light-bg">OUR PORTFOLIO</span>
                                    <h2 class="">{detailsData?.data?.portfolio}+ Successful Projects <br /> Explore Our Work</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row masonry-row" style={{ position: 'relative', height: '1455.18px' }}>
                            <div class="col-lg-6 portfolio-column" style={{ position: 'absolute', left: '0%', top: '0px' }}>
                                <div class="portfolio-block-four bg-one text-center wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} data-aos="fade-up" data-aos-duration="500">
                                    <div class="portfolio-img">
                                        <img src={require("../image/service_details/mercato_place_home.png")} alt="portfolio image" />
                                        <div class="portfolio-hover">
                                            <div class="hover-content">
                                                <a href="https://mercatoplace.com/" target="_blank" class="img-popup"><i class="far fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-content">
                                        <h3 class="title"><a href="project-details.html">Mercato Marketplace</a></h3>
                                        <span class="category">Web Design And Development</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 portfolio-column" style={{ position: 'absolute', left: '50%', top: '0px' }}>
                                <div class="portfolio-block-four bg-two text-center wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }} data-aos="fade-up" data-aos-duration="700">
                                    <div class="portfolio-img">
                                        <img src={require("../image/service_details/bookodisha_home.png")} alt="portfolio image" />
                                        <div class="portfolio-hover">
                                            <div class="hover-content">
                                                <a href="https://www.bookodisha.com/" target="_blank" class="img-popup"><i class="far fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-content">
                                        <h3 class="title"><a href="project-details.html">Booking Engine</a></h3>
                                        <span class="category">Web Development And Booking</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 portfolio-column" style={{ position: 'absolute', left: '50%', top: '612.617px' }}>
                                <div class="portfolio-block-four bg-three text-center wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }} data-aos="fade-up" data-aos-duration="900">
                                    <div class="portfolio-img">
                                        <img src={require("../image/service_details/bookodisha_home.png")} alt="portfolio image" />
                                        <div class="portfolio-hover">
                                            <div class="hover-content">
                                                <a href="https://www.bookodisha.com/" target="_blank" class="img-popup"><i class="far fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-content">
                                        <h3 class="title"><a href="project-details.html">Booking Engine</a></h3>
                                        <span class="category">Web Development And Booking</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 portfolio-column" style={{ position: 'absolute', left: '0%', top: '728.85px' }}>
                                <div class="portfolio-block-four bg-four text-center wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }} data-aos="fade-up" data-aos-duration="1100">
                                    <div class="portfolio-img">
                                        <img src={require("../image/service_details/mercato_place_home.png")} alt="portfolio image" />
                                        <div class="portfolio-hover">
                                            <div class="hover-content">
                                                <a href="https://mercatoplace.com/" target="_blank" class="img-popup"><i class="far fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-content">
                                        <h3 class="title"><a href="project-details.html">Mercato Marketplace</a></h3>
                                        <span class="category">Web Design And Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="button mt-50 text-center wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }} data-aos="fade-up" data-aos-duration="1300">
                                    <a href="project-1.html" class="main-btn btn-orange-dark">View more gallery</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!--====== End gallery Section ======--> */}
                {/* <!--====== Start CTA Section ======--> */}
                <section class="cta-area cta-style-three bg_cover pt-135 pb-140" style={{ backgroundImage: `url(${ctabg})` }}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="cta-content-box text-center wow fadeInUp">
                                    <h2>Ready To Get Our Design Services ?</h2>
                                    <ul class="button">
                                        <li><a href="/contact" class="main-btn btn-blue-light">Contact Us</a></li>
                                        <li><a href="service-1.html" class="main-btn btn-purple">Our services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End CTA Section ======--> */}
                {/* <!--====== Start Contact Section ======--> */}
                <section class="contact-area contact-style-three bg_cover pt-130 pb-80"
                    style={{ backgroundImage: `url(${testimonialbg})` }}>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-5">
                                <div class="contact-section-box mb-50 wow fadeInLeft">
                                    <div class="section-title mb-25">
                                        <span class="sub-title sub-title-bg blue-light-bg">NEED ANY HELP?</span>
                                        <h2 class="">Let's discuss your IT needs.</h2>
                                    </div>
                                    <p>Get expert IT solutions to propel your business forward with our custom software development, e-commerce, and digital marketing services to help you succeed in the digital age.</p>
                                    <ul class="social-link">
                                        <li><a href="https://www.facebook.com/muchecodotcom" target='_blank'><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/mucheco" target='_blank'><i class="fab fa-linkedin"></i></a></li>
                                        <li><a href="https://twitter.com/muchecodotcom" target='_blank'><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.youtube.com/c/muchecodotcom" target='_blank'><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="contact-wrapper mb-50 wow fadeInRight">
                                    <form class="contact-form" onSubmit={handleSubmit}>
                                        {(isSuccess.status == 1) ? (<p className='success_message'>{isSuccess.message}</p>) : null}
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <div class="form_group">
                                                    <input type="text" class="form_control" placeholder="First Name*" name="firstname" value={formValues.firstname} onChange={handleChange} />
                                                </div>
                                                <p className='error'>{formErrors.firstname}</p>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <div class="form_group">
                                                    <input type="text" class="form_control" placeholder="Last Name*" name="lastname" value={formValues.lastname} onChange={handleChange} />
                                                </div>
                                                <p className='error'>{formErrors.lastname}</p>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <div class="form_group">
                                                    <input type="email" class="form_control" placeholder="Email Address*" name="email" value={formValues.email} onChange={handleChange} />
                                                </div>
                                                <p className='error'>{formErrors.email}</p>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <div class="form_group">
                                                    <input type="text" class="form_control" placeholder="Phone Number*" name="phone" value={formValues.phone} onChange={handleChange} />
                                                </div>
                                                <p className='error'>{formErrors.phone}</p>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form_group">
                                                    <textarea class="form_control" placeholder="Write Message" name="message" value={formValues.message} onChange={handleChange}
                                                        required></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form_group">
                                                    <div class="col-lg-12">
                                                        <button class="main-btn btn-purple">Get free consultations</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End Contact Section ======--> */}
            </div>


        </>
    );
}

export default ServiceDetails;