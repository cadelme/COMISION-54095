import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, SetCart] = useState([])

  const addToCart = (itemFull) => {
    let exist = isInCart(itemFull.id)

    if (exist) {
      const newArray = cart.map((elemento) => {
        if (elemento.id === itemFull.id) {
          return { ...elemento, quantity: itemFull.quantity }
        } else {
          return elemento
        }
      })
      SetCart(newArray)
    } else {
      SetCart([...cart, itemFull])
    }
  }

  const clearCart = () => {
    SetCart([])
  }

  const deleteItem = (id) => {
    const newArray = cart.filter((product) => product.id !== id)

    SetCart(newArray)
  }

  const isInCart = (id) => {
    let bool = cart.some((product) => product.id === id) // boolean
    return bool
  }

  const getQuantityById = (id) => {
    let product = cart.find((el) => el.id === id)
    return product?.quantity
  }

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price
    }, 0)
    return total
  }

  const getTotalItems = () => {
    let totalQuantity = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity
    }, 0)
    return totalQuantity
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteItem,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider
