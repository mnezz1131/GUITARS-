import {Link} from "react-router-dom"
import React, { useState } from 'react';
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import './nav.css';
import Jumbo from "../Jumbotron/Jumbo";


const Navigation = () => {
  return (
    <div className="container">
      
      <Jumbo />
      <Nav className="navbar">
      <Link to="/" exact >
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        </Link>
        <Link to="/guitar-wars" >
        <NavItem>
          <NavLink>Guitar Wars</NavLink>
        </NavItem>
        </Link>

        <Link to="/add-list" >
        <NavItem>
          <NavLink>Add List</NavLink>
        </NavItem>
        </Link>

        
      </Nav>
      <hr />
















    </div>


    




    
    
    
  )  
}
export default Navigation;