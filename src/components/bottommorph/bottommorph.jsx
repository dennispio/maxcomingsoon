import React from 'react'
import "./bottommorph.scss"
import bottommorphpic from '../../img/bubble_left.png'


const Bottommorph = () =>{
    return(
        <div className="bottommorph-container">
          <img  alt="bottommorph" src={bottommorphpic}></img>
          <div className="link-container"> 
                <div className="link">
                    <a href="">
                        Datenschutz
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        Impressum
                    </a>
                </div>                   
            </div>
          </div>
    )
}

export default Bottommorph