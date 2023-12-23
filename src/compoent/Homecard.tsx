type propostype ={
    image:any,
    para:string
    heading:string
}
export default function HomeCard (props:propostype){
let {image,para,heading}=props
return <>
<div className="card" >
<img src={image} alt=""  className="card-img-top"/>
<div className="card-body">
    <h5>{heading}</h5>
    <p>{para}</p>
</div>
</div>
    </>
}
