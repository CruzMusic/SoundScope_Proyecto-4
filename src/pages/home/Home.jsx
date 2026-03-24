import "./Home.css"
import { useState } from 'react'
import ArtistCard from '../../components/artistCard/ArtistCard'
import SearchBar from '../../components/searchBar/SearchBar';
import theAudioDB from '../../api/TheAudioDB';

const Home = () => {
  const [ results, setResults ] = useState([]);
  const [ loading, setLoading ] = useState(false)


  const handleSearch = async (searchTerm) =>{
    setLoading(true)
    const dataAPI = await theAudioDB(searchTerm);
    setResults(dataAPI.artists)
    setLoading(false)
  }

  return (
    <div className='home'>
      <h3 className='homeTitle'>Welcome to SoundScope</h3>
      <SearchBar onSearch={handleSearch}/>
      {!(results && results.length > 0) && (
        <p className='homeSubtitle'>Find info about your favourite artist here.</p>
      )}
      
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          {results === null && <p className='notFound'>Artist not found</p>}
          {results && results.map((artist) => {
            return (
              <ArtistCard
                key={artist.idArtist}
                artist={artist}
              />
            )
          })}
        </>
      )}
    </div>
  )
}

export default Home