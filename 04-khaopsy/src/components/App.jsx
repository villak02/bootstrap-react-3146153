import React from "react";

import angelImg from "../assets/angel.png";
import fondoNegro from "../assets/fondonegro.png";
import logoPequeno from "../assets/logopequeño.png";

import personajeKael from "../assets/personaje-kael.png";
import personajeKyle from "../assets/personaje.kyle.png";
import personajePadre from "../assets/personaje.padre.png";
import personajeSandy from "../assets/personaje.sandy.png";
import personajeSt from "../assets/personaje.st.png";

import escenarioExortacion from "../assets/escenario-exortacion.png";
import habitacionConLuz from "../assets/habitacion-con-luz-png.png";
import habitacionExortacion from "../assets/habitacion-exortacion.png";

import NavBar from "./NavBar";
import SeccionIdea from "./SeccionIdea";
import CarruselPersonajes from "./CarruselPersonajes";
import EscenariosCards from "./Escenarios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="contenedor bg-white m-auto p-4" style={{ maxWidth: "1200px" }}>
      <header className="titulo-principal text-center fs-2">KHAOPSY</header>

      <NavBar logoPequeno={logoPequeno} />

      <section
        className="banner my-3 rounded"
        style={{
          backgroundImage: `url(${fondoNegro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 260,
        }}
      />

      <section className="franja-comic text-center fw-bold bg-warning text-black py-2 rounded my-3 py-4 ">
        NUESTRO PROYECTO
      </section>



      <SeccionIdea titulo="idea"

      angelImg={angelImg}



      
      />

      <CarruselPersonajes
        personajeKael={personajeKael}
        personajeKyle={personajeKyle}
        personajePadre={personajePadre}
        personajeSandy={personajeSandy}
        personajeSt={personajeSt}
      />

      <EscenariosCards
        escenarioExortacion={escenarioExortacion}
        habitacionConLuz={habitacionConLuz}
        habitacionExortacion={habitacionExortacion}
      />
    </div>
  );
}

export default App;


