import React from "react"
import { useRouter } from "next/router"
import styles from '../styles/listapromocao.module.css'
import Image from "next/image"
import doce from './doce.jpg'
import { useState } from "react"
import { Great_Vibes } from "next/font/google"
import { useEffect } from "react"

interface CardProps
{
    produto: string,
    valor: number,
    descricao: string
    
}

export default function Card(props: CardProps){//parametro para passar dados pro componente -- passa o objeto


    return(
    <main className={styles.main}>
      <div className={styles.body}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
                <div className="imgContainer">
                  <Image src={doce} alt="doce" width={510} height={300}/>
                </div>
                <div className={styles.title}>
                  <h1>{props.produto}</h1>
                  <p></p>
                  <label>R${props.valor}</label>
                </div>
                <div className={styles.descricao}>
                  <p>{props.descricao}</p>
                </div>
                <div style={card}>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      </div>
      </main>
    )
}

const card = {
    padding: '30px'
}

  const produto = {
 
    border: '5px solid red'

  }