import { useState } from 'react';
import styles from '../styles/cadastro.module.css'
import Image from "next/image"
import doceria from './doceria.jpg'
import Zustand from "./zustand/ZustandCor";


export default function cadastro() {

  const [nome, setNome] = useState<string>("");

  return (
     <main className={styles.main}>
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <Image src={doceria} alt='doceria' width={2000} height={540}/>
            </div>
            <div className={styles.formBox}>
            <p> Já tem cadastro ? <a href='../login/login'>Clique Aqui</a></p>
            <form action="#" className={styles.form}>
                <div className={styles.inputGroup}>
                    <label>Usuário (Voce será chamado assim no sistema) - {nome}</label>
                    <input type='text' id='nome' value={nome} onChange={(evt)=> setNome(evt.target.value)} placeholder='Digite o nome' maxLength={50} required/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input type='text' id='email' placeholder='Digite o email' required/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Telefone</label>
                    <input type='text' id='telefone' placeholder='Digite o telefone' required/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Senha</label>
                    <input type='password' id='senha' placeholder='Digite o senha' required/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Confirmar Senha</label>
                    <input type='password' id='confirmarSenha' placeholder='Digite a senha novamente' required/>
                </div>
                <div className={styles.inputGroup}>
                   <button> <a className={styles.link}href='../login/login'>Cadastrar</a></button>
                </div>
            </form>
            <div><Zustand/></div>{/*chama o componente para alterar cor*/}
            </div>
        </div>
      </main>
  )
}

