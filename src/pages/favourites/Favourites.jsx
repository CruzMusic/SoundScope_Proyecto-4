import React, { useContext } from 'react'
import FavouriteContext from '../../context/FavouriteContext'
import ArtistCard from '../../components/artistCard/ArtistCard';
import "./Favourites.css"

const Favourites = () => {
  const context = useContext(FavouriteContext);

  const { favourites } = context

  const newFavourites = favourites.map((artist) =>{
    return <ArtistCard artist={artist} key={artist.idArtist}></ArtistCard>
  })

  return (
    <div className='favourites'>
      {favourites.length > 0 ? newFavourites : "No artist saved"} 
    </div>
  )
}

export default Favourites