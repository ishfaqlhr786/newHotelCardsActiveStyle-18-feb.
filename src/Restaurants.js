import React from 'react'
import './Resturants.css';

import { useState, useRef } from 'react'


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

            <div className="main"  >{
                props.restaurants.map((hotel) => {

                    return (
                        <>

                            <div className="item " ref={myRef} key={hotel.id}
                                style={{ backgroundColor: selected === hotel.id 
                                    && toggleCard
                                    ? "red" : "" }}
                                onClick={() => changeColor(hotel.id)}
                            >





                                id:{hotel.id}<br />
                        Name:{hotel.Name}<br />
                        Cousions:{hotel.Cousions}<br />
                        Rating: {hotel.rating}



                            </div>


                        </>
                    )
                })
            }
            </div>

        </div>
    )
}
