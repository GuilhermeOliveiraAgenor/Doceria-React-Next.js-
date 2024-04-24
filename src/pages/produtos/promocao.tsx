import { useRouter } from "next/router"
import styles from '../../styles/listapromocao.module.css'
import Image from "next/image"
import brownie from './brownie.jpg'
import CardPromocao from '@/components/CardProdutoDesconto'
import Topo from "@/components/Topo"
import Head from 'next/head'

export default function doces() {

  return (
     <main className={styles.main}>
      <Head>
        <title>Doces em Promoção</title>
      </Head>
      <Topo/>
      <div className={styles.body}>
          <h1 className={styles.headingText}>Nossos produtos</h1>
            <CardPromocao produto={'Brownie'} valor={10.00} desconto={30} descricao={descricaoBrownie}/>
            <CardPromocao produto={'Palha Italiana'} valor={10.00} desconto={20} descricao={descricaoPalha} />
            <CardPromocao produto={'Copo da Felicidade'} valor={10.00} desconto={40} descricao={descricaoCopo} />
            <CardPromocao produto={'Barra de Chocolate Recheada'} valor={10.00} desconto={50} descricao={descricaoBarra}/>
            <CardPromocao produto={'Trufas de maracujá'} valor={10.00} desconto={0} descricao={descricaoTrufa}/>
        </div>
      </main>
  )
}


const descricaoBrownie = "Deliciosamente decadente, nosso brownie artesanal é a tentação perfeita para os amantes de chocolate. Feito com ingredientes premium e uma receita exclusiva, cada mordida é uma experiência de puro prazer.";
const descricaoPalha = "Experimente a autêntica indulgência italiana com nossa palha artesanal. Feita com amor e tradição, cada mordida é uma viagem sensorial à Itália. Delicie-se com a crocância e o sabor inigualáveis na nossa padaria hoje mesmo!"
const descricaoCopo = "Desperte a felicidade com nosso copo artesanal de pura indulgência. Camadas de bolo macio, cremes delicados e deliciosos toppings se unem para criar uma experiência de sabor única. Deixe-se envolver pela alegria em cada colherada, disponível agora em nossa padaria.";
const descricaoBolo = "Sedutoramente delicioso, nosso bolo artesanal é a estrela de qualquer celebração. Feito com ingredientes frescos e uma pitada de magia, cada fatia é uma experiência de sabor inesquecível. Saboreie a perfeição na nossa padaria hoje mesmo!";
const descricaoBarra = "Saboreie a indulgência perfeita com nossa barra artesanal, uma explosão de sabor em cada pedaço. Feita com os melhores ingredientes e amor genuíno, cada mordida é uma viagem ao paraíso dos doces.";
const descricaoTrufa= "Deixe-se levar pela paixão com nossa trufa de maracujá artesanal. Feita com o mais puro néctar da fruta, cada trufa é uma explosão de frescor e sabor tropical. Descubra o êxtase do maracujá na nossa padaria hoje mesmo!";
