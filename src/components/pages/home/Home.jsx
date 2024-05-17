import React from "react"
import { Typography } from "@mui/material"

const home = () => {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        color="primary"
        sx={{ paddingTop: "40px" }}
      >
        Bienvenidos a Sport Club
      </Typography>
      <div>
        <img
          src="https://res.cloudinary.com/dwuetntc4/image/upload/v1713869946/shutterstock_1066064930b-scaled_jkbf0w.jpg"
          style={{ width: "100%", height: "auto", display: "block" }}
        ></img>
      </div>
    </div>
  )
}

export default home
