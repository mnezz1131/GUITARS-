import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {  useState } from "react"
import { Link, } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({gtrPlayers}) => {
  // setting state variables to hold data coming from air table
  
  function useButtonState(defaultOpen = false) {
    const [ isOpen, setOpen ] = useState(defaultOpen);
    return { isOpen, toggle: () => setOpen(isOpen => !isOpen) };
  }
  const { isOpen, toggle } = useButtonState();
  

  const [showing, SetShowing] = useState(true)
  //function is going to pass in the flipped boolean
  //going to set showing to whatever showing in not
  const toggleState = () => {
    console.log("i was clicked")
    SetShowing(!showing)
  }

  let newArray = []
   newArray.push(gtrPlayers)
  newArray.sort((a, b) => {
    return a.fields.rank - b.fields.rank;
    })

    console.log(newArray)

  
  return (
    <div>

      <button onClick = {toggleState}>toggle state</button>
      {showing && <p>Logical Statement: can you see me?</p>}
      {showing ? <p>Ternanry: can you see me?</p> : null}
 

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
          <h2> Guitarist : {gtrPlayer?.fields?.names}</h2></Link>
          <img alt={gtrPlayer.fields.names} src={gtrPlayer.fields.small} />
          <h2>ID: {gtrPlayer.id}</h2>
        </div>        
      ))}
          
 
      
    
        


  
    </div>
)
}

export default Home;

// GET https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ
