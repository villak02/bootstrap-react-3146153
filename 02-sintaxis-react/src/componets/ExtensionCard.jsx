import react from 'react'
import "../stylesheets/ExtensionCard.css"
import { NavBar } from './NavBar'

export const ExtensionCard = ({cardTitle, cardImage, cardDescription}) => {

    return ( 
        <>
        

        <div class="tarjeta">
    <div class="info">
      <div class="icon">{cardImage}</div>

      
    <div>
      <h3>{cardTitle}</h3>
      <p>{cardDescription}</p>
    </div>
    </div>
    <div class="actions">
    <button>Remove</button>
    <label class="switch">
      <input type="checkbox" checked />
      <span class="slider"></span>
    </label>
    </div>
    </div>

        </>

    
    )
    
}



    