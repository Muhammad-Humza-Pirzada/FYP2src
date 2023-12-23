
import { useState } from 'react';
import WInput from '../compoent/WInput';
import WAButton from '../compoent/WAButton';
import { useNavigate } from 'react-router-dom';
import './signup.css'
export default function Signup() {
   const [model,setmodel]=useState<any>({})
   const fillmodel = (key:string,val:any)=>{
    model[key]=val
    setmodel({...model})
   }
const Navigate = useNavigate()
   const AddTask = ()=>{
    console.log(model)
    Navigate('/')
   }

    return <>
   <div className="backgroundone h-screen flex justify-center items-center">
   <div className="w-[500px] bg-[rgba(255,255,255,.2)] form-filter p-10 rounded-lg">

   <div className="py-5">
            <h1 className="text-3xl font-medium">Sign Up</h1>
          </div>

          <div className="py-2">
            <WInput variant={"outlined"} type='text' label='User Name' fullwidth required onchange={(e:any)=>fillmodel("UserName",e.target.value)}/>

          </div>

          <div className="py-2">
            <WInput variant={"outlined"} type='text' label='Hall Name' fullwidth onchange={(e:any)=>fillmodel("HallName",e.target.value)}/>

          </div>

          <div className="py-2">
            <WInput variant={"outlined"} type='text' label='Address' fullwidth required onchange={(e:any)=>fillmodel("Adress",e.target.value)}/>

          </div>

          <div className="py-2">
            <WInput variant={"outlined"} type='email' label='Email' fullwidth required onchange={(e:any)=>fillmodel("Email",e.target.value)} />

          </div>

          
          <div className="py-2">
            <WInput variant={"outlined"} type='Password' label='Password' fullwidth required onchange={(e:any)=>fillmodel("Password",e.target.value)}/>

          </div>

          <div className='text-center'>
          <WAButton Text={"Sign Up"} className="bg-teal-700 rounded-full  p-2 text-white px-5"  onClick={AddTask} />
          </div>


   </div>
</div>



    </>
}


