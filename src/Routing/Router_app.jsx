import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter, Switch, Layout } from 'react-router-dom';
import About from '../Views/about/About';
import WhychooseUs from '../Views/about/WhychooseUs';
import Ourdeliveryprocess from '../Views/about/Ourdeliveryprocess';
import SomeOfOurWork from '../Views/about/SomeOfOurWork';
import CaseStudy from '../Views/about/CaseStudy';
import Career from '../Views/about/Career';
import Consultancy from '../Views/Consultancy';
import Portfolio from '../Views/Portfolio';
import Insight from '../Views/Insight';
import Footer from '../Views/Footer';
import Home_page from '../Views/Home_page';
import Error from '../Views/Error';
import ServiceDetails from '../Views/ServiceDetails';
import Contact from '../Views/Contact';
import CaseStudy_Details from '../Views/about/CaseStudy_Details';
import Insight_details from '../Views/Insight_details';
import { basename } from '../Services/Apis';
import About_wrapper from '../Views/about/About_wrapper';
import Header from '../Views/Header';
import Faq from '../Views/Faq';
import Privacy_policy from '../Views/Privacy_policy';
import Terms_of_service from '../Views/Terms_of_service';
import Support_policy from '../Views/Support_policy';
import Term_of_use from '../Views/Term_of_use';

function Router_app() {

  return (
    <>
      <HashRouter>



        <Routes>
          <Route path='/' element={<Home_page />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/why-choose-us' element={<WhychooseUs />} />
          <Route path='/about/our-delivery-process' element={<Ourdeliveryprocess />} />
          <Route path='/about/some-of-our-work' element={<SomeOfOurWork />} />
          <Route path='/about/case-study' element={<CaseStudy />} />
          <Route path='/about/CaseStudy/CaseStudy_Details' element={<CaseStudy_Details />} />
          <Route path='/about/career' element={<Career />} />
          <Route path='/service' element={<ServiceDetails type='development_support' />} />
          <Route path='/service/discovery-and-design' element={<ServiceDetails type='development_support' />} />
          <Route path='/service/cloud-computing' element={<ServiceDetails type='cloud_transformation' />} />
          <Route path='/service/code-recovery-and-support' element={<ServiceDetails type='code_recovery' />} />
          <Route path='/service/digital-engineering' element={<ServiceDetails type='digital_engineering' />} />
          <Route path='/service/search-engine-optimization' element={<ServiceDetails type='seo' />} />
          <Route path='service/social-media-optimization' element={<ServiceDetails type='smo' />} />
          <Route path='/service/app-store-optimization' element={<ServiceDetails type='aso' />} />
          <Route path='/service/pay-per-click' element={<ServiceDetails type='ppc' />} />
          <Route path='/service/inventory-management' element={<ServiceDetails type='inventory_management' />} />
          <Route path='/service/order-management' element={<ServiceDetails type='order_management' />} />
          <Route path='/service/amazon-store-design-and-optimization' element={<ServiceDetails type='asdo' />} />
          <Route path='/service/eBay-store-design-and-optimization' element={<ServiceDetails type='esdo' />} />

          <Route path='/consultancy' element={<Consultancy />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/insight' element={<Insight />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/insight/insight-details' element={<Insight_details />} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/privacy-policy' element={<Privacy_policy/>} />
          <Route path='/terms-of-service' element={<Terms_of_service />} />
          <Route path='/support-policy' element={<Support_policy />} />
          <Route path='/terms-of-use' element={<Term_of_use />} />
          <Route path='*' element={<Error />} />

        </Routes>



        {/* <Route path='about' element={<About />} >
          
           <Route path='why-choose-us' element={<WhychooseUs />} />
           <Route path='our-delivery-process' element={<Ourdeliveryprocess />} />
           <Route path='some-of-our-work' element={<SomeOfOurWork />} />
           <Route path='case-study' element={<CaseStudy />} />
           <Route path='CaseStudy/CaseStudy_Details' element={<CaseStudy_Details />} />
           <Route path='career' element={<Career />} />
       </Route>
  
       <Route path='service/discovery-and-design' element={<ServiceDetails type='development_support' />} />
       <Route path='service/cloud-computing' element={<ServiceDetails type='cloud_transformation' />} />
       <Route path='service/code-recovery-and-support' element={<ServiceDetails type='code_recovery' />} />
       <Route path='service/digital-engineering' element={<ServiceDetails type='digital_engineering' />} />
       <Route path='service/search-engine-optimization' element={<ServiceDetails type='seo' />} />
       <Route path='service/social-media-optimization' element={<ServiceDetails type='smo' />} />
       <Route path='service/app-store-optimization' element={<ServiceDetails type='aso' />} />
       <Route path='service/pay-per-click' element={<ServiceDetails type='ppc' />} />
       <Route path='service/inventory-management' element={<ServiceDetails type='inventory_management' />} />
       <Route path='service/order-management' element={<ServiceDetails type='order_management' />} />
       <Route path='service/amazon-store-design-and-optimization' element={<ServiceDetails type='asdo' />} />
       <Route path='service/eBay-store-design-and-optimization' element={<ServiceDetails type='esdo' />} />

       <Route path='consultancy' element={<Consultancy />} />
       <Route path='portfolio' element={<Portfolio />} />
       <Route path='insight' element={<Insight />} />
       <Route path='contact' element={<Contact />} />
       <Route path='insight/insight-details' element={<Insight_details />} />
       <Route path='*' element={<Error />} />
     */}

        <Footer />


      </HashRouter>

      {/* <BrowserRouter basename={basename}>
     
          <Routes>
            <Route path='/' element={<Home_page />} />

            <Route path='about' element={<About />} >
               
                <Route path='why-choose-us' element={<WhychooseUs />} />
                <Route path='our-delivery-process' element={<Ourdeliveryprocess />} />
                <Route path='some-of-our-work' element={<SomeOfOurWork />} />
                <Route path='case-study' element={<CaseStudy />} />
                <Route path='CaseStudy/CaseStudy_Details' element={<CaseStudy_Details />} />
                <Route path='career' element={<Career />} />
            </Route>
       
            <Route path='service/discovery-and-design' element={<ServiceDetails type='development_support' />} />
            <Route path='service/cloud-computing' element={<ServiceDetails type='cloud_transformation' />} />
            <Route path='service/code-recovery-and-support' element={<ServiceDetails type='code_recovery' />} />
            <Route path='service/digital-engineering' element={<ServiceDetails type='digital_engineering' />} />
            <Route path='service/search-engine-optimization' element={<ServiceDetails type='seo' />} />
            <Route path='service/social-media-optimization' element={<ServiceDetails type='smo' />} />
            <Route path='service/app-store-optimization' element={<ServiceDetails type='aso' />} />
            <Route path='service/pay-per-click' element={<ServiceDetails type='ppc' />} />
            <Route path='service/inventory-management' element={<ServiceDetails type='inventory_management' />} />
            <Route path='service/order-management' element={<ServiceDetails type='order_management' />} />
            <Route path='service/amazon-store-design-and-optimization' element={<ServiceDetails type='asdo' />} />
            <Route path='service/eBay-store-design-and-optimization' element={<ServiceDetails type='esdo' />} />
     
            <Route path='consultancy' element={<Consultancy />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='insight' element={<Insight />} />
            <Route path='contact' element={<Contact />} />
            <Route path='insight/insight-details' element={<Insight_details />} />
            <Route path='*' element={<Error />} />
          </Routes>
       
        <Footer />
      </BrowserRouter> */}

    </>
  );
}

export default Router_app;
