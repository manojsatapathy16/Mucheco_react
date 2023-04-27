import React, { useState, useEffect } from 'react';
import Header from './Header';
import { getUniqueValues } from '../Utils/Utils';
import {useLocation} from 'react-router-dom'
import { API } from '../Services/Apis';
import { Helmet } from "react-helmet";
import Loader from '../components/Loader';

function Portfolio(props) {
        let location  = useLocation();
       
    const [loading, setLoading] = useState(false);
    const [portfolio_lang, setportfolio_lang] = useState([]);
    const [allPortfolioData, setallPortfolioData] = useState();
    const [clickedLang, setClickedLang] = useState('All');
    useEffect(() => {
        fetchPortfolio();
    }, []);
    const fetchPortfolio = () => {
        var formdata = new FormData();
        formdata.append("request_type", "portfolio");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        setLoading(true)

        fetch(API.PORTFOLIO, requestOptions)
        
            .then(response => response.text())
            .then(result => {
                setLoading(false)
                let res = JSON.parse(result)
                setallPortfolioData(res);


                let data = getUniqueValues(res)

                setportfolio_lang(data)

                // setPortfolioAllData(JSON.parse(result))
            }

            )
            .catch(error => console.log('error', error));
    }
    // var searchkey = portfolioFilterdData?.data[0]?.search_key;
    console.log(portfolio_lang);
    console.log(allPortfolioData);



    // const portfolio_lang = ['All', 'Magento', 'Wordpress', 'Mobile App', 'React', 'Angular', 'Shopify', 'bigcommerce'];
    const [fullImgUrl, setFullImgUrl] = useState('');
    const fullImgData = {};
    const showFullImageHandle = (url) => {
        setFullImgUrl(url)
    }
    const cancelFullImageHandle = () => {
        setFullImgUrl('');
    }





    return (
        <>
            <div className="inner_pages_wrapper">
                <Header class='black_bg'/>
                <Loader show={loading} />
                <Helmet>
                <title>mucheco</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
            </Helmet>
                {/* <!--====== Start portfolio Section ======--> */}
                <section class="portfolio-area pt-80 pb-70" id="masonry-portfolio">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="section-title text-center mb-50">
                                    <span class="sub-title sub-title-bg blue-light-bg">OUR PORTFOLIO</span>
                                    <h2 class="">2563+ Successful Projects<br />
                                        Explore Our Work</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="portfolio-filter-wrap">
                                <div class="portfolio-filter-button text-center wow" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                    <ul class="filter-btn">
                                        {Array.isArray(portfolio_lang) ? <>
                                            {portfolio_lang?.map(each => <li onClick={() => setClickedLang(each)} className={each == clickedLang ? 'active' : null}>{each}</li>)}
                                        </> : null}

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row masonry-row" style={{ position: 'relative' }}>
                            {Array.isArray(allPortfolioData?.data) ? <>
                                {allPortfolioData?.data.map(each => {
                                    if(clickedLang===each?.search_key)
                                    {
                                        return (
                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                <div class="portfolio-block-five mb-50 wow fadeInUp">
                                                    <div class="portfolio-img">
                                                        <img src={each?.image} alt="project Image" />
                                                        <div className="portfolio-img-overlay" onClick={() => { showFullImageHandle(each?.image) }}>
                                                            <span><i class="far fa-plus"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="portfolio-content">
                                                        <h3 class="title"><a href="project-details.html" class="">{each?.site_name}</a></h3>
                                                        <a href="project-details.html" class="cat-btn">{each?.language}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }else if(clickedLang==='All'){
                                        return (
                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                <div class="portfolio-block-five mb-50 wow fadeInUp">
                                                    <div class="portfolio-img">
                                                        <img src={each?.image} alt="project Image" />
                                                        <div className="portfolio-img-overlay" onClick={() => { showFullImageHandle(each?.image) }}>
                                                            <span><i class="far fa-plus"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="portfolio-content">
                                                        <h3 class="title"><a href="project-details.html" class="">{each?.site_name}</a></h3>
                                                        <a href="project-details.html" class="cat-btn">{each?.language}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </> : null}
                            
                        </div>
                    </div>
                </section>
                {/* <!--====== End portfolio Section ======--> */}
            </div>
            {(fullImgUrl) ? (<div className="image-popup">
                <div className="cancel_img_popup" onClick={cancelFullImageHandle}><span>+</span></div>
                <img src={fullImgUrl} alt="" />
            </div>) : ''}
        </>
    );
}

export default Portfolio;