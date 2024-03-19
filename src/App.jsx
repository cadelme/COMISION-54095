import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  let nombre = "Pepe"

  const sumar = () => {
    console.log(5 + 2)
  }

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )

}

export default App
