import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material"

import { Link } from "react-router-dom"

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        border: "1px solid #622d8b",
        borderRadius: "20px",
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          transition: "transform 0.3s",
          transition: "transform 0.3s", // Añadir transición suave
          "&:hover": {
            transform: "scale(1.2)", // Aumentar la escala al pasar el ratón
            cursor: "zoom-in", // Cambiar el cursor a lupa en el hover
          },
        }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="primary">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            borderBottom: "0.5px solid rgba(0, 0, 0, 0.12)",
            borderBottomColor: "primary.main",
            borderTop: "0.5px solid",
            borderTopColor: "primary.main",
            padding: "10px 0px",
          }}
        >
          {description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color="primary">
          {price}€
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "block" }}>
        <Link to={`/itemDetail/${id}`}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="small" variant="contained">
              Ver detalle
            </Button>
          </div>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard
