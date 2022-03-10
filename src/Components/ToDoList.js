import React from 'react'
import './ToDoList.css'


export default function ToDoList(props) {
  return (
    
      <div className="lists">

        
        <button onClick={()=>{
            props.deleteFunc(props.id)
        }} className="listbuttons hovers">x</button>
        <li>{props.items}</li>
      </div>
    
  )
}
