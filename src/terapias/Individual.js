import React from 'react'
import {GeneralLayout, Row, Col, Card} from '../Layouts/GeneralLayout.js'
import guySitting from './images/individual/quinton-coetzee-lzlJC_ZY0OI-unsplash.jpg'
import './terapias.css'
import bg from '../images/general-bg.svg'
export default function Individual() {
  return (
  <div id="intro">

  

    <GeneralLayout>
      
      <Row>
      <p className="col-1"></p>
        <Col>
        <Card>
        <div class="img-gallery"> 
       <img   className="card-img-top" src={guySitting} width='300px'/>
      </div>
        </Card>
        </Col>
        <Col>
        {/* <Card> */}
<div style={{textAlign: "justify", marginTop:'10px'}}  >
        <p>La teragdsagapia individual brinda un espacio seguro y confidencial para la autorreflexión y la expresión, lo cual es esencial para mejorar la salud mental. En la terapia, las personas pueden compartir sus pensamientos y sentimientos abiertamente sin temor a juicios o repercusiones. Este espacio seguro permite a las personas explorar sus preocupaciones y emociones en un entorno de apoyo, lo que puede conducir a una mayor autoconciencia y crecimiento personal [1]. El espacio analítico creado en la terapia individual permite a las personas reflexionar sobre sus experiencias emocionales y patrones de pensamiento, lo que puede ayudarlos a comprender mejor su propio comportamiento y motivaciones [2]. Al proporcionar un entorno de apoyo y sin prejuicios, la terapia individual puede ayudar a las personas a sentirse escuchadas y validadas, lo que puede conducir a una mejor salud mental y bienestar [3].

           </p>
</div>
        {/* </Card> */}
        </Col>
        <div className="col-1"></div>

      </Row>
      <Row>
      <div className="col-1"></div>
        <Col>
        {/* <Card> */}
<p>
La terapia individual también puede ayudar a las personas a identificar y abordar patrones de pensamiento y comportamiento poco saludables. En la terapia, las personas pueden trabajar con un terapeuta capacitado para identificar patrones de pensamiento y comportamientos negativos que pueden estar contribuyendo a sus problemas de salud mental. Con la ayuda de un terapeuta, las personas pueden aprender nuevos mecanismos y estrategias de afrontamiento para manejar sus pensamientos y emociones de una manera más saludable [4]. A través de la terapia individual, las personas pueden adquirir habilidades para enfrentar los desafíos de la vida y mejorar su salud mental en general [5].
</p>
        {/* </Card> */}
        </Col>
        <Col>
        <Card>
        <div class="img-gallery">
        <img   className="card-img-top img-fluid " src={guySitting}/>
      </div>
        </Card>

        </Col>
        <div className="col-1"></div>
      </Row>
      <Row>
      <div className="col-1"></div>

        <Col>
        <Card>

        <p>fdsdf2</p>
        </Card>
        </Col>
        <Col>
        <Card>

       <p>Además de mejorar la salud mental individual, la terapia individual también puede mejorar la comunicación y las relaciones interpersonales. La terapia interpersonal (IPT) es una forma de psicoterapia que se enfoca en mejorar las relaciones interpersonales de un individuo como un medio para abordar los problemas de salud mental [6]. A través de IPT, las personas pueden aprender habilidades y estrategias de comunicación efectivas para mejorar sus relaciones con los demás [7]. La comunicación efectiva es un elemento fundamental de las relaciones saludables, y el desarrollo de estas habilidades puede mejorar no solo la salud mental de un individuo sino también su calidad de vida en general [8]. Al abordar las relaciones interpersonales en la terapia, las personas pueden mejorar su salud mental y crear relaciones más satisfactorias con quienes las rodean [9].
        </p>
        </Card>
        </Col>
        <div className="col-1"></div>
       
      </Row>
      <Row>
      <div className="col-1"></div>

        <Col>
        <Card>
        References
Bilingual, trauma-informed therapy in California. (n.d.) Retrieved May 10, 2023, from www.arcoiristherapy.com/es-US
Psicoanálisis | Terapia psicoanalítica, psicoanalistas. (n.d.) Retrieved May 10, 2023, from www.ryapsicologos.net/psicoanalisis-terapia-psicoanalitica/
Servicios psicológicos en inglés y español. (n.d.) Retrieved May 10, 2023, from www.psicologiapsychology.com/terapia-individual
MODIFICACIÓN DE CONDUCTA. ¿De qué estamos hablando?. (n.d.) Retrieved May 10, 2023, from mmaypsi.org
Cuando acudir los mejores psicólogos en Las Palmas. (n.d.) Retrieved May 10, 2023, from paulacaneque-psicologa.com
La Terapia Interpersonal - Psicoactiva. (n.d.) Retrieved May 10, 2023, from www.psicoactiva.com/blog/la-terapia-interpersonal/
Terapia interpersonal - University of Miami Health System. (n.d.) Retrieved May 10, 2023, from www.umiamihealth.org
Cómo la psicología puede ayudar a mejorar las relaciones .... (n.d.) Retrieved May 10, 2023, from curiosodatosrandom.com
El inicio de las relaciones interpersonales. (n.d.) Retrieved May 10, 2023, from orientacionpsicologica.es
        </Card>
        </Col>
        <div className="col-1"></div>

      </Row>
    </GeneralLayout>
    </div>
 
  
  )
}
