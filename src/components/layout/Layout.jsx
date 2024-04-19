import React from "react"
import { Navbar } from "./navbar/Navbar"
import { Footer } from "./footer/Footer"

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
