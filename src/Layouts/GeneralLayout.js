import React from 'react'





export const GeneralLayout = ({children}) => {
  return (
    <div  className='container-fluid  'style={{marginTop:'100px'}}> {children}</div>  )
}
export const Col = ({children}) => {
  return (
    <div  className='col-sm-5 '>{children}</div>  )
}
export const Row = ({children}) => {
  return (
    <div  className='row '>{children}</div>  )
}
export const Card = ({children}) => {
  return (
    <div class="card">
  <div class="card-body" style={{ textAlign: 'justify',
  textJustify: 'inter-word'}}>
   {children}
  </div>
</div>  )
}


