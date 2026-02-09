import React, { useContext } from 'react'
import FavouriteContext from '../../context/FavouriteContext'
import AlbumList from '../albumList/AlbumList'
import Button from '../button/Button'
import "./ArtistDetails.css"

const ArtistDetails = (props) => {
    const { artistInfo, albums } = props
    
    const context = useContext(FavouriteContext)
    const { addFavourite, removeFavourite, isFavourite } = context

    const handleToogleDetails = () =>{
    if(isFavourite(artistInfo.idArtist) === true){
      removeFavourite(artistInfo)
    } else addFavourite(artistInfo)
  }
    
    return (
        <div className='artistDiv'>
            <h1>{artistInfo.strArtist}</h1>
            <img className='artistImg' src={artistInfo.strArtistThumb} alt="Artista" />
            <p className='artistInfo'>{(artistInfo.strBiographyEN)?.slice(0)}</p>
            <AlbumList albums={albums} />
            <Button className="artistButton" onClick={handleToogleDetails} label={isFavourite(artistInfo.idArtist) ? "Quitar de favoritos" : "Añadir a favoritos"}>
        </Button>
        </div>
    )
}

export default ArtistDetails
