import { Button } from "@mui/material"

const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div>
      {/* {contador > 1 ? (
        <h5>Ya tienes en el carrito {contador} unidades </h5>
      ) : null} */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          gap: "10px", // Espacio entre los elementos
          margin: "7rem 0 20px 0",
        }}
      >
        <Button
          onClick={restar}
          variant="contained"
          sx={{
            borderRadius: "50%", // Borde redondo
            border: "2px solid #622d8b", // Color y grosor del borde
            minHeight: 40,
            minWidth: 40,
          }}
        >
          -
        </Button>
        <h3 style={{ margin: "0 10px" }}>{contador}</h3>
        <Button
          onClick={sumar}
          variant="contained"
          sx={{
            borderRadius: "50%", // Borde redondo
            border: "2px solid #622d8b", // Color y grosor del borde
            minHeight: 40,
            minWidth: 40,
          }}
        >
          +
        </Button>
      </div>
      <Button variant="contained" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  )
}

export default Counter
