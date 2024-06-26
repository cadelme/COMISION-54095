import { ThemeProvider } from "@mui/material"
import Navbar from "./components/layout/navbar/NavbBar"
import { themeStore } from "./components/themeConfig"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { Layout } from "./components/layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import Home from "./components/pages/home/Home"
import Checkout from "./components/pages/checkout/Checkout"
import CartContextProvider from "./context/CartContext"
import AboutUS from "./components/pages/aboutUS/AboutUS"

function App() {
  return (
    <ThemeProvider theme={themeStore}>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route path="/category/:name" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/aboutus" element={<AboutUS />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route
                path="/products"
                element={<h1>Este es la ruta products</h1>}
              />

              <Route path="*" element={<h1>Error</h1>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
