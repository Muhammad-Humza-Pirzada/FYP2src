import React from "react";
import NavData from "../compoent/NavData";
import WAButton from "../compoent/WAButton";
import "./VanueDetailstyle.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CallIcon from "@mui/icons-material/Call";
import WInput from "../compoent/WInput";
import { hover } from "@testing-library/user-event/dist/hover";


export default function VanueDetail() {
  let btnstyle = {
    backgroundcolor: "red",
    color: "white",
  };
  return (
    <>
      <NavData />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12  my-3">
            <div className="py-3">
              <img
                src="https://image.wedmegood.com/resized/1000X/uploads/member/99817/1692425776_S_R_Sangeet_04_00954_1.jpg?crop=0,147,2048,1152"
                className="w-100"
                alt=""
              />
            </div>
            <div className="py-1">
              <div className=" border">
                <div>
                  <p className="fw-bold">Rainforest Resort, Igatpuri</p>
                </div>
                <div className="py-2">
                  <span className="fw-bold fs-5 ">
                    <LocationOnIcon /> Igatpuri, Mumbai
                  </span>
                  <span>(View on Map)</span>
                </div>
                <div>
                  <span className="m-2">Igatpuri, Mumbai</span>
                  <span>
                    RainForest Resort Igatpuri, Igatpuri, Maharashtra, India
                  </span>
                </div>
                <div className="py-2">
                  <span className="contactIcon">
                    {" "}
                    <LocalPhoneIcon /> Contact
                  </span>
                </div>

                <div className="row justify-content-around">
                  <div className=" col-lg-3 col-md-3 text-center border-end">
                    <InsertPhotoIcon /> Photo 22{" "}
                  </div>
                  <div className=" col-lg-3 col-md-3 text-center border-end">
                    <FavoriteBorderIcon />
                    ShortList{" "}
                  </div>
                  <div className=" col-lg-3 col-md-3 text-center border-end">
                    <InsertPhotoIcon /> Write A Review{" "}
                  </div>
                  <div className=" col-lg-3 col-md-3 text-center ">
                    <ShareIcon /> Share{" "}
                  </div>
                </div>
              </div>
            </div>

  {/* 20-12-2023 */}
  <div className="container border">
  <div className="py-2">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-6">
        <p className="mx-2 " style={{fontSize:"0.9em"}}>Banquets</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6">
        <p className="mx-2  " style={{fontSize:"0.9em"}}>Projects</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6">
        <p className="mx-2  " style={{fontSize:"0.9em"}}>About</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6">
        <p className="mx-2  " style={{fontSize:"0.9em"}}>Reviews</p>
      </div>
    </div>
  </div>
</div>


<div className="container border">
  <div className="py-2">
    <div className="row">
      <div className="col-lg-4 col-md-3 col-sm-6">
        <p className="mx-2 activepara" style={{fontSize:"0.9em", }} >PORTFOLIO</p>
      </div>
      <div className="col-lg-4 col-md-3 col-sm-6">
        <p className="mx-2  activepara" style={{fontSize:"0.9em",}}>ALBUMS</p>
      </div>
      <div className="col-lg-4   col-md-3 col-sm-6">
        <p className="mx-2  activepara" style={{fontSize:"0.9em"}}>VIDEOS</p>
      </div>
     
    </div>
  </div>
</div>


<div className="container py-5">
  <div className="row ">
    <div className="col-lg-4 col-md-4 col-sm-6  py-2">
      <img src="https://image.wedmegood.com/resized/1000X/uploads/member/22281/1489015973_1444903188_holiday3.jpg
" alt=""  className="w-100 "/>

    </div>

    <div className="col-lg-4 col-md-4 col-sm-6 py-2">
    <img src="https://image.wedmegood.com/resized/1000X/uploads/member/22281/1489015973_1444903188_holiday3.jpg
" alt=""  className="w-100"/>

</div>

<div className="col-lg-4 col-md-4 col-sm-6 py-2">

<img src="https://image.wedmegood.com/resized/1000X/uploads/member/22281/1489015973_1444903188_holiday3.jpg
" alt=""  className="w-100"/>

</div>




  </div>


  <div className="row py-2">
    <div className="col-lg-4 col-md-4 col-sm-6 ">
      <img src="https://image.wedmegood.com/resized/450X/uploads/member/22281/1444983807_5_DSC_3007_By_The_Pool_Side.jpg" alt="" />


    </div>


    <div className="col-lg-4 col-md-4 col-sm-6 ">
      <img src="https://image.wedmegood.com/resized/450X/uploads/member/22281/1444983807_5_DSC_3007_By_The_Pool_Side.jpg" alt="" />


</div>


<div className="col-lg-4 col-md-4 col-sm-6 ">
  <img src="https://image.wedmegood.com/resized/450X/uploads/member/22281/1444983807_5_DSC_3007_By_The_Pool_Side.jpg" alt="" />


</div>





  </div>



  <div className="row py-2">
    <div className="col-lg-4 col-md-4 col-sm-6">
      <img src="https://image.wedmegood.com/resized/450X/uploads/member/22281/1444983807_5_DSC_3007_By_The_Pool_Side.jpg" alt="" />


    </div>


    <div className="col-lg-4 col-md-4 col-sm-6">
      <img src="https://image.wedmegood.com/resized/450X/uploads/member/22281/1444983807_5_DSC_3007_By_The_Pool_Side.jpg" alt="" />


</div>


<div className="col-lg-4 col-md-4 col-sm-6">
  <img src="https://image.wedmegood.com/resized/450X/uploads/member/22281/1444983807_5_DSC_3007_By_The_Pool_Side.jpg" alt="" />


</div>





  </div>


<div className="container py-5 border">
<div className="row">
        <div className="col">
            <h2>About Radisson Blu Kaushambi - Wedding Venues,Hyderabad,Sindh</h2>            
        </div>
        <hr/>
        <div>
            <h2><strong>About DOLLMAN Hall</strong></h2>
        </div>
        <div>
            <p>Where the tagline of the hotel is 'Style meeting comfort at our Chic hotel in Ghaziabad', the hotel
                  is designed exclusively to provide you the utmost comfort at the affordable rates as possible. The
                  hotel is one stop solution to all the cherishable items needed to make your stay at the hotel
                  enjoyable. Welcome to the Radisson Blu Kaushambi Delhi NCR, where guests enjoy exceptional services
                  and stylish accommodation just minutes from world-famous destinations like Akshardham Temple and the
                  Buddh International Circuit.Their hotel’s location in Kaushambi is only 20 minutes from New Delhi
                  tourist attractions and business hubs like Noida, ITES and BPO. Your sleek room or suite is outfitted
                  with modern décor and prime amenities, and they offer delectable dining at our two on-site
                  restaurants. Enjoy a free-form swimming pools, concierge, airport transfers and spectacular banquet
                  space for weddings and other large events.</p>
                  <br/>
                  <p>Designed with the view of providing you an opulent experience, the Radisson Blu Kaushambi is located
                  in close proximity to New- Delhi railway station connected via metro. After being blessed by the holy
                  Akshardham temple, relax in one of the comfortable well-designed rooms and suits built in high style
                  and practical touch along with amazing wifi, coffee and tea facilities. To satisfy your vegetarian
                  hunger, the restaurant provides various dishes to international and Indian favourites, making them a
                  perfect pick for wedding functions like sangeet, cocktail, mehendi or sangeet.</p>
                  <br/>
                  <h2><strong>Space Available And Capacity</strong></h2>
                  <p>They have an array of venues to choose from:</p>
                  <ul>
                  <li>Lavanya I: Capacity of 150 seating and 250 floating, perfect for a wedding or cocktail function.
                  </li>
                  <li>Lavanya I II and III: Capacity of 500 seating and 1500 floating, perfect for a wedding or cocktail
                    function.</li>
                  <li>Lavanya I and II: Capacity of 200 seating and 600 floating, perfect for a wedding or cocktail
                    function.</li>
                  <li>Amber, Amber Salon and Amber III: Capacity of 500 seating and 1200 floating, perfect for a wedding
                    or cocktail function.</li>
                  <li>Amber and Amber Salon: Capacity of 400 seating and 900 floating, perfect for a wedding or cocktail
                    function.</li>
                  <li>Amber: Capacity of 300 seating and 700 floating, perfect for a wedding or cocktail function.</li>
                </ul>
                <br/>
                <h2><strong>Facilities Available At Dollman Hall</strong></h2>
                <p>Offering a spacious area for all wedding festivities they also offer in-house catering, and provide
                  inhouse decor, with inhouse alcohol a dj of your choice , all under one roof, perfect for your special
                  functions.They offer 147 luxurious rooms for you and your guests.</p>
                  <br/>
                  <h2><strong>Location</strong></h2>
                  <p>They have their own catering facility offering delicacies that are worth every penny. Both non
                  vegetarian and vegetarian food options are offered.They provide inhouse alcohol as well, making them a
                  perfect choice for your special occasion.</p>
                  <br/>
                <h2><strong>Other Services</strong></h2>
                <p>This sophisticated wedding venue is an impeccable place to host your big day ceremonies, pre-wedding
                  and wedding functions, receptions, opulent gatherings, making it perfect for your special occasions.
                </p>
                
        </div>
    </div>

</div>

  
</div>






    




          {/* 20-12-2023 */}




          </div>

        









          <div className="col-lg-4 col-md-6 col-sm-12  my-3 ">
            <div className="py-3">
              <div className="bg-white border-bottom">
                <div className="card p-2">
                  <div className="border-bottom">
                    <span className="float-start fs-5 fw-bold">
                      Starting Prices
                    </span>
                    <span
                      className="float-end fs-5 fw-bold"
                      style={{ color: "#e72e77" }}
                    >
                      Pricing Info
                    </span>
                  </div>

                  <div className="border-bottom py-2">
                    <span
                      className="float-strat fs-5"
                      style={{ color: "#e72e77" }}
                    >
                      1,500 per plate
                    </span>
                    <span>(Textes Extra)</span>
                    <span className="float-end ">Veg price</span>
                  </div>

                  <div className="row ">
                    <div className=" col-lg-6 col-md-6 col-sm-12 py-2 text-center">
                      <span>
                        {" "}
                        <WAButton
                          Icon={<ForwardToInboxIcon />}
                          Text={"Send Massage"}
                          className="btn  btnColorSend px-3 py-2"
                        />
                      </span>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 py-2 text-center">
                      <span>
                        <WAButton
                          Text={"View Contact"}
                          Icon={<CallIcon />}
                          className="btn btnColorcontact px-3 py-2 "
                        />
                      </span>
                    </div>
                  </div>





                  <hr />

                  <div>
                    <p className="fw-bold">
                      Hi Hyatt Centric Sector 17 Chandigarh,
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="text"
                        label="Name"
                        fullwidth
                      />
                    </div>
                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="text"
                        label="Phone Number"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="email"
                        label="Email"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="date"
                        label="Date"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="email"
                        label="No of guest *(min 50)"
                        fullwidth
                      />
                    </div>

                    <div className="col-lg-6 py-2">
                      <WInput
                        variant="standard"
                        type="text"
                        label="No of room"
                        fullwidth
                      />
                    </div>
                  </div>

                  <div className="container text-center py-2">
                    <h1 className="">Funtion Time</h1>
                  <div className="row">
                    <div className="col text-center">
                      <span>Day</span>
                      <br/>
                      <input type="radio" className="btn" name="Day" />

                    </div>
                    <div className="col">

                    <div className="col text-center">
                     <span>Nigth</span>
                     <br/>
                      <input type="radio" className="btn" name="Day"/>

                    </div>


                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
