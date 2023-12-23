import WAButton from "../compoent/WAButton";
import WInput from "../compoent/WInput";
import { useState } from "react";

import "./vanuedetailform.css"

export default  function VanueDetailForm (){
    let [model,setmodel]=useState<any>({})
    let fillmodel=(key:string,val:any)=>{
        model[key]=val
        setmodel({...model})
       
    }

    let submit = ()=>{
        console.log(model);
        
    }
return <>

<div className="container">
    <div className="row py-2">
        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
        <WInput label="Heading" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("Heading",e.target.value)} value={model.Heading} fullwidth/>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
            <textarea cols={35} rows={5} className="w-100 border" placeholder="About" onChange={(e:any)=>fillmodel("About",e.target.value)}   value={model.About}/>
     
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
            <textarea cols={35} rows={5} className="w-100 border" placeholder="Space Available And Capacity" onChange={(e:any)=>fillmodel("SpaceAvailable ",e.target.value)}   value={model.SpaceAvailable }/>
     
        </div>
    </div>

    <div className="row  py-2">
    <div className="col-lg-4 col-md-4 col-sm-12  py-2">
            <textarea cols={35} rows={5} className="w-100 border" placeholder="Facilities Available At Dollman Hall" onChange={(e:any)=>fillmodel("FacilitiesAvailable ",e.target.value)}   value={model.FacilitiesAvailable }/>
     
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
            <textarea cols={35} rows={5} className="w-100 border" placeholder="Location" onChange={(e:any)=>fillmodel("Location ",e.target.value)}   value={model.Location } />
     
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
            <textarea cols={35} rows={5} className="w-100 border" placeholder="Other Services" onChange={(e:any)=>fillmodel("OtherServices ",e.target.value)}   value={model.OtherServices }/>
     
        </div>
    </div>


    <div className="row py-3">

        <div className="col-lg-4 col-md-4 col-sm-12 py-2">
        <WInput label="imgURL" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("imgURL1",e.target.value)} value={model.imgURL1} fullwidth/>

</div>


<div className="col-lg-4 col-md-4 col-sm-12 py-2">
        <WInput label="imgURL" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("imgURL2",e.target.value)} value={model.imgURL2} fullwidth/>

</div>


<div className="col-lg-4 col-md-4 col-sm-12 py-2">

<WInput label="imgURL" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("imgURL3",e.target.value)} value={model.imgURL3} fullwidth/>

</div>
    </div>

    <div className="text-center">
        <WAButton Text={"Submit"} className="btn btn-info" onClick={()=>submit()}/>
    </div>


</div>
</>
} 