import React from 'react'
import "./contact.scss"

const Contact = ()=>{
    return(
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Coming soon</h1>
        </div>
        <div className="contact-paragraph">
          <p>Unsere Seite befindet sich noch im Aufbau. Du erreichst uns in der Zeit wie gewohnt per Mail oder Telefon.</p>
        </div>
        <div className="button-container">
          <div className="button">
            <a href="mailto:Kontakt@ernaehrungsberatung-faber.de?subject=Ernährungsberatung"><button>E-Mail</button></a>
          </div>
          <div className="button">
            <a href="tel:+4915785624045"><button>Telefon</button></a>
          </div>
        </div>
      </div>  
    )
}

export default Contact