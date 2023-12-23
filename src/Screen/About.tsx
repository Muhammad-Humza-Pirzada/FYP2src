import FooterData from "../compoent/Footer";
import NavData from "../compoent/NavData";
import HomeVanueCard from "../compoent/PopularVanue";
import img1 from '.././Images/Aboutimg.jpeg'
import "./About.css"
export default function About (){
    return <>
    <NavData/>
{/*  */}

<div className="row justify-content-center align-items-center g-2 text-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h1>About Us</h1>
            </div>
        </div>

        <div className="container text-center">
            <div className="p-5 mb-4 bg-light rounded-3 ">
                <div className="container-fluid py-5 text-center">
                  <h1 className=" fw-bold">Who Exactly is MrPlacer.com ?</h1>
                  <p className=" fs-4 ">Number one Portal for Venue and Vendor Discovery and Booking.
                    We are an online platform that helps users find perfect venues and professional service providers (vendors) for their events..</p>
                </div>
            </div>
        </div>

        <div className="container ">
            <div className="p-2 mb-4 bg-light rounded-3 ">
                <div className="container-fluid ">
                    <div className="row justify-content-center align-items-center g-2">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h2 className=" fw-bold">About us</h2>
                            <p className="small-font">Welcome to [Your Website Name]! We are your go-to online platform for effortless hall bookings and customizable E-card invitations. Our goal is to simplify event planning and provide you with a seamless experience for all your special occasions.

                            Join us in creating memorable moments hassle-free with [Your Website Name].</p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center">
                            <img src={img1} className="img-fluid rounded-top " alt=""/>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>

        <div className="container">
          <div className="p-2 mb-4 bg-light rounded-3 ">
              <div className="container-fluid ">
                  <div className="row justify-content-center align-items-center g-2">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center">
                      <img src={img1} className="img-fluid rounded-top w-100" alt=""/>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h2 className=" fw-bold">Farmhouses in Pakistan</h2>
                        <p className="small-font">We are here to offer a destination wedding of your dreams on eventsbooking.pk. Farm Houses for couples looking for a luxury wedding destination beyond their imagination. Envision what it would be like if you get to do a wedding ceremony, grand birthday parties, or any party at a place that makes you feel like a home away from home and that too in an affordable price.</p>
                    </div>
                      
                  </div>
                
              </div>
          </div>
        </div>

        <div className="container ">
          <div className="p-2 mb-4 bg-light rounded-3 ">
              <div className="container-fluid ">
                  <div className="row justify-content-center align-items-center g-2">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <h2 className=" fw-bold">Marquees in Pakistan</h2>
                          <p className="small-font">We have long stretches of involvement putting marquees up and overseeing marquee organizations. Our wealth of knowledge means we can help answer your entire initial marquee hire questions and help you choose the marquee which is right for you. If your site is perfect, but you would still like to meet the marquee company, we can organize a site visit before you pay the booking deposit; however, marquees get booked up fast.</p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center">
                          <img src={img1}className="img-fluid rounded-top " alt=""/>
                      </div>
                  </div>
                
              </div>
          </div>
      </div>

      <div className="container">
        <div className="p-2 mb-4 bg-light rounded-3 ">
            <div className="container-fluid ">
                <div className="row justify-content-center align-items-center g-2">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center">
                    <img src={img1} className="img-fluid rounded-top " alt=""/>
                  </div>
                  
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <h2 className=" fw-bold">Catering Services in Pakistan</h2>
                      <p className="small-font">Eventsbooking.pk provides you the best deals while saving you time & stress. Eventsbooking.pk is a Pakistan’s first online booking website has various catering companies to find cheap and super deals for your wedding ceremony and other events. We have a wide range of catering providers and promotions throughout the year, all of which can be found on our site. You can also enjoy discounted rates at select banquet halls and other properties. There are many banquet halls listings on Eventsbooking.pk, so you will always be able to track down the perfect catering company</p>
                  </div>
                    
                </div>
              
            </div>
        </div>
      </div>
 
  

{/*  */}


    <FooterData/>
    </>
}