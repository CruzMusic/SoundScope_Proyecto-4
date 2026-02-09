import "./ArtistCard.css"
import React, { memo, useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import FavouriteContext from '../../context/FavouriteContext'
import Button from '../button/Button'


const ArtistCard = (props) => {
    const artistData = props.artist

   const context = useContext(FavouriteContext)
   const { addFavourite, removeFavourite, isFavourite } = context

   const handleToogleFavourite = useCallback(() =>{
    if(isFavourite(artistData.idArtist) === true){
      removeFavourite(artistData)
    }else addFavourite(artistData)
   },[isFavourite, removeFavourite, addFavourite, artistData])

  return (
    <div>
      <div className='artist'>
        <Link to={`/artist/${artistData.idArtist}`}>
        <h2>{artistData.strArtist}</h2>
        <img src={artistData.strArtistThumb} alt="" />
        </Link>
      </div>
        <Button className="artistButton" onClick={handleToogleFavourite} label={isFavourite(artistData.idArtist) ? "Remove Favourites" : "Add Favourites"}>
        </Button>
    </div>
  )
}

export default memo(ArtistCard)