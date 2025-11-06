import React from 'react'

import "./App.css"

import {NavBar} from './componets/NavBar'

import { ExtensionCard } from './componets/ExtensionCard' 
import { LoginForm } from './componets/LoginForm'

export const App = () => {
  return (
    <>
      <NavBar/>
      <div className="containerCards">
        
        <ExtensionCard cardTitle="EL RAUDAL"
        cardImage=" 𝐆𝟓𝟗"
        cardDescription="$UICIDEBOY$ WERE BETTER IN 2015"/>
        
        <ExtensionCard cardTitle="TELEFONO"
        cardImage="☎︎"
        cardDescription="I NO LONGER FEAR THE RAZOR GUARDING MY HEEL"/>
        
        <ExtensionCard cardTitle="WASSAP"
        cardImage=" 🥷"
        cardDescription="CLOUDS AS WITNESSES"/>
        
        <ExtensionCard cardTitle="NEKLI"
        cardImage="♠️"
        cardDescription="SIX LINES,  TWO DRAGONS, AND A MESSIAH"/>
        
        <ExtensionCard cardTitle="BIBLIA"
        cardImage="✞"
        cardDescription="COUNT YOUR BLESSINGS"/>
        
        <ExtensionCard cardTitle="SPOTYFYCHY"
        cardImage="θ"
        cardDescription="BURGUNDY"/>
        
        <ExtensionCard cardTitle="ISTAGRAM"
        cardImage="𝕲"
        cardDescription="TEMPLE SPRAY"/>
        
        <ExtensionCard cardTitle="DAVI PLATA"
        cardImage="$"
        cardDescription="MY SWISHER SWEET, BUT MY SIG SAUER"/>
        
        <ExtensionCard cardTitle="CONTATOS"
        cardImage="👤"
        cardDescription="AVALON"/>
        
        

      </div>
      <h1>react+sintaxis</h1>
      <LoginForm/>

    </>
  )
}
