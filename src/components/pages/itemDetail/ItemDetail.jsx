import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import { CounterContainer } from "../../common/counter/CounterContainer"

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia sx={{ height: 600 }} image={item.img} tittle={item.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {item.price}€
          </Typography>
        </CardContent>
      </Card>
      <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
    </div>
  )
}

export default ItemDetail
