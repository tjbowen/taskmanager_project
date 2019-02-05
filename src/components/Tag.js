import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faBookmark} from  '@fortawesome/free-solid-svg-icons';


export default ({color}) => (
  <div style={{display: "inline-block"}} className="px-1"> 
    <FontAwesomeIcon icon={faBookmark} color= {color}/>
  </div>
)