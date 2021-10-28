import { Link } from "react-router-dom";
// import React, { useState } from 'react'
import { Nav } from "reactstrap";
// import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import "./NavBar.css";
import Jumbo from "../Jumbo/Jumbo";

const NavBar = () => {
  return (
    <div className="containerNav">
      <Nav className="navbar">
        <Link className="navLi" to="/">
          Home
        </Link>

        {/* <Link className="navLi"  to="/guitar-wars" >Guitar Wars
        </Link> */}

        <Link className="navLi" to="/add-list">
          Add List
        </Link>
      </Nav>

      <Jumbo />
    </div>
  );
};
export default NavBar;
