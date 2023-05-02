import React from 'react';
import Header from './Header';
function Faq() {
 
  return (
    <>
    <Header class_bg='black_bg' />
    <section className="faq-area about_acordion faq_acordion pt-50 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="faq-content-box faq-content-box-one mb-50">
                           
                            <div className="section-title mb-25 wow fadeInUp faq-heading">
                                <div className="">
                                    <div className="">
                                        <span className="sub-title sub-title-bg blue-light-bg">FAQ</span>
                                        <h2 className="">Frequently Asked Questions</h2>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="faq-accordian faq-accordian-two wow fadeInUp" id="accordianOne" >
                                <div className="card">
                                    <div className="card-header">
                                        <a href="#" className="collapsed circle_pointer" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" >
                                            
                                        Gone Floating Labels & Green Lighthouse Scores
                                    
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordianOne">
                                        <div className="card-body">
                                            <p>We are in the business of helping Merchants, Retailers and Developer community grow their sales and
                                                operational efficiency through innovation experience and empathy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a href="#" className="collapsed circle_pointer" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" >
                                            
                                        Scraping Websites With Node & Puppeteer
                                    
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordianOne">
                                        <div className="card-body">
                                            <p>Mucheco Commerce is a leading Ecommerce Technology company focused on helping retailers improve their
                                                sales and profitability through technology, innovation and experience.</p>
                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a href="#" className="collapsed circle_pointer" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" >
                                           
                                        UI Design Testing Tools I Use All The Time
                                    
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordianOne">
                                        <div className="card-body">
                                            <p>Our commitment to our client’s success and our standards sets mucheco apart as a world-class professional services organisation.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a href="#" className="collapsed circle_pointer" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" >
                                            
                                        Gone Floating Labels & Green Lighthouse Scores
                                    
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordianOne">
                                        <div className="card-body">
                                            <p>We are in the business of helping Merchants, Retailers and Developer community grow their sales and
                                                operational efficiency through innovation experience and empathy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a href="#" className="collapsed circle_pointer" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" >
                                            
                                        Scraping Websites With Node & Puppeteer
                                    
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordianOne">
                                        <div className="card-body">
                                            <p>Mucheco Commerce is a leading Ecommerce Technology company focused on helping retailers improve their
                                                sales and profitability through technology, innovation and experience.</p>
                                               
                                        </div>
                                    </div>
                                </div>
                               
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
    );
}

export default Faq;