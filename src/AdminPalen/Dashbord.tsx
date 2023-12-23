import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useState from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserData from './UserData';
import CardForm from './CardForm';
import ShowCard from './ShowCard';
import { Navigate } from 'react-router-dom';
import NavData from '../compoent/NavData';
import WAButton from '../compoent/WAButton';
import './Dashboardstyle.css'
import VanueDetailForm from './VanuesDetailform';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function AdminPanel(props: Props) {
  const { window } = props;
  const Navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const [text,settext]=React.useState([
    {
        name:"User UserData",
        Routeurl:"UserData"
    },
    {
        name:"Card Form",
        Routeurl:"CardForm"
    },

    {
        name:"Show Card",
        Routeurl:"ShowCard"
    },
    {
      name:"cardDetailForm",
      Routeurl:"cardDetailForm"


    }
  ])

  let openPage = (Routeurl:any)=>{
    Navigate(`/Admin/${Routeurl}`)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {text.map((x, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={()=>openPage(x.Routeurl)}>
          
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
   
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor:"rgb(231 46 119)"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >

           
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" >
            Vanue Hub
          </Typography>
          <div className="ms-auto  rounded btn-border">
          <WAButton Text={"LOGOUT"} className='  color ' onClick={()=>Navigate("/")}/>

          </div>
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }
        
        }
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}

          
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            

          }}
          open
          
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>


        <Route path='UserData' element = {<UserData/>}/>
        <Route path='CardForm' element = {<CardForm/>}/>
        <Route path='ShowCard' element = {<ShowCard/>}/>
        <Route path='cardDetailForm' element={<VanueDetailForm/>}/>
        </Routes>
        
      </Box>
    </Box>
  );
}
