const CounterPresentacional = ({ restar, sumar, contador }) => {
  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  )
}

export default CounterPresentacional
