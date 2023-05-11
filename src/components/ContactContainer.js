import React from 'react'

export default function ContactContainer({children}) {
  return (    <div className='container-fluid p-3'>

    <div className="card " style={{width: 280, 'margin':'auto' }} >
    <div className="card-body">
      {children}
    </div>
    </div>
    </div>
    
  )
}
