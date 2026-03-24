import "./Layout.css"
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer';


const Layout = ({children}) => {
  return (
  <>
    <header className='header'>
      <Link to={"/favourites"}>Favourites</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/suggestions"}>Suggestions</Link>
    </header>
    <main>{children}</main>
    <footer>
      <Footer></Footer>
    </footer>
  </>
  )
}

export default Layout