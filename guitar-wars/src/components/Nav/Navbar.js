import {Link} from "react-router-dom"
import {AppBar, Typography, Toolbar, CssBaseline, Container } from "@material-ui/core"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import './nav.css';


const Navbar = () => {
  

  return (
    <>
      <nav className="navbar">
        <Container>
      <CssBaseline />
      <AppBar position="fixed">
       <Toolbar>
            <ul>
              
      <Link to="/" exact >
      <li><MenuSharpIcon /></li>
          <li><Typography variant= "h5">Home Page</Typography></li>
      </Link>
      
      <Link to="/guitar-wars" >
      <li><Typography variant= "h5">Guitar Wars</Typography></li>
      </Link>
      
      <Link to="/add-list" >
    <li> <Typography variant= "h5">Add List</Typography></li>
            </Link>
            </ul>     
      </Toolbar>
      </AppBar>
     </Container>
      </nav>
   </>
        

  
  )


  
}
export default Navbar;