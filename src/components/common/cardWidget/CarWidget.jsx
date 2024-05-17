import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"

import React, { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const CarWidget = () => {
  const { getTotalItems } = useContext(CartContext)

  let total = getTotalItems()

  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={total} color={"secondary"}>
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  )
}

export default CarWidget
