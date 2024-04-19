import { useState, useEffect } from "react"

export const Counter = () => {
  const [contador, setContador] = useState(1)

  /*Se hace una sola vez UseEffect y al final de la lectura de todo el codigo*/

  // useEffect(() => {
  //   console.log("Se hace la petiticion")
  // }, []) // ARRAY DE  DEPENDENCIAS

  useEffect(() => {
    console.log("Se hace la petiticion")
  }, [contador]) // ARRAY DE  DEPENDENCIAS

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1)
    } else {
      alert("no podes menos de 1")
    }
  }

  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  )
}
