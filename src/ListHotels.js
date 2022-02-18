import React,{useState} from 'react'
import App from './App'
import './Resturants.css';
export const ListHotels = () => {
    const [appstate,setApp]=useState({
        
        objects:[{id:1,name:'Crados',cousions:'abc',select:true},
        {id:2,name:'Bundu khan',cousions:'jju',select:false},
        {id:3,name:'Slet n pepper',cousions:'ppo',select:false},
        {id:4,name:'Ziafat',cousions:'iii',select:true}]

    

    })
    console.log(appstate)
    const toggleStyle=(index)=>{
        if(appstate.objects[index].select){
            return 'item active'
        }else{
            return 'item inactive'
        }
    }
    const toggleActive =(index)=>{
        let arrCopy=[...appstate.objects];
        
      arrCopy[index].select? 
        (arrCopy[index].select=false):(arrCopy[index].select=true)
        setApp({...appstate,objects:arrCopy})
    }
    return (
        <div className="main d-grid gap-4" >
            {
                appstate.objects.map((el,index)=>{
                    return(<>
                    <div key={index}
                    className={toggleStyle(index)}
                    onClick={()=>toggleActive(index)}
                    >
             <h2>{el.id}</h2>
             <h2>{el.select}</h2>
             <h2>{el.name}</h2>
             <h2>{el.cousions}</h2>
                    </div>
                    </>)

                })
            }
        </div>
    )
}
