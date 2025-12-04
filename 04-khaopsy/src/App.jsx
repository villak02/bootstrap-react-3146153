import React, { useState } from 'react'




import angelImg from './assets/angel.png'
import fondoNegro from './assets/fondonegro.png'
import logoPequeno from './assets/logopequeño.png'


import personajeKael from './assets/personaje-kael.png'
import personajeKyle from './assets/personaje.kyle.png'
import personajePadre from './assets/personaje.padre.png'
import personajeSandy from './assets/personaje.sandy.png'
import personajeSt from './assets/personaje.st.png'

import escenarioExortacion from './assets/escenario-exortacion.png';
import habitacionConLuz from './assets/habitacion-con-luz-png.png';
import habitacionExortacion from './assets/habitacion-exortacion.png';
import patronRojo from './assets/patron-rojo.png';

function App() {

  
  const personajes = [
    personajeKael,
    personajeKyle,
    personajePadre,
    personajeSandy,
    personajeSt,
  ]

  const [indicePersonaje, setIndicePersonaje] = useState(0)

  const personajeActual = personajes[indicePersonaje]

  const irAnterior = () => {
    setIndicePersonaje((prev) =>
      prev === 0 ? personajes.length - 1 : prev - 1
    )
  }

  const irSiguiente = () => {
    setIndicePersonaje((prev) =>
      prev === personajes.length - 1 ? 0 : prev + 1
    )
  }
  

  return (
    <div className="app">
      
      <header className="top-title">
        KHAOPSY
      </header>

      
      <nav className="main-nav">
        <div className="nav-logo">
          <img src={logoPequeno} alt="Logo pequeño" />
        </div>

        <div className="nav-center">
          MENU
        </div>

        <div className="nav-right">
          Tienda
        </div>
      </nav>

      
      <section
        className="hero"
        style={{ backgroundImage: `url(${fondoNegro})` }}
      >
        
      </section>

      
      <section className="section-banner">
        NUESTRO PROYECTO
      </section>

      
      <section className="idea-section">
        <div className="idea-image-wrapper">
          <div className="idea-label idea-label-overlay">IDEA</div>

          <img
            src={angelImg}
            alt="Ángel del proyecto"
            className="idea-image"
          />
        </div>

        <p className="idea-text">
          Desarrollar un proyecto multimedial transmedia que represente el
          apocalipsis de una manera cruda y realista, para advertir a la
          humanidad sobre lo que está por venir. El proyecto también pretende
          mostrar cómo la psicología influye en las decisiones de las personas
          en momentos de crisis religiosas.
        </p>
      </section>

      
    <section className="comic-section">
      <div className="comic-banner">
    COMIC
      </div>

     <div className="comic-subtitle">
    PERSONAJES
     </div>


     
     <div className="comic-character-wrapper">
     <button className="arrow arrow-left" onClick={irAnterior}>
      &lt;
    </button>

    <img
      src={personajeActual}
      alt="Personaje"
      className="comic-character-image"
    />

     <button className="arrow arrow-right" onClick={irSiguiente}>
      &gt;
     </button>
    </div>





    </section>

      <section className="escenarios-section">
  <div className="escenarios-banner">
    ESCENARIOS
  </div>

  <p className="escenarios-text">
    Los espacios comienzan en la cotidianidad íntima y se transforman en lugares
    cargados de simbolismo y terror. Esta evolución transporta al espectador de lo
    familiar a lo sobrenatural, utilizando el entorno para reflejar el deterioro emocional
    de Kael y el colapso de su mundo.
  </p>

  
  <div className="escenario-block">
    <img
      src={escenarioExortacion}
      alt="Escenario de exortación"
      className="escenario-image"
    />
    <p className="escenario-title">Escenario de exortación</p>
  </div>

  
  <div className="escenario-block">
    <img
      src={habitacionConLuz}
      alt="Habitación con luz"
      className="escenario-image"
    />
    <p className="escenario-title">Habitación con luz</p>
  </div>

  
  <div className="escenario-block">
    <img
      src={habitacionExortacion}
      alt="Habitación de exortación"
      className="escenario-image"
    />
    <p className="escenario-title">Habitación de exortación</p>
  </div>
</section>



  </div>
  )
}

export default App