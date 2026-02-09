import React from 'react'
import "./Layout.css"
import { Link } from 'react-router-dom'
import SoundScope from "../../assets/SoundScope.jpg";
import Footer from '../footer/Footer';


const Layout = ({children}) => {
  return (
  <div>
    <header className='header'>
      <Link to={"/favourites"}>Favourites</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/suggestions"}>Suggestions</Link>
    </header>
    <main>{children}</main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
  )
}

export default Layout