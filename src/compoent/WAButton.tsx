import { Icon } from "@mui/material"

type typeprops ={
    
    className:string
    Text:String
    onClick?:any
    Icon?:any
}
export default function (props:typeprops){
    let {className,Text,onClick,Icon}=props
    return <>
    <button  className={className} onClick={onClick} > {Icon} {Text} </button>
    </>
}