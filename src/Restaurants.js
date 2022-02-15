import React from 'react'
import './Resturants.css';

import { useState, useRef } from 'react'
import {Link} from 'react-router-dom'

export const Restaurants = (props) => {
    const [selected, setSelected] = useState("")
    const [toggleCard,setToggleCard]= useState(false)
    const myRef = useRef(null);
    const changeColor = (id) => {
        setToggleCard(!toggleCard)
        setSelected(id)
       
       
       
    }
    return (
        <div>

            <div className="main d-grid gap-4"  >{
                props.restaurants.map((hotel) => {
const {id}=hotel
                    return (
                        <>
                    
                            <div className="item " ref={myRef} key={id}
                                style={{ backgroundColor: selected === id 
                                    && toggleCard
                                    ? "red" : "" }}
                                onClick={() => changeColor(hotel.id)}
                            >



                        

                                id:{hotel.id}<br />
                        Name:{hotel.Name}<br />
                        Cousions:{hotel.Cousions}<br />
                        Rating: {hotel.Rating}
                      <br/>
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
