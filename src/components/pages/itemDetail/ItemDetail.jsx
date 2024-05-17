import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material"
import { CounterContainer } from "../../common/counter/CounterContainer"

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: "70%",
          border: "1px solid #622d8b",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={2}>
          {/* Imagen a la izquierda */}
          <Grid item xs={12} sm={7}>
            <CardMedia
              image={item.img}
              sx={{ width: 600, height: 450, backgroundSize: "contain" }}
            />
          </Grid>
          {/* Contenido a la derecha */}
          <Grid item xs={12} sm={5}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                color="primary"
              >
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
              <Typography
                gutterBottom
                variant="h4"
                color="primary.alt"
                component="div"
              >
                {item.price}€
              </Typography>
              <CounterContainer
                stock={item.stock}
                onAdd={onAdd}
                initial={initial}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default ItemDetail
