import { useState } from 'react';
import styles from '../../styles/login.module.css'
import Image from "next/image"
import Login from "@/components/CardLogin"
import Topo from "@/components/Topo"
import Head from 'next/head'


export default function login() {

  return (
    <main>
      <Head>
        <title>Login</title>
      </Head>
    <Topo/>
    <div>
    <Login /> 
    </div>
      </main>
  )
}

