import { useState } from 'react';
import Link from 'next/link';

function Home() {
  return (
  <div>
    <h1>Home</h1>
    <Link href="http://localhost:3000/segunda">
    <a>segunda</a>
    </Link>
    <Contador/>
    </div>
  )
}

function Contador () {
  const [contador,setContador] = useState (0); 
  function adicionarContador(){
    setContador(contador + 1);   
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}


export default Home