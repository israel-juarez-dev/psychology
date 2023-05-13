import React from 'react'





export const GeneralLayout = ({children}) => {
  return (
    <div  className='container-fluid  'style={{paddingTop:'50px'}}> {children}</div>  )
}
export const Col = ({children}) => {
  return (
    <div  className='col-sm-5 'style={{ textAlign: 'justify',
    textJustify: 'inter-word',margin:'10px 0 10px 0'  }}>{children}</div>  )
}
export const Row = ({children}) => {
  return (
    <div  className='row gy-55'>{children}</div>  )
}
export const Card = ({children}) => {
  return (
    <div class="card ">
  <div class="card-body  " style={{ textAlign: 'justify',
  textJustify: 'inter-word', padding:"0px"  }}>
   {children}
  </div>
</div>  )}
export const CardText = ({children}) => {
  return (
    <div class="card ">
  <div class="card-body  " style={{ textAlign: 'justify',
  textJustify: 'inter-word',margin:'10px 0 10px 0'  }}>
   {children}
  </div>
</div>  )


}


