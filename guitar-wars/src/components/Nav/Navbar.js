import {Link} from "react-router-dom"
import "./nav.css"

const Navbar = () => {
  

  return (
    <div>
       <nav className ="nav">
      <Link to="/" >
            <img
              src="http://media-s3-us-east-1.ceros.com/adam-cowie/images/2019/09/04/ae29ac5dfa8bf7db08279b30e0639854/hamburger-icon.svg"
              alt=""
            />
          <h2>Home Page</h2>
      </Link>
      
      <Link to="/guitar-wars" >
          <h2>Guitar Wars</h2>
      </Link>
      
      <Link to="/add-list" >
          <h2>Add List</h2>
      </Link>
      </nav>
   </div>
        

  
  )


  
}
export default Navbar;