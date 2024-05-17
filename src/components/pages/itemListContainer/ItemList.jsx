import React from "react"
import ProductCard from "../../common/productCard/ProductCard"
import { Grid } from "@mui/material"

const ItemList = ({ items, error }) => {
  return (
    <div>
      <Grid
        container
        justifyContent="left"
        alignItems="center"
        style={{
          // minHeight: "100vh", // Asegura que el Grid ocupe toda la altura de la pantalla
          paddingTop: "1em",
          paddingLeft: "2em",
        }}
      >
        {items.map(({ id, title, description, price, img }) => {
          return (
            <Grid key={id}>
              <ProductCard
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                img={img}
              />
            </Grid>
          )
        })}
      </Grid>
      {error && <h2>{error.message}</h2>}
    </div>
  )
}

export default ItemList
