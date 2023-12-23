
import { Link } from 'react-router-dom'
import './Footer.css'
export default function FooterData(){
    return<>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
<footer className="main-footer color-black mobile-view-hide">

<div className="row justify-content-center  align-items-start g-2 py-3 px-5  text-light">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 py-3 px-5">
            <div className="container">
                <h4 className="custom-heading ">Event Planning Services</h4>
                <hr/>
                <p className=""> 
                    <a href="#" className="text-decoration-none custom-link text-light">All Event Venders</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Catering Services</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Wedding Planning</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Event Planning</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Birthday Planning</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Party Supplies</a>
                </p>
                <br/>
                <br/>
                <h4 className="custom-heading ">More</h4>
                <hr/>
                <p className="">
                    <a href="#" className="text-decoration-none custom-link text-light">Real Events</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Photos</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Articles</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Company Overview</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Why List With VenueLook</a> | 
                    <a href="#" className="text-decoration-none custom-link text-light">Terms & Conditions</a> |
                    <a href="#" className="text-decoration-none custom-link text-light">Privacy Policy</a> |
                    <a href="#" className="text-decoration-none custom-link text-light">Contact Us</a> |
                    <a href="#" className="text-decoration-none custom-link text-light">Share Your Feedback</a>
                </p>
                <br/>
                <br/>
                <h4 className="custom-heading ">Contact Info</h4>
                <hr/>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <i className="fas fa-phone-alt"></i>+92 310 3905 162 &emsp;
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <i className="fas fa-envelope"></i> Wasifatif99@gmail.com
                    </div>
                    
                </div>
            </div>
        </div> 


        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 py-3 px-5 ">
            <div className="container">
                <div className="logo">
                    <a href="#" className="text-decoration-none text-light">
                        
                        <h4 className="custom-heading ">Mr Placer</h4>
                    </a>
                    <hr/>
                    <p className="footer-p">VenueLook is Pakistani's most loved Event Planning website! Check prices, verified reviews and book best wedding photographers, makeup artists, venues, decorators, and all other wedding vendors at guaranteed best prices...<a title="About VenueLook" href="https://www.venuelook.com/aboutus"  style={{color:"red"}}>More about VenueLook</a></p>
                    <h5  className="mt-2">Subscribe For Party Ideas and Offers</h5>
                    <form id="subscribeForm" action="/feedback/add-venuelook-feedback" method="post"> <div className="email">
                        <input type="text" id="email" placeholder="Your E-mail"  style={{height:"40px"}}/>
                        <a className="subscribe" href="javascript:void(0);" id="subscribeSave">Subscribe</a>
                        </div>
                        <div id="error_email"  style={{color:"#e52626", display:"none"} } className="error"> </div>
                        <div id="succ_msg"  className="fw-1 text-center " style={{background:'#dff0d8', color:"#3c763d;"} }> </div>
                    </form>


                    <ul className="footer-links-list list-inline  my-5 mt-5" >
                        <li className=" web-links "><Link to="#" className="text-light">Stay Connected</Link></li>
                        <li className=" web-links"><Link to="https://www.facebook.com/venuelook" target="_blank"><img className="social-icon lazyloaded" width="29" height="29" src="https://cdn.venuelook.com/images/new-home-images/fb.png" alt="facebook"/></Link></li>
                        <li className=" web-links"><Link to="https://www.instagram.com/venuelook" target="_blank"><img className="social-icon lazyloaded" width="29" height="29" src="https://cdn.venuelook.com/images/new-home-images/insta.png" alt="instagram"/></Link></li>
                        <li className=" web-links"><Link to="https://twitter.com/venuelook" target="_blank"><img className="social-icon lazyloaded" width="29" height="29" src="https://cdn.venuelook.com/images/new-home-images/twitter.png" alt="twitter"/></Link></li>
                        <li className=" web-links"><Link to="https://www.linkedin.com/company/venuelook" target="_blank"><img className="social-icon lazyloaded" width="29" height="29" src="https://cdn.venuelook.com/images/new-home-images/linkedin.png" alt="linkedin"/></Link></li>
                        <li className=" web-links"><Link to="https://www.pinterest.com/venuelook" target="_blank"><img className="social-icon lazyloaded" width="29" height="29" src="https://cdn.venuelook.com/images/new-home-images/pin.png" alt="pinterest"/></Link></li>
                        <li className=" web-links"><Link to="https://www.youtube.com/channel/UCECW3RPsvsfFZovt_hWiQIA" target="_blank"><img className="social-icon lazyloaded" width="29" height="29" src="https://cdn.venuelook.com/images/new-home-images/youtube2.png" alt="pinterest"/></Link></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  </footer>

         </>
}