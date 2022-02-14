import logo from './logo.svg';
import './App.css';
import { Restaurants } from './Restaurants';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
const Resturants=[
  {id:1,Name:"Crados", Rating:1,Cousions:"ABC"},
  {id:2,Name:"Bundu Khan", Rating:2,Cousions:"DEF"},
  {id:3,Name:"Zakir Tikkah", Rating:3,Cousions:"GHI"}
]
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" >
        <Restaurants restaurants={Resturants} />
        
        </Route>
        <Route path="/HotelDetail/:id" >

        
          
        </Route>

      </Router>
     <Restaurants restaurants={Resturants} />
    </div>
  );
}

export default App;
