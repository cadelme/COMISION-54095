const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div>
      {/* {contador > 1 ? (
        <h5>Ya tienes en el carrito {contador} unidades </h5>
      ) : null} */}

      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter
