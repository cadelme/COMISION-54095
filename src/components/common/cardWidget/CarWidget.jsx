import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"

import React from "react"

const CarWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={4} color={"secondary"}>
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  )
}

export default CarWidget
