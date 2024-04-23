import React from "react"
import ProductCard from "../../common/productCard/ProductCard"
import { Grid } from "@mui/material"

const ItemList = ({ items, error }) => {
  console.log(items)
  return (
    <div>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "1em",
        }}
      >
        {items.map(({ id, tittle, description, price, img }) => {
          return (
            <Grid key={id}>
              <ProductCard
                key={id}
                id={id}
                tittle={tittle}
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
