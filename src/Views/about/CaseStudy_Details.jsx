import React from 'react';
import Header from '../Header';
import { Helmet } from "react-helmet";
function CaseStudy_Details() {
 
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
                                <li><a href="Case_Study.html">Case Study</a></li>
                                <li class="active">Case Study Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!--====== End Hero Section ======--> */}
    {/* <!--====== Start case_study_landing Section ======--> */}
    <section class="case_study_details_page pb-50">
        <div class="inner_banner">
        <img src={require("../../image/case-study/uk_pallet_details.jpg")} alt=""/>
    </div>
        <div class="container">
            <p><span class="case_details_des_head"><strong>We provided complete Digital Marketing Solutions to a pallet delivery company in UK</strong></span></p>

            <p><strong>Uk Pallet Commercial Deliveries Ltd -  </strong><span
                    style={{color: "#4B0082"}}><strong>www.ukpalletcommercialdeliveries.com</strong></span></p>

            <p>UK Pallet Commercial Deliveries Ltd has been delivering pallets since 2006, with a focus on providing affordable, efficient, and reliable delivery services to both residential and commercial customers in the UK and Europe. With easy online booking and payment methods, we make shipping your goods hassle-free.</p>
                <div class="case_details_items" data-aos="fade-up" data-aos-duration="1000">
                <div class="nomber"><span class="nomber_span">01.</span><div class="tilt"></div></div>
                <h2 class="block_heading">Requirements</h2>
            {/* <!-- <p><span style="font-size:14px"><strong>Requirements</strong></span></p> --> */}
            <ul class="check-list list-circle-bg mb-20 wow fadeInUp aos-init aos-animate" >
                <li>Keyword Ranking Improvement in SERP</li>
            <li>Increase Online Visibility</li>
            <li>Increase Brand Value in Online Market</li>
            <li>Increase Brand Value in Targeted Area</li>
            <li>Website Optimization &amp; Reputation Management</li>
            </ul>
        </div>
            <div class="case_details_items" data-aos="fade-up" data-aos-duration="1000">
            <div class="nomber"><span class="nomber_span">02.</span><div class="tilt"></div></div>
            <h2 class="block_heading">Challenges</h2>
            {/* <!-- <p><span style="font-size:14px"><strong>Challenges</strong></span></p> --> */}

            <p>UK Pallet Commercial Deliveries Ltd wanted us to provide a Digital Marketing solution to increase its visibility and popularity in Search Engines (Google, Bing, etc). The website is developed on the<strong>WordPress</strong> platform.</p>

           
            </div>
                <div class="case_details_items" data-aos="fade-up" data-aos-duration="1000">
                <div class="nomber"><span class="nomber_span">03.</span><div class="tilt"></div></div>
                <h2 class="block_heading">Solutions We Provided </h2>
            <p><span style={{fontSize: "14px"}}>
                We provided the following solutions to promote ukpalletcommercialdeliveries.com in a highly competitive logistics market. Our SEO techniques help to reach the target audience and increase brand value. We fixed all required on-page issues and created high PA DA backlinks. We implemented all on-page work like meta tags fixation, xml sitemap, Google analytics, and Google webmaster in the WordPress platform.
            </span></p>
            <ul class="check-list list-circle-bg mb-20 wow fadeInUp aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <li>Organic SEO</li>
            <li>On page Optimization</li>
            <li>Mata Tag creation</li>
            <li>Google White Techniques for high visibility search engines.</li>
            <li>Sitemap XML, Google Webmaster in Drupal and Google Analytics implementation</li>
            <li>High PA DA Back-link creation</li>
            <li>Bi-Monthly Working Report</li>
            <li>Bi-Monthly Keyword Ranking Report</li>
            <li>Monthly Google Analytic Visitors Report</li>
            
            </ul>
        </div>
            <div class="case_details_items" data-aos="fade-up" data-aos-duration="1000">
            <div class="nomber"><span class="nomber_span">04.</span><div class="tilt"></div></div>
                <h2 class="block_heading">The Result</h2>
            {/* <!-- <p><strong><span style="font-size:14px">The Result&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                </strong></p> --> */}

            <p>Our efforts helped UK Pallet Commercial Deliveries Ltd achieve significant growth in their online presence, increasing website traffic by 50% and boosting online bookings by 60%. Through targeted SEO, social media, and PPC advertising, we delivered measurable results, driving increased brand awareness and growth in the pallet delivery industry. Continued investment in digital marketing will allow UK Pallet to maintain their position as a leader in the industry and drive further growth.</p>
            </div>

        </div>
    </section>
    {/* <!--====== End case_study_landing Section ======--> */}
   
     </div>
   
     
    </>
    );
}

export default CaseStudy_Details;