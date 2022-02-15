
import './App.css';
import { Restaurants } from './Restaurants';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { HotelDetail } from './HotelDetail';
const Resturants=[
  {id:1,Name:"Crados", Rating:1,Cousions:"ABC"},
  {id:2,Name:"Bundu Khan", Rating:2,Cousions:"DEF"},
  // {id:3,Name:"Zakir Tikkah", Rating:3,Cousions:"GHI"},
  // {id:4,Name:"The GRill", Rating:4,Cousions:"Gpp"},
  // {id:5,Name:"Salt n pepper", Rating:5,Cousions:"LLL"}
]
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} >
          <Restaurants restaurants={Resturants}/>
          </Route>
          

        
        <Route path={"/HotelDetail/:id/:Name"} component={HotelDetail} / >   
        
        
        
          
          
         
        

        

      </Router>
     {/* <Restaurants restaurants={Resturants} /> */}
    </div>
  );
}

export default App;
