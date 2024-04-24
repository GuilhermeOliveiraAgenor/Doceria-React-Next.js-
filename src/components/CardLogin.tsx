import { useState } from 'react';
import styles from '../styles/login.module.css'
import Image from "next/image"
import doceria from './doceria.jpg'



export default function login() {

  return (
    <main className={styles.main}>
    <div className={styles.body}>
        <div className={styles.wrapper}>
            <div className={styles.loginBox}>
                <div className={styles.loginHeader}>
                    <span>Login</span>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" name="usuario" id="usuario" className={styles.inputField} required/>
                    <label className={styles.label}>Usuário</label>
                    <i className={styles.userIcon}></i>
                </div>
                <div className={styles.inputBox}>
                    <input type="password" name="senha" id="senha" className={styles.inputField} required/>
                    <label className={styles.label}>Senha</label>
                    <i className={styles.userIcon}></i>
                </div>
                <div className={styles.rememberForgot}>
                    <div className={styles.rememberMe}>
                        <input type='checkbox' id='remember' />
                        <label>Lembrar senha</label>
                    </div>
                    <div className={styles.forgot}>
                        <a className={styles.link} href=''>Esqueceu a senha ?</a>
                    </div>
                </div>
                <div className={styles.inputBox}>
                <a className={styles.link} href='../'><button type='submit' className={styles.botao}>Login</button></a>
                </div>
                <div className={styles.cadastroUsuario}>
                    <span>Não tem uma conta ? <a className={styles.link} href='../'>Clique aqui</a></span>
                </div>
            </div>
            
        </div>
      </div>
      </main>
  )
}

