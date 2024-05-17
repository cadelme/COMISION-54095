import Navbar from "./navbar/NavbBar"
import { Footer } from "./footer/Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <div style={{ paddingBottom: "70px" }}>
        {" "}
        {/* Espacio para el pie de página */}
        <Outlet />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#622d8b",
          padding: "10px",
          color: "#FFF",
        }}
      >
        <Footer />
      </div>
    </div>
  )
}
