import Navbar from "./navbar/NavbBar"
import { Footer } from "./footer/Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <Outlet />
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        {/* <Footer /> */}
      </div>
    </div>
  )
}
