import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "../Screen/HomePage";
import LoginData from "../Screen/Login";
import Signup from "../Screen/Signup";
import About from "../Screen/About";
import ServiceData from "../Screen/service";

import VanueGigs from "../Screen/VanueGigspage";
import AdminPanel from "../AdminPalen/Dashbord";
import Vanue from "../Screen/VanueDetail";
import VanueDetail from "../Screen/VanueDetail";



export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/service" element ={<ServiceData/>}/>
     <Route path="VanueDetail" element={<VanueDetail/>}/>
        <Route path="/VanueGigs" element={<VanueGigs/>}/>
       

        <Route path="/Login" element={<LoginData/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="Admin/*" element={<AdminPanel/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
}