import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <div>
      Este es el carrito
      <h2>Productos agregados</h2>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  )
}

export default Cart
