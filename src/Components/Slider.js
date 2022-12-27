import React from "react";
import "./Slider.css";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Slider({children}) {
  const [open, setOpen] = useState(true);
  const toggle =()=> setOpen(!open);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "/expirence",
      name: "Expirence",
      icon: <ConnectWithoutContactIcon />,
    },
    {
      path: "/hobbies",
      name: "Hobbies",
      icon: <SportsVolleyballIcon />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <AccountTreeIcon />,
    },
    {
      path: "/recentWork",
      name: "RecentWork",
      icon: <EngineeringIcon />,
    },
    {
      path: "/about",
      name: "About",
      icon: <ContactsIcon />,
    },
  ];

  return (
    
      <div className="outer-div">
        <div style={{width : open ? "230px" : "70px", paddingLeft : open ? "0px" : "20px"}} className="inner-div">
          <div className="top_section">
            <div style={{display : open ? "block" : "none"}} className="Logo">Logo</div>
            <MenuIcon  onClick={toggle}/>
          </div>
          <div className='data_all'>
          {
            menuItem.map((item,index)=>(
              <NavLink to={item.path} key={index} className="Links_new" activeclassname="active">
                <div className="icons_new">{item.icon}</div>
                <div style={{display : open ? "block" : "none"}} className="Names">{item.name}</div>
              </NavLink>
            ))
          }
          </div>
        </div>
        <main>{children}</main>
      </div>
    
  );
}

export default Slider;
