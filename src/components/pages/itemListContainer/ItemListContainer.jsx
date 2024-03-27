import { Typography } from "@mui/material"

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <Typography variant="h4" align="center" sx={{ paddingTop: "40px" }}>
        {greeting}
      </Typography>
    </div>
  )
}

export default ItemListContainer
