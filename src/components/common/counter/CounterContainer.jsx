import { useState } from "react"
import CounterPresentacional from "./Counter"

export const CounterContainer = () => {
  const [contador, setContador] = useState(1)

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

  let objectProps = {
    restar,
    sumar,
    contador,
  }

  return <Counter {...objectProps} />
}
