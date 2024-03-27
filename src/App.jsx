import { ThemeProvider } from "@mui/material"
import Navbar from "./components/layout/navbar/NavbBar"
import { themeStore } from "./components/themeConfig"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"

function App() {
  return (
    <ThemeProvider theme={themeStore}>
      <div>
        <Navbar />
        <ItemListContainer greeting={"Bienvenidos a mi Tienda"} />
      </div>
    </ThemeProvider>
  )
}

export default App
