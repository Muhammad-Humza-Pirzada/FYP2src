import './EventsBooker.css'
type propstype={
    img : any,
    heading:string
    para:string
    buttontext:string
    onclick?:any
}

export default  function EventsBooker(props:propstype){
let {img,heading,para,buttontext,onclick}=props
    return <>
    <div className="work-section bg-grey  margin-30">
        <div className="container padding-0">
            <div className="row justify-content-center align-items-center g-2 ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3 text-center">
                    <img className="lazyloaded w-75" src={img} alt="Create Online Invitations"/>
                    
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3 ">
                    <h3 className="small-font" >{heading}</h3>
                    <p className="text-xl">{para}</p>
                    <div className="btn-sec">
                     
                            <button className="btn btn-outline-danger browse btn-lg browse px-4 py-3" onClick={onclick}>{buttontext}</button>
                        
                    </div> 
                </div>

            </div>
        </div>
    </div>
    
    </>
}