import React from "react";
import './floutingDiv.css'

export default function floutingDiv({image , text1 , text2}) {
  return(
    <div className = 'floting'>
      <img src = {image} />
      <span> 
      {text1}
      <br/>
      {text2}  
      </span>

    </div>
  );
}