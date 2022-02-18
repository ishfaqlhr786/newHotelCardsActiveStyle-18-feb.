import React from 'react'
import './Resturants.css';
import './App.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
export const ListHotelNew = (props) => {
    const [Appstate, changeState] = useState({
       // activeObject: null,
        objects: props.restaurants
    })
 // const [clicked,setClicked]=useState([...props.restaurants])
  
 // console.log(clicked)
 const toggleActive =(index)=>{
     console.log(index)
    let arrCopy=[...Appstate.objects];
    
  arrCopy[index].select ? 
    (arrCopy[index].select=false):(arrCopy[index].select=true)
    changeState({...Appstate,objects:arrCopy})
}
     const   toggleStyle =(index)=>{
         if(Appstate.objects[index].select){
             return 'item active'
         }
         else{
             return 'item inactive'
         }
        }
      
       return (
        <div>
             <div className="main d-grid gap-4"  >{
                   Appstate.objects.map((hotel,index) => {
                      // const {id}=hotel
                       return (
                           <>
                             <div className="item" key={index}
                                   style={{
                                     background: 
                                    
                             Appstate.objects[index].select
                                       ? 'red' : 'green'
                                   }}
                                //    onClick={() => toggleActive(index)}
                                onClick={()=>toggleActive(index)}
                               >
                                   id:{hotel.id}<br />
                        Name:{hotel.Name}<br />
                        
                        Cousions:{hotel.Cousions}<br />
                        
                                   <br />
                                   <Link to={`/HotelDetail/${hotel.id}/${hotel.Name}`}>View</Link>

                               </div>

                               

                           </>
                       )
                   })
               }
               </div>

        </div>
    )
}
