import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"
import { THEME_COLOR } from "../../configData/data"

function Navabr() {
  return (<>
<div className="navbar-container">
    <img src={logo} className="logo" />

    <div className="navbar-item-container" style={{color:THEME_COLOR.primary}}>
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/product" className="navbar-item">Product</Link>
      <Link to="/about"className="navbar-item">About</Link>
      <Link to="/contact"className="navbar-item">Contact</Link>

    </div>
    </div>
  </>
  )
}

export default Navabr