import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// import "./HVanueCard.css"




export default function HomeVanueCard() {
    

    let Cart = [
        {
            image: "https://image.wedmegood.com/resized/300X/uploads/option_image/68/party_lounge.jpg",
            heading: "Hall And Lawn"
        },
        {
            image: "https://image.wedmegood.com/resized/300X/uploads/option_image/68/party_lounge.jpg",
            heading: "Banquet"
        },
        {
            image: "https://image.wedmegood.com/resized/450X/uploads/images/a3568d396d8e418fb12ea9e8c2018260realwedding/31.jpg?",
            heading: "Engagment"
        },
        {
            image: "https://image.wedmegood.com/resized/450X/uploads/images/f9c5a063ee1947a0953b5e0b8f5eeb03realwedding/Aditi_Pankaj-36.jpg",
            heading: "Engagment"
        },

        {
            image: "https://image.wedmegood.com/resized/450X/uploads/images/cf6538e99a254a90857e615d2e8a4b50realwedding/Wedding79.jpg?",
            heading: "Engagment"
        },

        {
            image: "https://image.wedmegood.com/resized/300X/uploads/option_image/68/party_lounge.jpg",
            heading: "Engagment"
        },

        {
            image: "https://image.wedmegood.com/resized/300X/uploads/option_image/68/party_lounge.jpg",
            heading: "Engagment"
        },

        {
            image: "https://image.wedmegood.com/resized/300X/uploads/option_image/68/party_lounge.jpg",
            heading: "Engagment"
        },


    ]
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <>

<div className="container  py-5">
    <div className="mt-4">
    <Slider {...settings}>
        
        {

            Cart.map((x,i)=>{
                return  <Link to="/VanueDetail">
                    <div className="card p-2 border-0" style={{width:"width: 18rem;"}}>
                <img src={x.image} className="card-img-top h-100"/>
                <div className="card-body">
                  <h5 className="card-title">{x.heading}</h5>
                
                </div>
              </div>
                     
                
                
                
                
                </Link>
                          
                 
                
            })
        }
        </Slider>

       
    </div>

</div>

    </>
}