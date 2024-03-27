import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material"
import Logo from "./../../../images/logo_store.png"
import MenuIcon from "@mui/icons-material/Menu"
import CarWidget from "../../common/cardWidget/CarWidget"

const Navbar = () => {
  // Estilos compartidos para todos los Typography
  const styles = {
    cursor: "pointer",
    flexGrow: 1,
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box
            component="img"
            sx={{
              height: 120,
              marginRight: 10,
            }}
            alt="Sport Club"
            src={Logo}
          />
          <Typography
            variant="h6"
            component="div"
            sx={styles}
            onClick={() => alert("Sales")}
          >
            Sales
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={styles}
            onClick={() => alert("Products")}
          >
            Products
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={styles}
            onClick={() => alert("News")}
          >
            News
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={styles}
            onClick={() => alert("About Us")}
          >
            About Us
          </Typography>
          <CarWidget />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
