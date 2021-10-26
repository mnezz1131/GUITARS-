import {Link} from "react-router-dom"

import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import './nav.css';


const Navbar = () => {
  

  return (
    <>
      <nav className="navbar">
     
 
      
            <ul>
              
      <Link to="/"  >
      <li><MenuSharpIcon /></li>
          <li>Home Page</li>
      </Link>
      
      <Link to="/guitar-wars" >
      <li>Guitar Wars</li>
      </Link>
      
      <Link to="/add-list" >
    <li>Add List</li>
            </Link>
            </ul>     
    
    
      </nav>
   </>
        

  
  )


  
}
export default Navbar;