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
    desconto: number,
    descricao: string

}

export default function Card(props: CardProps){//parametro para passar dados pro componente -- passa o objeto

    const [quantidade, setQuantidade] = useState<number>(0)
    const [valor, setValor] = useState<number>(0)
    const [precoProduto, setPrecoProduto] = useState<number>(0)


    
    useEffect(()=>{//executa a funcao ao renderizar a pagina

      let descontoProduto = props.valor * (props.desconto/100);
      let valorProduto = props.valor - descontoProduto;

      setPrecoProduto(valorProduto);

    },)//roda a funcao quando a variavel for alterada


    function calcularProduto(op:number)
    {
        let descontoProduto = props.valor * (props.desconto/100);
        let valorProduto = props.valor - descontoProduto;

        let c = quantidade;
        c += op;
        setQuantidade(c); 
        
        setPrecoProduto(valorProduto);

        let preco = c * valorProduto;
        setValor(preco); 
        

    }


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
                {props.desconto>0?(/*Se tiver produtos com desconto maior que 0 mostra o desconto*/
                <div className={styles.title}>
                  <h1>{props.produto}</h1>
                  <p>R${props.valor}  (-{props.desconto}%OFF)</p>
                  <label>R${precoProduto}</label>
                </div>
                ):<div className={styles.title}>
                <h1>{props.produto}</h1>
                <p style={card}>R${props.valor}</p>
              </div>}
                <div className={styles.text}>
                  <p>{props.descricao}</p>
                </div>
                <div className={styles.footer}>
                  <div className={styles.starContainer}>
                    <text className={styles.lblQuantidade}>Calcular produto R${valor}</text>
                  </div>
                  <div className={styles.starContainer}>
                    <text className={styles.lblQuantidade}>Quantidade {quantidade}</text>
                  </div>
                  
                  <div className={styles.buttonContainer}>
                      <button className={styles.button} onClick={()=>calcularProduto(1)}>Add+</button>
                      <button className={styles.button} onClick={()=>calcularProduto(-1)}>Tirar-</button>
                  </div>
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
    marginRight: '100px' 
  }

  const produto = {
 
    border: '5px solid red'

  }