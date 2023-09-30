import React from "react";
import './floutingDiv.css'
import { color } from "framer-motion";

export default function FloutingDiv({image , text1 , text2}) {

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