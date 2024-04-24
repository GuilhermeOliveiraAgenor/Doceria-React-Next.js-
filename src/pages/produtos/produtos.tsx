import Card from "@/components/Card"
import Topo from "@/components/Topo"
import {useRouter} from "next/router"
import styles from '../../styles/card.module.css'
import { useState } from "react"
import Head from 'next/head'


const descricaoBrownie = "Deliciosamente decadente, nosso brownie artesanal é a tentação perfeita para os amantes de chocolate. Feito com ingredientes premium e uma receita exclusiva, cada mordida é uma experiência de puro prazer.";
const descricaoPalha = "Experimente a autêntica indulgência italiana com nossa palha artesanal. Feita com amor e tradição, cada mordida é uma viagem sensorial à Itália. Delicie-se com a crocância e o sabor inigualáveis na nossa padaria hoje mesmo!"
const descricaoCopo = "Desperte a felicidade com nosso copo artesanal de pura indulgência. Camadas de bolo macio, cremes delicados e deliciosos toppings se unem para criar uma experiência de sabor única. Deixe-se envolver pela alegria em cada colherada, disponível agora em nossa padaria.";
const descricaoBolo = "Sedutoramente delicioso, nosso bolo artesanal é a estrela de qualquer celebração. Feito com ingredientes frescos e uma pitada de magia, cada fatia é uma experiência de sabor inesquecível. Saboreie a perfeição na nossa padaria hoje mesmo!";
const descricaoBarra = "Saboreie a indulgência perfeita com nossa barra artesanal, uma explosão de sabor em cada pedaço. Feita com os melhores ingredientes e amor genuíno, cada mordida é uma viagem ao paraíso dos doces.";
const descricaoTrufa= "Deixe-se levar pela paixão com nossa trufa de maracujá artesanal. Feita com o mais puro néctar da fruta, cada trufa é uma explosão de frescor e sabor tropical. Descubra o êxtase do maracujá na nossa padaria hoje mesmo!";
const descricaoBoloCenoura= "Delicie-se com nosso Bolo de Cenoura, uma maravilha dourada e úmida, coberta com uma camada generosa de cobertura de chocolate. Feito com cenouras frescas e amor, é a escolha perfeita para o seu café da manhã ou lanche da tarde";


const produtos= [
    {
      id:1,  
      produto: 'Trufas',
      valor:3.50,
      descricao: descricaoTrufa,
      disponivel: true
    },
    {
      id:2,  
      produto: 'Brownies',
      valor:7.00,
      descricao: descricaoBrownie,
      disponivel: true
    },
    {
      id:3,  
      produto: 'Barra de Chocolate Recheado',
      valor:20.00,
      descricao: descricaoBarra,
      disponivel: true
    },
    {
      id:4,  
      produto: 'Copo da Felicidade',
      valor:13.00,
      descricao: descricaoCopo,
      disponivel: true
    },
    {
      id:5,  
      produto: 'Palha Italiana',
      valor:12.00,
      descricao: descricaoPalha,
      disponivel: true
    },
    {
      id:6,  
      produto: 'Bolo de Chocolate',
      valor:10.00,
      descricao: descricaoBolo,
      disponivel: true
    },
    {
      id:7,  
      produto: 'Bolo de Cenoura',
      valor:10.00,
      descricao: descricaoBoloCenoura,
      disponivel: true
    },
  ]

  
export default function produtosPagina(){
    
return( 
<div className={styles.body}>

        <div >
        <Head>
        <title>Cardápio dos Doces</title>
      </Head>
        <Topo/>
        <div className={styles.produtos}>
        {
          produtos.map((e:any)=>{
      if(e.disponivel){
      
            return(
              <Card key={e.id} produto={e.produto} valor={e.valor} descricao={e.descricao}> 
              </Card>
                  )}
            })
        }
        </div>
</div>
</div>

    )

}

