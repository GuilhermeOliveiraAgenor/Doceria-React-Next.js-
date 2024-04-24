"use client"
import React, { useEffect } from 'react';
import CardCadastro from "@/components/CardCadastro";
import Topo from "@/components/Topo"
import { useDarkMode } from '../../state/darkModeState';
import Head from 'next/head'


export default function cadastrar() {

  const isDark = useDarkMode((state) => { return state.dark })

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#faebd7" : "#000000";/*se estiver em uma cor alterar para outra*/
  }, [isDark]);

  return (
     <main>
      <Head>
        <title>Cadastro</title>
      </Head>
        <Topo/>
        <div>
        <CardCadastro/>
        </div>
      </main>
  )
}

