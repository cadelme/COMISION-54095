import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material"

import { Link } from "react-router-dom"

const ProductCard = ({ tittle, description, price, img, id }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={img} tittle="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {price}€
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard
