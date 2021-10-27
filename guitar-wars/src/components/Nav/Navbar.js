import {Link} from "react-router-dom"
// import React, { useState } from 'react'
import {  Nav } from 'reactstrap';
// import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import './nav.css';
import Jumbo from "../Jumbotron/Jumbo";


const Navigation = () => {
  return (
    <div className="container">
      
      <Nav className="navbar">
      <Link to="/" >Home
        {/* <NavItem>
          <NavLink>Home</NavLink>
        </NavItem> */}
        </Link>
        <Link to="/guitar-wars" >Guitar Wars
        {/* <NavItem>
          <NavLink>Guitar Wars</NavLink>
        </NavItem> */}
        </Link> 
        <Link to="/add-list" >Add List
          {/* <NavItem>
          <NavLink>Add List</NavLink>
        </NavItem> */}
        </Link>

        
      </Nav>
          <Jumbo />
 
















    </div>


    




    
    
    
  )  
}
export default Navigation;