import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });
import styles from '../styles/index.module.css'
import Topo from "@/components/Topo";
import Card from "@/components/Card";

import chocolate from "./chocolate.png"
import brownieprofissa from "./brownieprofissa.jpg"
import barraaa from "./barraaa.jpg"
import trufamaracuja from "./trufamaracuja.png"
import Head from 'next/head'



export default function Home() {

  return (

    <main>
      <Head>
        <title>Cacau Sweet</title>
      </Head>
    <Topo/>
 <Image src={chocolate} alt="foto página" style={{  width: '1900px', /*Largura da imagem*/ height: '600px', /*Altura da imagem*/}}/> 
 <div className="flex flex-col justify-between items-center bg-orange-300	 h-[50px]">
 <div style={{ color: 'white', fontFamily: 'verdana', fontSize: 30,fontWeight: 'bold'}}>Leve nossa doceria para sua casa!</div>
 
 <div className={styles.brownieprofissa}>
 <Image src={brownieprofissa} alt="foto página"/> 
</div>

<div className={styles.barra}>
 <Image src={barraaa} alt="foto página"/> 
</div>

<div className={styles.trufamaracuja}>
 <Image src={trufamaracuja} alt="foto página"/> 
</div>

  </div>

    </main>
  
  )
  
}
	
const testecss={
 display: 'flex',
justifyContent: 'center',
alignItens:'center',
color:'#00f',
backgroundColor: '#eee', 
fontSize: '20px'
}