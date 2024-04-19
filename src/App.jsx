import { useState } from "react"
import { Counter } from "./components/common/counter/Counter"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { Layout } from "./components/layout/Layout"

function App() {
  // name  ---> pepe
  // name ---> juan

  const [name, setName] = useState("pepe")

  // const cambiarNombre = (nuevoNombre) => {
  //   setName(nuevoNombre);
  // };

  return (
    <div>
      <Layout>
        <ItemListContainer />
        <Counter />
      </Layout>
      <h2>{name}</h2>
      {/* <button onClick={cambiarNombre}>Cambiar nombre</button> */}

      {/* <button onClick={cambiarNombre("fulanito")}>Cambiar nombre</button> */}
      {/* <button onClick={()=> cambiarNombre("fulanito")}>Cambiar nombre</button> */}
      <button onClick={() => setName("juan")}>Cambiar</button>
    </div>
  )
}

export default App
