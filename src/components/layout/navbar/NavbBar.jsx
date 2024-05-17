import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material"
import Logo from "./../../../images/logo_store.png"
import MenuIcon from "@mui/icons-material/Menu"
import CarWidget from "../../common/cardWidget/CarWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Estilos compartidos para todos los Typography
  const styles = {
    cursor: "pointer",
    flexGrow: 1,
    color: "#fff",
    justifyContent: "space-between",
    marginRight: "5em",
    textDecoration: "none",
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
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 120,
                marginRight: 10,
              }}
              alt="Sport Club"
              src={Logo}
            />
          </Link>
          <Link to="/products" style={styles}>
            <Typography variant="h6" component="div">
              Products
            </Typography>
          </Link>
          <Link to="/category/Running" style={styles}>
            <Typography variant="h6" component="div">
              Running
            </Typography>
          </Link>
          <Link to="/category/Casual" style={styles}>
            <Typography variant="h6" component="div">
              Casual
            </Typography>
          </Link>
          <Link to="/category/Urban" style={styles}>
            <Typography variant="h6" component="div">
              Urban
            </Typography>
          </Link>
          <Link to="/aboutus" style={styles}>
            <Typography variant="h6" component="div" sx={styles}>
              About Us
            </Typography>
          </Link>
          <CarWidget />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
