import React from 'react'


import angelImg from './assets/angel.png'
import fondoNegro from './assets/fondonegro.png'
import logoPequeno from './assets/logopequeño.png'

function App() {
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
        <div className="hero-inner">
          <h1 className="hero-title">MÁS ALLÁ DE LA PROFECÍA</h1>
        </div>
      </section>

      
      <section className="section-banner">
        NUESTRO PROYECTO
      </section>

      
      <section className="idea-section">
        <div className="idea-label">IDEA</div>

        <img src={angelImg} alt="Ángel del proyecto" className="idea-image" />

        <p className="idea-text">
          Desarrollar un proyecto multimedial transmedia que represente el
          apocalipsis de una manera cruda y realista, para advertir a la
          humanidad sobre lo que está por venir. El proyecto también pretende
          mostrar cómo la psicología influye en las decisiones de las personas
          en momentos de crisis religiosas.
        </p>
      </section>
    </div>
  )
}

export default App