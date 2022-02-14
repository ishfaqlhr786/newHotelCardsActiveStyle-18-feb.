import React from 'react'
import './Resturants.css';

import { useState, useRef } from 'react'


export const Restaurants = (props) => {
    const [selected, setSelected] = useState("")
    const myRef = useRef(null);
    const changeColor = (id) => {
        setSelected(id)
    }
    return (
        <div>

            <div className="main"  >{
                props.restaurants.map((hotel, i) => {

                    return (
                        <>

                            <div className="item " ref={myRef} key={hotel.id}
                                style={{ backgroundColor: selected === hotel.id ? "red" : "" }}
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
