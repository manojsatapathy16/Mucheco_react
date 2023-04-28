import React from 'react';
import Header from './Header';
import { Helmet } from "react-helmet";
function Consultancy() {
 
  return (
    <>
     <div className="inner_pages_wrapper">
    <Header class_bg='black_bg' />
    <Helmet>
                <title>mucheco</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
            </Helmet>
    {/* <!--====== Start consultancy Section ======--> */}
               <section className="pt-0 pb-95">
                <div className="consultancy_banner">
                  <img title="consultancy" alt="consultancy" src={require("../image/consultancy_banner.jpg")} />
                    <div className="container">
                    <div className="transparent_txt_banner_wrap">
                        <h1>Consultancy</h1>
                    </div>
                </div>
                </div>
               <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <p>MucheCo is a 9 years old e-commerce consulting company helping retailers to launch their business online and grow. For online retail business development, MucheCo as an ecommerce consulting partner can help you incorporating all necessary advanced technologies &amp; expertise to establish from ground-up. We are team of few consultants and professionals aim to launch successful e-commerce start-ups, help them expanding business by geography and revenue.</p>
                <p>MucheCo’s eCommerce solutions are created with the ultimate objective of enhancing your online revenue. Be it implementation of eCommerce project or providing support for existing operations, our team (onshore and offshore) have deep niche expertise and technical know-how to overcome challenges and successfully deliver results.</p>
                </div>
                </div>
               
               
                </div>
                <div className="grybg_consultancy">
                    <div className="container">
                        <div className="row innerBlock" data-aos="fade-up" data-aos-duration="1000">
                            <div className="">
                            <div className="nomber"><span className="nomber_span">01.</span><div className="tilt"></div></div>
                            <h2 className="block_heading">Marketplaces</h2>
                            <p>Take the hassle out of setting up and managing your Amazon, eBay, Jet.com, Wal-Mart and any other marketplace presence with our managed marketplace services. By using our team of experts you’ll gain access to any major marketplaces in a fast and professional manner and you’ll have your listings fully optimized and enhanced account performance to fully exploit multichannel opportunities. We can provide the right guidance and setup for your business and its particular needs, ensuring you’re correctly presented and ready to sell on your chosen marketplaces.</p>
                            <p>Platforms like Amazon, Jet, and eBay are home to millions of products and their visitors are ready to make a purchase. Each of these platforms act as search engines, and it’s becoming easier to leverage your products on these platforms.</p>
                            <ul className="check-list list-circle-bg mb-20 wow fadeInUp aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <li>Compelling Content in the Description</li>
                            <li>Generate Interest with Images &amp; Titles to Drive Traffic to the Listing</li>
                            <li>Custom &amp; Engaging Digital Shopping Experience</li>
                            <li>Strategic Insertion of Keywords</li>
                            <li>5. Assessment of All Listings to Improve Quality</li>
                            </ul>
                            </div>
                            </div>
                            <div className="row innerBlock" data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                <div className="nomber"><span className="nomber_span">02.</span><div className="tilt"></div> </div>
                            <h2 className="block_heading">Shopping Cart / Store Management</h2>
                            <p>Our ecommerce specialist team manage and trade your global marketplace stores to drive sales growth, encourage customer loyalty, boost product visibility and increase Brand awareness. MucheCo Managed Services works closely with industry-leading ecommerce platforms to ensure that you’re getting the best sales results for your business growth. MucheCo Managed Service team has pragmatic experience in all major shopping carts.</p>
                            <ul className="check-list list-circle-bg mb-20 wow fadeInUp aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <li>Flexible monthly / hourly support based on YOUR business for you</li>
                                <li>24/7 Support and uptime monitoring</li>
                                <li>Dedicated Project Manager</li>
                                <li>Support for inventory Management, Product Optimisation, customizations and integrations</li>
                                <li>Skype / Telephone / email support</li>
                                <li>Inventory Performance Reviews all platforms (Analytics, Optimisation, Audits)</li>
                                <li>Detailed weekly hour/Monthly project breakdown</li>
                            </ul>
                           
                            </div>
                            </div>
                            <div className="row innerBlock" data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                <div className="nomber"><span className="nomber_span">03.</span><div className="tilt"></div></div>
                            <h2 className="block_heading">End to End Marketplace Solution</h2>
                            <p>Our end-to-end marketplace solution removes all the hassles of international expansion providing accurate, low risk, boost-to-market. We take care of everything from contract to returns, so all you have to focus on is deciding which market to sell into next to become King!</p>
                           
                            <ul className="check-list list-circle-bg mb-20 wow fadeInUp aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <li><strong>Technical Integration</strong> – We have established a deep understanding of your marketplace strategy, customers and objectives, we work with your internal teams to understand your technical requirements, and our innovative, highly customizable integration system which allows us to onboard you quickly and make sale out of it.</li>
                            <li><strong>Launch on Marketplace</strong> – We work closely with all global marketplaces to guarantee international compliance, secure the best rates and launch your products. Our logistics partners then take care of the final mile to ensure the smooth delivery of your products to local customers.</li>
                            <li><strong>Drive sale</strong> – our team is focus on driving sales by tapping into marketplace promotions, making sure all product listings are properly optimised, capitalising on marketplace trends and delivering the best customer experience.</li>
                            <li><strong>Expand Internationally</strong> – We will be there to support your global Presence &amp; growth by creating each possible marketplace expansion plans that help you develop your internationally to reach customers worldwide.</li>
                            </ul>
                            </div>
                            </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End consultancy Section ======--> */}
     </div>
    
    </>
    );
}

export default Consultancy;