import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './carddata.css'

export default function Cartdata(){

    let Cart =[
        {
            image:"https://cdn.venuelook.com/images/new-home-images/ring.png",
            heading:"Engagment"
        },
        {
            image:"https://cdn.venuelook.com/images/new-home-images/wedding.png",
            heading:"wedding"
        },
        {
            image:"https://cdn.venuelook.com/images/new-home-images/cake.png",
            heading:"Engagment"
        },
        {
            image:"https://cdn.venuelook.com/images/new-home-images/ring.png",
            heading:"Engagment"
        },

        {
            image:"https://cdn.venuelook.com/images/new-home-images/ring.png",
            heading:"Engagment"
        },

        {
          image:"https://cdn.venuelook.com/images/new-home-images/ring.png",
          heading:"Engagment"
      },

      {
        image:"https://cdn.venuelook.com/images/new-home-images/ring.png",
        heading:"Engagment"
    },

    {
      image:"https://cdn.venuelook.com/images/new-home-images/ring.png",
      heading:"Engagment"
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

<div className="container border py-5">
    <div className="mt-4">
    <Slider {...settings}>
        
        {

            Cart.map((x,i)=>{
                return  <div className="h text-black" >
                <div className="h-56 flex justify-center items-center">
                    <img src={x.image} alt=""  className="h-44 w-44"/>
                    

              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <h3>{x.heading}</h3>

              </div>
            </div> 
                     
                          
                 
                
            })
        }
        </Slider>

       
    </div>

</div>

</>
}


