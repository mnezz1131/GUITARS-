import { Button, ButtonDropdown,  Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Route } from "react-router-dom";
import GuitarPage from "../GuitarPage/GuitarPage.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // setting state variables to hold data coming from air table
  const [gtrPlayers, setGtrPlayers] = useState([]);

  function useButtonState(defaultOpen = false) {
    const [ isOpen, setOpen ] = useState(defaultOpen);
    return { isOpen, toggle: () => setOpen(isOpen => !isOpen) };
  }
  const { isOpen, toggle } = useButtonState();
  
  // setting use effect to make axios call and store data
  useEffect(() => {
    // console.log("Getting data");
    const gtrData = async () => {
      const resp = await axios.get("https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ")
      console.log(resp.data)
      // updating gtrData state
      setGtrPlayers(resp.data.records)
    }
    gtrData();
}, [])

  return (
    <div>
<ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret>
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
     
        <DropdownItem>Top 5 Guitarists</DropdownItem>
        <DropdownItem>Top 10 Guitarists</DropdownItem>
        <DropdownItem>Top 15 Guitarists</DropdownItem>
 
       
      </DropdownMenu>
    </ButtonDropdown>

      <h1>This is my Home Page</h1>
          {gtrPlayers.map((gtrPlayer) => (
        <div key={gtrPlayer.id}>
        <Link to ={`/guitarist-page/${gtrPlayer.id}`}>
          <h2> Guitarist : {gtrPlayer.fields.names}</h2></Link>
          <img alt={gtrPlayer.fields.name} src={gtrPlayer.fields.small} />
          <h2>ID: {gtrPlayer.id}</h2>
        </div>        
      ))}
          
      <Route path="/guitarist-page/:id">  
        <GuitarPage
          gtrPlayers = {gtrPlayers}
        />
      </Route>
      
      
        


  
    </div>
)
}

export default Home;

// GET https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ
