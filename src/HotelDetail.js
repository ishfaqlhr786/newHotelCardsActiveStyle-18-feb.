import React from 'react'
import {useParams} from 'react-router-dom'
//import { useParams } from "@reach/router"
export const HotelDetail = () => {
    
    //console.log(id)
    const { id,Name }=useParams()
   console.log(id,Name)

    return (
        <div>
            <h1>Hotel Details</h1>
          <h2>Hotel_Id:{id}  </h2>
          <h2>Hotel_name:{Name}</h2>
        </div>
    )
}
