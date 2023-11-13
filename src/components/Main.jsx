import  { useState } from 'react'

function Main() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>contador: {contador}</p> 
      <button onClick={() => setContador(contador - 1)}>-</button> <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  )
}

export default Main