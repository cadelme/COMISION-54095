import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../../productMock"

const ItemDetailContainer = () => {
  const { id } = useParams()
  console.log(id)

  const [item, setItem] = useState({})

  useEffect(() => {
    let itemFind = products.find((product) => product.id === +id) // +id transforma a number

    const getProduct = new Promise((res, rej) => {
      res(itemFind)
    })

    getProduct.then((res) => setItem(res))
  }, [id])

  console.log(item)

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
