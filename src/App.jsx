import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Suggestions from './pages/suggestions/Suggestions'
import Favourites from './pages/favourites/Favourites'
import Artist from './pages/artist/Artist'
import FavouritesProvider from './components/favouritesProvider/FavouritesProvider'
import Layout from './components/layout/Layout'



function App() {

  return (
  <>
    <FavouritesProvider>
  <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/artist/:id' element={<Artist/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/suggestions' element={<Suggestions/>}/>
    </Routes>
  </Layout>
    </FavouritesProvider>
  </>
  )
}

export default App
