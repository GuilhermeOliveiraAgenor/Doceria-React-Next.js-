//components/arquivo.tsx
// arquivos.tsx com letra maiuscula
import Link from "next/link"
import Head from "next/head"

export default function Topo(){
    return(
        <div style={menu}>
<div className='flex flex-col justify-center items-center' >
<div style={{ color: 'white', fontFamily: 'Roboto', fontSize: 18}}>Doceria</div>
  <div style={{ color: 'white', fontFamily: 'Roboto', fontSize: 40,fontWeight: 'bold'}}>Cacau Sweet</div>
</div>
<nav style={{ display: "flex", gap: '30px', fontWeight: 'bold',color: 'white' }}>

      <Link href={"/"}>
        Home
      </Link>

      <Link href={{
        pathname:"../produtos/produtos"}}>
        Produtos
      </Link>
      
      <Link href={"../produtos/promocao"}>
        Promoção
      </Link>
      <Link href={"../cadastro/cadastro"}>
      Cadastro
      </Link>
      <Link href={"/login/login"}>
      Login
      </Link>
  </nav>
</div>
    )
    }

const menu = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'saddlebrown',
  textColor: 'white',
  padding: 'saddlebrown'
}

