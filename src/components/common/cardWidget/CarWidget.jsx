import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"

import React from "react"

const CarWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color={"secondary"}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  )
}

export default CarWidget
