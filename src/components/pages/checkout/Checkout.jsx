import React, { useState } from "react"
import { TextField, Button } from "@mui/material"

const checkout = () => {
  const [inf, setInf] = useState({
    nombre: "",
    telefono: "",
    email: "",
  })

  const haddleChange = (e) => {
    let { name, value } = e.target
    setInf({ ...inf, [name]: value })
  }

  const haddleSubmit = (e) => {
    e.preventDefault()
    console.log(inf)
  }

  return (
    <div>
      checkout
      <form onSubmit={haddleSubmit}>
        <TextField
          label="Nombre"
          type="text"
          name="nombre"
          onChange={haddleChange}
        ></TextField>
        <TextField
          label="telefono"
          type="text"
          name="telefono"
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
    </div>
  )
}

export default checkout
