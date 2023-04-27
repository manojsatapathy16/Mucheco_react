import React, { useState ,useEffect } from 'react';
import Header from './Header';
import { Helmet } from "react-helmet";
function Contact() {
  
  const initialValues = { firstname: '',lastname: '',phone:'', email: '',lead:'',website:'', message:'' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess,setIsSuccess] = useState({})
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
const sendData = (value) =>{
var formdata = new FormData();
formdata.append("request_type", 'contact_us');
formdata.append("first_name", value.firstname);
formdata.append("last_name", value.lastname);
formdata.append("email", value.email);
formdata.append("phone", value.phone);
formdata.append("url", value.website);
formdata.append("lead", value.lead);
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

  useEffect(() => {
  
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      sendData(formValues);

      setFormValues(initialValues);
    }
  }, [formErrors]);
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
      }else if(!values.phone.length==10){
        errors.phone = 'phone number is required!';
      }
    
    return errors;
  };
 
  return (
    <>
     <div className="inner_pages_wrapper">
    <Header class='black_bg' />
    <Helmet>
                <title>mucheco</title>
                <meta name="description" content="Helmet application" />
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
            </Helmet>
    {/* <!--====== Start Contact Information Section ======--> */}
        <section class="contact-information-area contact-information-style-one pt-50 pb-80">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-lg-8">
                        <div class="information-wrapper wow fadeInLeft">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="information-item mb-60">
                                        <div class="icon">
                                            <img src={require("../image/contact/location.png")} alt="" />
                                        </div>
                                        <div class="text">
                                            <h5>UK Office</h5>
                                            <p>Mucheco Limited,
                                                ProHal,
                                                Iveco House, Station Road,
                                                Watford WD171ET
                                                United Kingdom
                                               </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="information-item mb-60">
                                        <div class="icon">
                                            <img src={require("../image/contact/phone-call.png")} alt="" />
                                        </div>
                                        <div class="text">
                                            <h5>Our Hotlines</h5>
                                            <p><span>Mobile :</span><a href="tel:+442030049800"> UK +44 203 004 9800</a></p>
                                            <p><span>Phone :</span><a href="tel:+17329317070">USA +1 732 931 7070</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="information-item mb-60">
                                        <div class="icon">
                                            <img src={require("../image/contact/location.png")} alt="" />
                                        </div>
                                        <div class="text">
                                            <h5>US Office</h5>
                                            <p>Suyog Computech Inc,
                                                345 Plainfield Ave.
                                                Ste. 102
                                                Edison, NJ 08817
                                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="information-item mb-60">
                                        <div class="icon">
                                            <img src={require("../image/contact/mail.png")} alt="" />
                                            
                                        </div>
                                        <div class="text">
                                            <h5>Email Address</h5>
                                            
                                            <p><a href="#">sales@mucheco.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="information-cta wow fadeInRight">
                            <div class="information-box mb-25">
                                <h3>Business Hour</h3>
                                <h5>Mon - Friday   :  09am - 05pm</h5>
                                <h5>Satarday : 9am - 2pm</h5>
                                <h5 class="st-close">Sunday Closed</h5>
                            </div>
                            <div class="information-box mb-25">
                                <h3>Ready To Work With Us?</h3>
                                <p>Please feel free to connect with us for any queries.</p>
                                <a href="#contact-wrapper" class="main-btn main-btn-blue">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End Contact Information Section ======--> */}
        {/* <!--====== Start Map section ======--> */}
        <section class="contact-page-map wow fadeInUp">
            <div class="map-box">
                <iframe src="https://www.google.com/maps/d/embed?mid=1CnxPO10N4aG2q9qubcllad5vez0&amp;hl=en"></iframe>
            </div>
        </section>
        {/* <!--====== End Map section ======--> */}
        {/* <!--====== Start Contact Section ======--> */}
        <section class="contact-area contact-style-two">
            <div class="contact-wrapper" id='contact-wrapper'>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center mb-55 wow fadeInUp">
                                <h2>Send Us Message</h2>
                                <h5>Don’t Hesited To Contact With Us! Feel Free To Message Us</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact-form wow fadeInUp">
                                <form onSubmit={handleSubmit}>
                                {(isSuccess.status==1)?(<p className='success_message'>{isSuccess.message}</p>):null}
                                    <div class="row justify-content-center">
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
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="form_group">
                                                <input type="url" class="form_control" placeholder="Website" name="website" value={formValues.website} onChange={handleChange}  />
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="form_group">
                                            <select class="form_control" name="lead" onChange={handleChange} value={formValues.lead}>
                                            <option value="How Did You Hear About Us">How Did You Hear About Us?</option>
                                            <option value="Google">Google</option>
                                            <option value="Bing">Bing</option>
                                            <option value="An Email">An Email</option>
                                            <option value="A Web Portal">A Web Portal</option>
                                            <option value="A Recent Event">A Recent Event</option>
                                            <option value="Other">Other</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="form_group">
                                                <textarea name="message" placeholder="Message" class="form_control" value={formValues.message} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="form_group text-center">
                                                <button class="main-btn btn-purple w-100" type='submit'>send message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
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

export default Contact;