import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { SectionCard } from './components/SectionCard'

export const App = () => {
  return (
    <>
      <div>
        <h1 className='title-metrika'>Metrika</h1>
        <img src="../assets/icons-redes.png" alt="" />
      </div>
      <SectionCard />

    </>
  )
}