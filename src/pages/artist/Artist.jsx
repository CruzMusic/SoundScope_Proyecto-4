import ArtistDetails from "../../components/artistDetails/ArtistDetails"
import UseFetch from "../../hooks/UseFetch"
import { useParams } from "react-router-dom"

const Artist = () => {

  const { id } = useParams()

  const idURL = `https://www.theaudiodb.com/api/v1/json/123/artist.php?i=${id}`
  
  const albumURL = `https://www.theaudiodb.com/api/v1/json/123/album.php?i=${id}`

  const { data, loading, error } = UseFetch(idURL)
  const { data: albumData, loading: albumLoading, error: albumError } = UseFetch(albumURL)
  

  if(loading || albumLoading === true){
    return <p>Loading info...</p>
  }

  if(error || albumError){
    return <p>Error loading the albums</p>
  }

  if(!data?.artists){
    return <p>Artist not found</p>
  }

  const artistInfo = data?.artists?.[0]
  const albums = albumData?.album
  
  return (
     <>
      <ArtistDetails artistInfo={artistInfo} albums={albums}></ArtistDetails>
    </>
  )
}

export default Artist