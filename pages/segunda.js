import { useState } from 'react';
import Link from 'next/link';


function Segunda() {
  return (
  <div>
    <h1>Segunda</h1>
    <Link href="http://localhost:3000/">
    <a>Home</a>
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


export default Segunda