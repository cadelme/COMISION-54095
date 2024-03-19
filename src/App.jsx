import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  let nombre = "Pepe"

  const sumar = () => {
    console.log(5 + 2)
  }

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
