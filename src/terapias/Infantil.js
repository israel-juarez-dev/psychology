import React from 'react'
import {GeneralLayout, Row, Col, Card,CardText} from '../Layouts/GeneralLayout.js'
import './terapias.css'
import guySitting from './images/individual/quinton-coetzee-lzlJC_ZY0OI-unsplash.jpg'
import Container from '../components/ContactContainer.js'
import RainbowPaper from './images/Terapia Infantil/taylor-heery-g7dUm6lRvtQ-unsplash.jpg'
export default function Infantil() {
  return (<>
 <div id="intro">

  

<GeneralLayout>
  
  <Row>
  <p className="col-1"></p>
    <Col>
    <Card>
    <div classname="img-gallery "> 
     <img  className='card-img-top' src={RainbowPaper} width='200px' height='700px' />


    <div>Foto de <a href="https://unsplash.com/@taylorheeryphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taylor Heery</a> en <a href="https://unsplash.com/es/s/fotos/children-therapy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </div>
  
  </div>
    </Card>
    </Col>
    <Col>
    {/* <CardText> */}
<div style={{textAlign: "justify"}}  >
    <p>La terapia individual brinda un espacio seguro y confidencial para la autorreflexión y la expresión, lo cual es esencial para mejorar la salud mental. En la terapia, las personas pueden compartir sus pensamientos y sentimientos abiertamente sin temor a juicios o repercusiones. Este espacio seguro permite a las personas explorar sus preocupaciones y emociones en un entorno de apoyo, lo que puede conducir a una mayor autoconciencia y crecimiento personal. El espacio analítico creado en la terapia individual permite a las personas reflexionar sobre sus experiencias emocionales y patrones de pensamiento, lo que puede ayudarlos a comprender mejor su propio comportamiento y motivaciones. Al proporcionar un entorno de apoyo y sin prejuicios, la terapia individual puede ayudar a las personas a sentirse escuchadas y validadas, lo que puede conducir a una mejor salud mental y bienestar.

       </p>
</div>
    {/* </CardText> */}
    </Col>
    <div className="col-1"></div>

  </Row>
  <Row>
  <div className="col-1"></div>
    <Col>
    {/* <CardText> */}
<p>
La terapia individual también puede ayudar a las personas a identificar y abordar patrones de pensamiento y comportamiento poco saludables. En la terapia, las personas pueden trabajar con un terapeuta capacitado para identificar patrones de pensamiento y comportamientos negativos que pueden estar contribuyendo a sus problemas de salud mental. Con la ayuda de un terapeuta, las personas pueden aprender nuevos mecanismos y estrategias de afrontamiento para manejar sus pensamientos y emociones de una manera más saludable. A través de la terapia individual, las personas pueden adquirir habilidades para enfrentar los desafíos de la vida y mejorar su salud mental en general.
</p>
    {/* </CardText> */}
    </Col>
    <Col>
    <Card>
    <div class="img-gallery">
    <img  alt='person sitting' className="card-img-top img-fluid " src={guySitting}/>
  </div>
    </Card>

    </Col>
    <div className="col-1"></div>
  </Row>
  <Row>
  <div className="col-1"></div>

    <Col>
    <Card>

    <div class="img-gallery">
    <img  alt='person sitting' className="card-img-top img-fluid " src={guySitting}/>
  </div>
    </Card>
    </Col>
    <Col>
    {/* <CardText> */}

   <p>Además de mejorar la salud mental individual, la terapia individual también puede mejorar la comunicación y las relaciones interpersonales. La terapia interpersonal (IPT) es una forma de psicoterapia que se enfoca en mejorar las relaciones interpersonales de un individuo como un medio para abordar los problemas de salud mental. A través de IPT, las personas pueden aprender habilidades y estrategias de comunicación efectivas para mejorar sus relaciones con los demás . La comunicación efectiva es un elemento fundamental de las relaciones saludables, y el desarrollo de estas habilidades puede mejorar no solo la salud mental de un individuo sino también su calidad de vida en general. Al abordar las relaciones interpersonales en la terapia, las personas pueden mejorar su salud mental y crear relaciones más satisfactorias con quienes las rodean.
    </p>
    {/* </CardText> */}
    </Col>
    <div className="col-1"></div>
   
  </Row>
  <Row>
  <div className="col-1"></div>
  <div className="col-11">
<ul>

</ul>
    {/* <Col> */}
    {/* <Card> */}
    

    {/* </Card> */}
    {/* </Col> */}</div>
    <div className="col-1"></div>

  </Row>
</GeneralLayout>
</div>

 
    </>
  )
}
