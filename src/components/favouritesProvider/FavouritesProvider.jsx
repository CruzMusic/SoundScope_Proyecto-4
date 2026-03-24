import { useEffect, useState } from 'react'
import FavouriteContext from '../../context/FavouriteContext'


const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState(() =>{
      const stored = localStorage.getItem("SoundScope_Fav")
      const parsed = JSON.parse(stored)
      if(parsed === null){
        return []
      } else return parsed
    });

    useEffect(() =>{
    const fav = JSON.stringify(favourites);
    localStorage.setItem("SoundScope_Fav", fav)
    },[favourites]);

    const isFavourite = (idArtist) =>{
      return favourites.some(
        (savedArtist) =>{
         return savedArtist.idArtist === idArtist
        }
      )
    }

    const addFavourite = (artist) =>{
      const artistID = artist.idArtist;
      if(!isFavourite(artistID)){
        setFavourites([artist, ...favourites])
      }
    }

    const removeFavourite = (artist) =>{
      const artistRemoved = favourites.filter(savedArtist => savedArtist.idArtist !== artist.idArtist)
      setFavourites(artistRemoved)
    }


  return (
    <FavouriteContext.Provider value={{favourites, isFavourite, addFavourite, removeFavourite}}>
      {children}
    </FavouriteContext.Provider>
  )
}

export default FavouritesProvider