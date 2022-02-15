import React from 'react'
import './Resturants.css';
import { useState } from 'react'
import {Link} from 'react-router-dom'
export const Restaurants = (props) => {
    const [Appstate, changeState] = useState({
        activeObject: null,
        objects: props.restaurants
    })
    console.log(Appstate.objects)
    const toggleActive = (index) => {
        changeState({ ...Appstate, activeObject: Appstate.objects[index] })
        console.log(Appstate.objects[index])
        console.log(Appstate.activeObject)
        }
       return (
        <div>
             <div className="main d-grid gap-4"  >{
                   Appstate.objects.map((hotel, index) => {
                       return (
                           <>
                             <div className="item" key={index}
                                   style={{
                                       background: Appstate.objects[index] === Appstate.activeObject ? 'red' : ''
                                   }}
                                   onClick={() => toggleActive(index)}
                               >
                                   id:{hotel.id}<br />
                        Name:{hotel.Name}<br />
                        index:{index}
                        Cousions:{hotel.Cousions}<br />
                        Rating: {hotel.Rating}
                                   <br />
                                   <Link to={`/HotelDetail/${hotel.id}/${hotel.Name}`}>View</Link>

                               </div>

                               <h2>index:{index}</h2>

                           </>
                       )
                   })
               }
               </div>

        </div>
    )
}
