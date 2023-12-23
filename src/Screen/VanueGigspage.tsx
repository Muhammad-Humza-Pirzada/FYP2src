import FooterData from "../compoent/Footer";
import NavData from "../compoent/NavData";
import VanueGigsCard from "../compoent/VanueGigsCard";
import WInput from "../compoent/WInput";
import { useNavigate } from "react-router-dom";

export default function VanueGigs(){
    let Navigate = useNavigate()
    return <>
    <NavData/>
    <div className="container-fluid px-5 py-3 ">
    <div className="row justify-content-center align-items-center g-2 ">
    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 ">
                <h1 className="h6 text-bold  margin-r-5 fs-2" >Wedding Venues</h1>
                <p className=" ">Showing 
                    <span className="text-bold"> 33048 results</span> 
                    as per your search criteria
                </p>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 ">
                <div className="input-group  ">
                    <WInput variant={"outlined"} label="Search" type="text" />
                    <button className="btn btn-outline-secondary" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M15.794 14.216l-4.612-4.61A6.5 6.5 0 1 0 9.5 15.5a6.5 6.5 0 0 0 1.684-.224l4.61 4.612a1 1 0 0 0 1.414-1.414zM9.5 13A5.5 5.5 0 1 1 9.5 2a5.5 5.5 0 0 1 0 11z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="row justify-content-center align-items-center g-2 my-4">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
<VanueGigsCard 
headingimg="https://image.wedmegood.com/resized/450X/uploads/member/669269/1601210508_image290.jpg?crop=223,282,1012,569"
 Hallname="Hall Name" 
 iconimageone="http://www.w3.org/2000/svg" 
 pathone={"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}
  icontext="4.8 (reviews 100)" 
  iconimagetwo={"http://www.w3.org/2000/svg"} 
  pathtwo={"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}
  citytext="Hyderabad"
  RentalCosttext="Rental Cost"
  Price="$ 2,50,000"
  buttontext="Detail"
  onclick={()=>Navigate('/VanueDetail')}
  />

            </div>


            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
<VanueGigsCard 
headingimg="https://image.wedmegood.com/resized/450X/uploads/member/669269/1601210508_image290.jpg?crop=223,282,1012,569"
 Hallname="Hall Name" 
 iconimageone="http://www.w3.org/2000/svg" 
 pathone={"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}
  icontext="4.8 (reviews 100)" 
  iconimagetwo={"http://www.w3.org/2000/svg"} 
  pathtwo={"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}
  citytext="Hyderabad"
  RentalCosttext="Rental Cost"
  Price="$ 2,50,000"
  buttontext="Detail"
  onclick={()=>Navigate('/VanueDetail')}
  />

            </div>




            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
<VanueGigsCard 
headingimg="https://image.wedmegood.com/resized/450X/uploads/member/669269/1601210508_image290.jpg?crop=223,282,1012,569"
 Hallname="Hall Name" 
 iconimageone="http://www.w3.org/2000/svg" 
 pathone={"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}
  icontext="4.8 (reviews 100)" 
  iconimagetwo={"http://www.w3.org/2000/svg"} 
  pathtwo={"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}
  citytext="Hyderabad"
  RentalCosttext="Rental Cost"
  Price="$ 2,50,000"
  buttontext="Detail"
  onclick={()=>Navigate('/VanueDetail')}

  />

            </div>

           

            </div>



    </div>
    </div>

    
   
    </>
}