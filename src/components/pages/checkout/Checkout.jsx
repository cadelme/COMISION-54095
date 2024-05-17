import React, { useContext, useState } from "react"
import { TextField, Button } from "@mui/material"
import { CartContext } from "../../../context/CartContext"
import { db } from "../../../firebase.config.js"
import { collection, doc, addDoc, updateDoc } from "firebase/firestore"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext)

  const [orderId, SetorderId] = useState(null)

  let total = getTotalPrice()

  const [inf, setInf] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const haddleChange = (e) => {
    let { name, value } = e.target
    setInf({ ...inf, [name]: value })
  }

  const haddleSubmit = (e) => {
    e.preventDefault()

    let obj = {
      buyer: inf,
      items: cart,
      total,
    }

    let ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, obj)
      .then((res) => {
        SetorderId(res.id)
        clearCart()
      })
      .catch((error) => console.log(error))

    //UPDATE

    cart.forEach((product) => {
      let productCollection = collection(db, "products")
      let refDoc = doc(productCollection, product.id)
      updateDoc(refDoc, { stock: product.stock - product.quantity }) // update patch
    })
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" color="primary" sx={{ padding: "20px" }}>
        Proceso de compra
      </Typography>
      {orderId ? (
        <>
          <Typography variant="h4" color="primary" sx={{ padding: "20px" }}>
            Su nombre de pedido es el {orderId}
          </Typography>
          <Link to="/products">
            <Button variant="contained" component="div">
              Seguir Comprando
            </Button>
          </Link>
        </>
      ) : (
        <form
          onSubmit={haddleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #622d8b",
            borderRadius: "20px",
            width: "40%",
            padding: "20px",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Nombre"
              type="text"
              name="name"
              onChange={haddleChange}
              fullWidth
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Teléfono"
              type="text"
              name="phone"
              onChange={haddleChange}
              fullWidth
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Email"
              type="text"
              name="email"
              onChange={haddleChange}
              fullWidth
            />
          </div>
          <Button type="submit" variant="contained">
            Comprar
          </Button>
        </form>
      )}
    </div>
  )
}

export default checkout
