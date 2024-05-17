import React, { useContext, useState } from "react"
import { TextField, Button } from "@mui/material"
import { CartContext } from "../../../context/CartContext"
import { db } from "../../../firebaseConfig.js"
import { collection, doc, addDoc, updateDoc } from "firebase/firestore"

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
    <div>
      Checkout
      {orderId ? (
        <h1>Su nombre de pedido es{orderId}</h1>
      ) : (
        <form onSubmit={haddleSubmit}>
          <TextField
            label="Nombre"
            type="text"
            name="name"
            onChange={haddleChange}
          ></TextField>
          <TextField
            label="telefono"
            type="text"
            name="phone"
            onChange={haddleChange}
          ></TextField>
          <TextField
            label="email"
            type="text"
            name="email"
            onChange={haddleChange}
          ></TextField>
          <Button type="submit" variant="contained">
            Comprar
          </Button>
        </form>
      )}
    </div>
  )
}

export default checkout
