import {Link} from "react-router-dom"
// import React, { useState } from 'react'
import {  Nav } from 'reactstrap';
// import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import './nav.css';
import Jumbo from "../Jumbotron/Jumbo";


const Navigation = () => {
  return (
    <div className="containerNav">
     
      <Nav className="navbar">
      <Link className="navLi" to="/" >Home
        </Link>
        <Link className="navLi"  to="/guitar-wars" >Guitar Wars
       
        </Link> 
        <Link className="navLi"  to="/add-list" >Add List

        </Link>
      </Nav>
        <Jumbo /> 
      
{/*       
      <nav>
      <ul class="menu">
          <li class="logo">
          </li>
          <li class="item">
          <Link className="navLi" to="/" >Home
        </Link>
          </li>
          <li class="item">
          <Link className="navLi"  to="/guitar-wars" >Guitar Wars
       </Link> 
          </li>
          <li class="item">
          <Link className="navLi"  to="/add-list" >Add List

</Link>
          </li>
        
      
    </ul>
</nav> */}

    </div>


    




    
    
    
  )  
}
export default Navigation;