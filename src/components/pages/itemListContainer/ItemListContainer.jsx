import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Skeleton } from "@mui/material"
import { db } from "../../../firebase.config.js"
import { Button } from "@mui/material"

import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const { name } = useParams()
  // name --> undefined
  // name --> string

  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const productsCollection = collection(db, "products")

    let consulta = productsCollection

    if (name) {
      consulta = query(productsCollection, where("category", "==", name))
    }

    getDocs(consulta)
      .then((res) => {
        let newArray = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setItems(newArray)
      })
      .catch((err) => {
        console.error("Error fetching documents: ", err)
        setError(err)
      })
  }, [name])

  // AGREGAR BASE DE DATOS

  // const addDocs = () => {
  //   let productsCollection = collection(db, "products")
  //   products.forEach((product) => addDoc(productsCollection, product))
  // }

  return (
    <>
      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <>
          <div
            style={{
              display: "Flex",
              gap: "30px",
              justifyContent: "space-around",
              paddingTop: "1em",
            }}
          >
            <div>
              <Skeleton variant="rectangular" width={310} height={200} />
              <Skeleton
                variant="text"
                width={210}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton variant="text" width={105} sx={{ fontSize: "1rem" }} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={310} height={200} />
              <Skeleton
                variant="text"
                width={210}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton variant="text" width={105} sx={{ fontSize: "1rem" }} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={310} height={200} />
              <Skeleton
                variant="text"
                width={210}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton variant="text" width={105} sx={{ fontSize: "1rem" }} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={310} height={200} />
              <Skeleton
                variant="text"
                width={210}
                height={60}
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton variant="text" width={105} sx={{ fontSize: "1rem" }} />
            </div>
          </div>
        </>
      )}
      {/* <Button onClick={addDocs} variant="contained">
        Agregar documentos
      </Button> */}
    </>
  )
}

export default ItemListContainer
