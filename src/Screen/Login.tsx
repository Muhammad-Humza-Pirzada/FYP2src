import WInput from "../compoent/WInput";
import WAButton from "../compoent/WAButton";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './login.css'

export default function LoginData (){

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
  
    };

    const [model,setmodel]=useState<any>({})
    const fillmodel = (key:string,val:any)=>{

model[key]=val
setmodel({...model})
    }


    const addtask = ()=>{
        console.log(model)
        Navigate('/Admin')
    }


    const Navigate=useNavigate()


    
  
    return <>


   

    <div className=" h-screen flex justify-center items-center   loginbackground" >
    <div className="w-[500px] bg-[rgba(255,255,255,.2)] shadow-2xl  form-filter p-10 rounded-lg">
    <div className="py-5 text-center">
            <h1 className="text-3xl font-medium">Login</h1>
          </div>
          <div className="py-2 text-center">

            <WInput type="email" label="email" variant={"outlined"}  onchange={(e:any)=>fillmodel("email",e.target.value)} value={model.email} />
          </div>

          <div className="py-2 m-auto text-center">
          <FormControl sx={{ m: 1, width: '39ch' }} variant="standard"   >
          <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e:any)=>fillmodel("password",e.target.value)}
            value={model.password}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"

                
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>



</div>

<div className="text-center">
    <WAButton Text={"Login"} className="bg-teal-700 rounded-full  p-2 text-white px-5"   onClick={addtask} />
</div>

<div className="text-center ">
  <div className="pt-5">

  
  <Link to={"/Signup"} className="text-black ">Create A Account</Link>
  </div>

</div>
    </div>

    </div>

    </>
}