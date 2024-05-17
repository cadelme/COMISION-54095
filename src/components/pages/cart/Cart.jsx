import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { Typography, Grid } from "@mui/material"

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" color="primary" sx={{ padding: "20px" }}>
        Informacion sobre su pedido
      </Typography>
      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: 20,
            width: "50%",
            marginBottom: "20px",
            border: "1px solid #ddd",
          }}
        >
          <img
            src={product.img}
            alt={product.title}
            style={{ height: 200, width: 200, objectFit: "cover" }}
          />

          <Typography
            variant="h6"
            color="primary"
            sx={{ padding: "0px", width: 320 }}
          >
            {product.title}
          </Typography>
          <Typography variant="h6" color="primary.alt">
            {product.price} €
          </Typography>

          <Typography color="secondary.altSecundary">
            {product.quantity} Cant
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50%", // Borde redondo
              border: "2px solid #622d8b", // Color y grosor del borde
              minHeight: 40,
              minWidth: 40,
            }}
            onClick={() => {
              deleteItem(product.id)
            }}
          >
            X
          </Button>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          gap: 20,
          width: "50%",
          marginBottom: "20px",
          border: "1px solid #ddd",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          {" "}
          {/* Para empujar el Typography hacia la derecha */}
          {/* Empty div para empujar el Typography hacia la derecha */}
        </div>
        <Typography
          variant="h6"
          color="primary.alt"
          sx={{ alignItems: "right", marginRight: "20px" }}
        >
          Total: {total.toFixed(2)} €
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {cart.length > 0 && (
          <>
            <Button onClick={clearAlertCart} variant="outlined">
              Limpiar carrito
            </Button>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <Button variant="contained">Finalizar compra</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
