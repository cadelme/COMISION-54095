import { useState } from "react"
import Counter from "./Counter"

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial)

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    } else {
      alert("Nohay más stock")
    }
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
    onAdd,
  }

  return <Counter {...objectProps} />
}
