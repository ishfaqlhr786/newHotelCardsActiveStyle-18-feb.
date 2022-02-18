
import './App.css';
import { Restaurants } from './Restaurants';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { HotelDetail } from './HotelDetail';
import { ListHotelNew } from './ListHotelNew';
const Resturants=[
  {id:1,Name:"Crados", Rating:1,Cousions:"ABC",select:false},
  {id:2,Name:"Bundu Khan", Rating:2,Cousions:"DEF",select:false},
  {id:3,Name:"Zakir Tikkah", Rating:3,Cousions:"GHI",select:false},
  {id:4,Name:"The GRill", Rating:4,Cousions:"Gpp",select:false},
  {id:5,Name:"Salt n pepper", Rating:5,Cousions:"LLL",select:false}
]
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} >
          <ListHotelNew restaurants={Resturants}/>
           {/* <Restaurants restaurants={Resturants}/> */}
          </Route>
          

        
        <Route path={"/HotelDetail/:id/:Name"} component={HotelDetail} / >   
        
        
        
          
          
         
        

        

      </Router>
     {/* <Restaurants restaurants={Resturants} /> */}
    </div>
  );
}

export default App;
