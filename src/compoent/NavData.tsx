import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function NavData() {
  let navigate = useNavigate()
    return <>
     <Navbar expand="lg"  className="NavBack text-white sticky-top  py-1 " >
      <Container fluid>
      <NavLink className="navbar-brand text-white" to="/">
            <h3>Mr Placer</h3>
          </NavLink>

        <Navbar.Toggle aria-controls="navbarScroll" className=' bg-light'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto  text-xl m">
            <NavLink  to="/"  className=' text-white mx-2 text-decoration-none'>Home</NavLink >

            <NavLink to="/About" className=" text-white mx-2 text-decoration-none">
              About
            </NavLink>

            <NavLink to="/service" className=" text-white mx-2 text-decoration-none">
              Service
            </NavLink >


            <NavLink to="/VanueGigs" className=" text-white mx-2 text-decoration-none">
              Vanue
            </NavLink >

            <NavLink to="/VanueGigs" className=" text-white mx-2 text-decoration-none">
              Vendors
            </NavLink >

            {/* <NavLink to="venue" className='hover   text-decoration-none border m-0'>       
            <NavDropdown title="Link" id="navbarScrollingDropdown" className="m-0  text-decoration-none">
            <div className=''>
                <h5>Type</h5>

              </div>
              
           
             <div className='d-flex'>
              <div>
              <NavDropdown.Item href="#action4">
              Banquet Halls
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
              Small Function & Patry Halls
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
              Lawns & Farmhouse
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
              Eduction Ceremony 
              </NavDropdown.Item>

              </div>

              <div>
              <div className='tex-center'>
                  <h5>City</h5>
                </div>

              <NavDropdown.Item href="#action4">
              Hyderabad
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
              Karachi
              </NavDropdown.Item>
              

              </div>


             </div>
            </NavDropdown>
            
               </NavLink> */}






          </Nav>

        <Nav>



        </Nav>
         

          
          
       
       
      


      

           

           <button className="rounded-full  d-block   buttonText" onClick={()=>navigate("/Login")}>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </>
    
    
}



// section One


// section One end
  