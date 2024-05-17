import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { products } from "../../../productMock"
import Swal from "sweetalert2"

const Cart = ({ cart, clearCart, deleteItem, total }) => {
  const clearAlertCart = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire({
          title: "Limpiado!",
          text: "Tu carrito se ha limpiado",
          icon: "success",
        })
      }
    })
  }

  return (
    <div>
      Este es el carrito
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
          <h4>{product.quantity}</h4>
          <Button
            variant="contained"
            onClick={() => {
              deleteItem(product.id)
            }}
          >
            Eliminar
          </Button>
        </div>
      ))}
      <Button onClick={clearAlertCart} variant="outlined">
        Limpiar carrito
      </Button>
      <h2>El total a pagar es {total}</h2>
      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}
    </div>
  )
}

export default Cart
