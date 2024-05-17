import { useContext } from "react"
import Cart from "./Cart"
import { CartContext } from "../../../context/CartContext"

const CartContainer = () => {
  const { cart, clearCart, deleteItem, getTotalPrice } = useContext(CartContext)
  let total = getTotalPrice()
  return (
    <div>
      <Cart
        cart={cart}
        clearCart={clearCart}
        deleteItem={deleteItem}
        total={total}
      />
    </div>
  )
}

export default CartContainer
