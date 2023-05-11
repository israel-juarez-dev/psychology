import React from 'react';
import officeImage from '../images/office.jpg'
import './Home.css'
export default function Home() {
  return (<>
    <img src={officeImage} alt='office' className="img " width='100'/>
    <div  className='fade-in-image' >
    <p className='carousel-caption text-over-img' style={{bottom: '10rem'}}>Toma Pequeños Pasos A Un Gran Futuro</p>
  </div>
  </>
  )
}
