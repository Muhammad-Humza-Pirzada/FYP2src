import { TextField } from "@mui/material"

type propstype={
    label:string
    variant:"outlined"|"filled"|"standard"
    onchange?:any
    type:string
    fullwidth?:any
    required? : any
    value?:any

}

export default function WInput (props:propstype){
    const {label,variant,onchange,type,fullwidth,required,value}=props
    return <>
    <TextField id={label} label={label} variant={variant} onChange={onchange} type={type} fullWidth={fullwidth} required={required} value={value}/>
    </>
}