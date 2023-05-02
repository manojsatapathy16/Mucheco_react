import React, { useState } from 'react';
import Header from './Header';
import blogBanner from "../image/blog/banner-1.jpg";
import { useEffect } from 'react';
import UploadBlog from '../components/UploadBlog';
import Loader from '../components/Loader';
import { CallApi_Without_Token } from '../Services/Client';
import { API } from '../Services/Apis';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Insight() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [insightData, setInsightData] = useState([]);
    const [loading, setLoading] = useState(false);
    const compairDataString = localStorage.getItem("credential");
    const compairData = JSON.parse(compairDataString);

    useEffect(() => {
        getLoginStatus();
        fetchInfo();
    }, [isLogin])

    const getLoginStatus = () => {
        setIsLogin(compairData);
    }





    const fetchInfo = async () => {
        setLoading(true)
        var formdata = new FormData();
        formdata.append("request_type", 'get_blog_list');
        const data = await CallApi_Without_Token('POST', API.INSIGHT_PAGE, formdata)
        setLoading(false)
        if (data.status === 1) {
            setInsightData(data)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }
    // console.log(insightData.data[0]);


    const readmoreHandler = (e) => {
        const clickedId = e.target.id;
        navigate('/insight/insight-details', { state: { id: clickedId } });
    }




    return (
        <>
            <Helmet>
                <title>Insight</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
            </Helmet>
            <div className="inner_pages_wrapper">
                <Header class_bg='black_bg' />
                <Loader show={loading} />
                {/* <!--====== Start insight Section ======--> */}
                <section className="blog-area blog-standard-style pt-60 pb-95">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-standard-wrapper">
                                    {Array.isArray(insightData?.data) ? <>
                                        {insightData?.data.map((each, key) => {

                                            return (
                                                <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".2s" key={key} id={each.id}>
                                                    {(each.media == '') ? (<div className="post-thumbnail">
                                                        {each?.media ? <img src={each.media} alt="blog image" /> : null}
                                                        <div className="play-content">
                                                            <a href={each.media_link} className="video-popup"><i className="fas fa-play"></i></a>
                                                        </div>
                                                    </div>) : (<div className="post-thumbnail">
                                                        {each?.media ? <img src={each.media} alt="blog image" /> : null}
                                                    </div>)}

                                                    <div className="entry-content">

                                                        <div className="post-meta">
                                                            <ul>
                                                                <li><span><i className="far fa-calendar-alt"></i><a href="#">{each.created_at}</a></span></li>

                                                            </ul>
                                                        </div>
                                                        {each?.title ? <h3 className="title"><a href="blog-details.html" dangerouslySetInnerHTML={{ __html: each.title }}></a></h3> : null}
                                                        {each?.short_description ? <p dangerouslySetInnerHTML={{ __html: each.short_description }}></p> : null}
                                                        <span href="" onClick={readmoreHandler} id={each.id} className="main-btn filled-btn">Read More</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </> : null}
                                    {/* <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="post-thumbnail">
                                        <img src={require("../image/blog/blog-standard-1.jpg")} alt="blog image" />
                                    </div>
                                    <div className="entry-content">
                                        
                                        <div className="post-meta">
                                            <ul>
                                                <li><span><i className="far fa-calendar-alt"></i><a href="#">25 november 2021</a></span></li>
                                               
                                            </ul>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">Stay Ahead of the Game: Top 9 Android App Development Trends for 2023</a></h3>
                                        <p>With the growing popularity of mobile application development, developers are continually exploring innovative concepts to enhance the user experience. Consumer preferences, technological advancements, and external factors all contribute to the evolution of these trends. Therefore, it is essential to stay informed about the latest trends in Android app development to provide innovative solutions that meet the client's needs.</p>
                                        <a href="/insight/insight-details" className="main-btn filled-btn">Read More</a>
                                    </div>
                                </div>
                                <div className="blog-post-item blog-post-with-video mb-50 wow fadeInUp" data-wow-delay=".3s" >
                                    <div className="post-thumbnail">
                                        <img src={require("../image/blog/blog-standard-2.jpg")} alt="blog image" />
                                        <div className="play-content">
                                            <a href="https://www.youtube.com/watch?v=AT6oSIDbGkw" className="video-popup"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        
                                        <div className="post-meta">
                                            <ul>
                                                <li><span><i className="far fa-calendar-alt"></i><a href="#">25 november 2021</a></span></li>
                                               
                                            </ul>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">The Edge Effect: The Impact of Edge Computing on 5G and Web 3.0</a></h3>
                                        <p>The evolution of the internet has revolutionized the way we live and work. With each iteration, the internet has become faster, more reliable, and more efficient. The latest advancements in technology, including 5G and Web 3.0, are set to bring about the next wave of innovation. These technologies, combined with edge computing, will transform the way we interact with the digital world. In this blog post, we will explore the emergence of edge computing and how it is set to impact the future of technology.</p>
                                        <a href="/insight/insight-details" className="main-btn filled-btn">Read More</a>
                                    </div>
                                </div>
                              
                                <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".6s" >
                                    <div className="post-thumbnail">
                                        <img src={require("../image/blog/blog-standard-4.jpg")} alt="blog image" />
                                        
                                    </div>
                                    <div className="entry-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li><span><i className="far fa-calendar-alt"></i><a href="#">25 november 2021</a></span></li>
                                               
                                            </ul>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">Empowering Your Business with AI-driven Insights and Analytics</a></h3>
                                        <p>In today's fast-paced and competitive business world, making informed decisions is essential to stay ahead of the competition. Business leaders often rely on data and insights to guide their decision-making process, but analyzing large volumes of data can be a daunting task. This is the point where Artificial Intelligence (AI) enters the picture.</p>
                                        <a href="/insight/insight-details" className="main-btn filled-btn">Read More</a>
                                    </div>
                                </div> */}
                                    {/* <div className="page-pagination mb-35 wow fadeInUp" data-wow-delay=".7s">
                                        <ul>
                                            <li><a href="#"><i className="far fa-angle-left"></i></a></li>
                                            <li><a href="#">01</a></li>
                                            <li><a href="#">02</a></li>
                                            <li><a href="#">03</a></li>
                                            <li><a href="#">04</a></li>
                                            <li><a href="#"><i className="far fa-angle-right"></i></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar-widget-area">
                                    {(isLogin == 1) ? (<UploadBlog />) : (null)}

                                    {/* <div className="widget search-widget mb-35 wow fadeInUp" >
                                    <h4 className="widget-title">Search <span className="line"></span></h4>
                                    <form>
                                        <div className="form_group">
                                            <input type="email" className="form_control" placeholder="Search Here" name="email" required="" />
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </form>
                                </div> */}
                                    <div className="widget recent-post-widget mb-35 wow fadeInUp" >
                                        <h4 className="widget-title">Recent News <span className="line"></span></h4>
                                        <ul className="recent-post-list">
                                            <li className="post-thumbnail-content">
                                                <img src={require("../image/blog/post-thumb-1.jpg")} alt="post image" />
                                                <div className="post-title-date">
                                                    <h6><a href="blog-details.html">Bake Layers Accesilitye Testing Supporte</a></h6>
                                                    <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">25 november 2021</a></span>
                                                </div>
                                            </li>
                                            <li className="post-thumbnail-content">
                                                <img src={require("../image/blog/post-thumb-2.jpg")} alt="post image" />
                                                <div className="post-title-date">
                                                    <h6><a href="blog-details.html">Bake Layers Accesilitye Testing Supporte</a></h6>
                                                    <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">25 november 2021</a></span>
                                                </div>
                                            </li>
                                            <li className="post-thumbnail-content">
                                                <img src={require("../image/blog/post-thumb-3.jpg")} alt="post image" />
                                                <div className="post-title-date">
                                                    <h6><a href="blog-details.html">Bake Layers Accesilitye Testing Supporte</a></h6>
                                                    <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">25 november 2021</a></span>
                                                </div>
                                            </li>
                                            <li className="post-thumbnail-content">
                                                <img src={require("../image/blog/post-thumb-4.jpg")} alt="post image" />
                                                <div className="post-title-date">
                                                    <h6><a href="blog-details.html">Bake Layers Accesilitye Testing Supporte</a></h6>
                                                    <span className="posted-on"><i className="far fa-calendar-alt"></i><a href="#">25 november 2021</a></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-banner mb-35 wow fadeInUp">
                                        <div className="banner-content bg_cover" style={{ backgroundImage: `url(${blogBanner})` }}>
                                            <h3>Ready To Get our Expert IT Services?</h3>
                                            <a href="/mucheco_react/contact" className="main-btn main-btn-sm main-btn-blue">CONTACT US</a>
                                        </div>
                                    </div>
                                    <div className="widget widget-tag-cloud mb-35 wow fadeInUp">
                                        <h4 className="widget-title">Best Tags<span className="line"></span></h4>
                                        <a href="#">Technology</a>
                                        <a href="#">service</a>
                                        <a href="#">team</a>
                                        <a href="#">solutions</a>
                                        <a href="#">consultancy</a>
                                        <a href="#">It Company</a>
                                        <a href="#">agency</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End insight Section ======--> */}
            </div>

        </>
    );
}

export default Insight;