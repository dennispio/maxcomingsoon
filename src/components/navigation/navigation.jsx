import React from "react"
import "./navigation.scss"
import logo from '../../img/FBR-logo-sw.svg'



const Navigation =()=>{

    return(
        <div className="navigation-container">
          <div className ="image-container">
            <img alt="LOGO" src= {logo}></img>
          </div>        
        </div>
    )
} 

export default Navigation;