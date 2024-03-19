import Footer from "./components/Footer"

function App() {

  let nombre = "Pepe"

  const sumar = () => {
    console.log(5 + 2)
  }

  return (
    <>
      <h1>Hola {nombre}</h1>
      <button onClick={sumar}>sumar</button>
      <Footer />
    </>
  )
}

export default App
