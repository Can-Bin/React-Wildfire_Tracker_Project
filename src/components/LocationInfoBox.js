import { useState } from "react";
import { Icon } from "@iconify/react" 

const LocationInfoBox = ({info, isOpen, setIsOpen, handleClick}) => {
    

  return (
    <div className="location-info">
        <h2>Event Location Info</h2>
        <ul>
            <li>ID: <strong>{info.id}</strong></li>
            <li>TITLE: <strong>{info.title}</strong></li>
        </ul>            
    </div>
  )
}

export default LocationInfoBox