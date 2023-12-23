import WAButton from "../compoent/WAButton";
import WInput from "../compoent/WInput";
import { useState } from "react";

export default  function CardForm (){
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
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
        <WInput label="Heading" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("Heading",e.target.value)} value={model.Heading}/>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
        <WInput label="Location" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("Location",e.target.value)}  fullwidth value={model.Location}/>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  py-2">
        <WInput label="Price" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("Price",e.target.value)}  fullwidth value={model.Price}/>
        </div>
    </div>

    <div className="row py-5">
    <div className="col-lg-4 col-md-4 col-sm-12  py-2">
        <WInput label="Image Url" variant="standard" type="text" required={require} onchange={(e:any)=>fillmodel("ImgUrl",e.target.value)}  fullwidth value={model.ImgUrl}/>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 py-2 ">
        <WInput label="About" variant="standard" type="text" required={require}/>
        </div>
    </div>

    <div className="text-center">
        <WAButton Text={"Submit"} className="btn btn-info" onClick={()=>submit()}/>
    </div>


</div>
</>
} 