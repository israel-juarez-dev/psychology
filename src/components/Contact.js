import React from 'react'
import MapSection from "./MapSection";
import './Contact.css'
import ContactContainer from './ContactContainer';
import Nan from '../images/nan.png';

export default function Contact() {

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427
  }

  const zoomLevel = 3

  return (<>
  
    <div className='row'>
 <div className="col">
  <ContactContainer>
  <h5 className="card-title">Psic. Nancy Andrade</h5>
lorem
<img src={Nan} className="card-img-top " alt="fewf"/>
<p className="card-text">Allende 3, Centro, 62731 Yautepec de Zaragoza, Mor.</p>

  </ContactContainer>
 </div>
    <div className="col">
    <ContactContainer>
    <h5 className="card-title">Psic. Diana García Q.</h5>
<div className='img-gallery'>

<img src={Nan} className="card-img-top " alt="fdsf"/>
</div>
    <p className="card-text">Angustias de Calleja #116 Cuautla, Centro</p>
      
    </ContactContainer>

    </div>
    <div className="col">
   
    </div>
    </div>
    <div>
      
<row>
<div className='col' >
<div className='container-fluid p-3'>
<div className='card' >
<div className='card-body' >

 <div style={{ height: '100vh', width: '100%' }}>
        <MapSection

location={location} 
zoomLevel={zoomLevel}
/>
    </div>
  
    </div>
    </div>
    </div>
    </div>
    </row>    
</div>

  </>
  )
}
