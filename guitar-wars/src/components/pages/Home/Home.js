import "./Home.css"
import {  useState } from "react"
import { Link, } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, CssBaseline, Container, Button, Grid,  } from "@material-ui/core"
import useStyles from "./styles";

const Home = ({ gtrPlayers }) => {
  const classes = useStyles();
  const [showing, SetShowing] = useState(true)
  //function is going to pass in the flipped boolean
  //going to set showing to whatever showing in not
  const toggleState = () => {
    console.log("i was clicked")
    SetShowing(!showing)
  }

  
  return (
  <div className="top">
    <main>
        <CssBaseline />
        <Button className={classes.button}  variant='contained' onClick = {toggleState}>toggle state</Button>    
         <Container className={classes.container} maxWidth="sm">
           <Typography variant="h3" align="center" gutterBottom>This is my Home Page
            </Typography >
           <p>
              Welcome to the Guitar list website where the debate rages over who the best, most influential guitarists of all time are!
              </p>
           </Container>
        
        {showing && <div>
           
          
            <Container className={classes.container}  maxWidth="md">
            <Grid container spacing={4} justifyContent="center">
     
            {gtrPlayers.map((gtrPlayer) => (
                
                <div className="gtrDiv" key={gtrPlayer.id}>
                <Link to ={`/guitarist-page/${gtrPlayer.id}`}>
                    <Typography gutterBottom variant="h6">  {gtrPlayer?.fields?.names}</Typography></Link>
                    <img alt={gtrPlayer?.fields.names} src={gtrPlayer?.fields.small} />
                  <Typography gutterBottom variant="h5">Rank: {gtrPlayer.fields.rank}</Typography>
              
                </div>        
   
   ))}

              
   </Grid>
           </Container>
    


        </div>}
    </main>
  </div>
)
}

export default Home;

// GET https://api.airtable.com/v0/app69ZErQlRDvLFux/Table%201?api_key=key4oMm9k9ZdBAjAJ
