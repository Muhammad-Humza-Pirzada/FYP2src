import NavData from "../compoent/NavData"
import WInput from "../compoent/WInput"
import HomeCard from "../compoent/Homecard"
import { useNavigate } from 'react-router-dom';
import About from "./About"
import EventsBooker from "../compoent/EventsBooker"
import './Homepage.css'
import Cartdata from "../compoent/carddata"
import FooterData from "../compoent/Footer";
import HomeVanueCard from "../compoent/PopularVanue";
import Popularvenders from "../compoent/Popularvenders";
export default function HomePage() {
let Navigat = useNavigate()
        return <>
                <NavData />
                {/* section One */}
                <div className="container-fluid backgroundone w-100 p-[10rem]" >
                        <div className="   h-screen flex justify-center items-center">
                                <div className="" >
                                        <div className="text-center ">

                                                <h1 className="text-white fs-1">Your Wedding, Your Way</h1>
                                                <p className="text-white fs-4">Find the best wedding vendors with thousands of trusted reviews</p>
                                        </div>

                                        <div className="d-flex justify-content-center flex-wrap  ">


                                                <div>

                                                        <select className="py-3 px-[100px]  " aria-label="" placeholder="Select City">
                                                                <option>City</option>
                                                                <option value="1">Hyderabad</option>
                                                                <option value="2">Karachi</option>

                                                        </select>

                                                </div>

                                                <div>


                                                        <select className="py-3 px-[100px] " aria-label="Default select example">
                                                                <option className="" >Vanue</option>
                                                                <option className="" value="1">Banqeut</option>
                                                                <option className="" value="2">Hall</option>
                                                                <option className="" value="3">Polar</option>
                                                        </select>

                                                </div>



                                                <div>
                                                        <button className="buttonText2 py-3 px-[150px]  text-white">Search</button>
                                                </div>


                                        </div>

                                        <div>

                                        </div>





                                </div>








                        </div>

                </div>


                {/* section One */}

<Cartdata/>
                {/* Section two */}
{/* popoular Venue section */}
                <div className="">
                        <div className="text-center pt-5">

                        <h1>POPULAR VENUES</h1>
                        </div>

                <HomeVanueCard/>
                </div>


{/* venders section */}
                <div className="">
                        <div className="text-center pt-5">

                       <h1>VENDORS</h1>
                        </div>

               <Popularvenders/>
                </div>
{/* venders section */}


<EventsBooker 
        heading="Create Free Online Invitations"  
        para="Bring Everyone Together for Life’s Precious Moments" 
        buttontext="Browse E-Invitations" 
        img={"https://cdn.venuelook.com/images/new-home-images/einvite.png"} 
/>

<EventsBooker 
        heading="Events & Wedding Destinations in Pakistan "  
        para="Your next destination is closer than you think.Discover it here." 
        buttontext="See all Destinations" img={"https://www.venuelook.com/images/new-home-images/dsetination.png"} 
        onclick={()=>Navigat("/VanueGigs")}
/>
                {/* Section two */}


                <HomeVanueCard/>




{/* Footer*/}

<FooterData/>


        </>
}