"use client"
import React from "react"
import "../../styles/zustand.module.css"
import { useDarkMode } from "../../state/darkModeState";

const Zustand = () => {

  const changeState = useDarkMode((state) => { return state.setState})/*chama a funcao para alterar estado*/

  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" onChange={() => { changeState() }} />{/*chama a funcao ao selecionar checkbox*/}
        <div>Mudar cor de fundo</div>
    </div>
  )
}

export default Zustand;