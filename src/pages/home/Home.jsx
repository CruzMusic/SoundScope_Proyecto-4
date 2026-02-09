import "./Home.css"
import React, { useState } from 'react'
import ArtistCard from '../../components/artistCard/ArtistCard'
import SearchBar from '../../components/searchBar/SearchBar';
import theAudioDB from '../../api/TheAudioDB';
import Spinner from '../../components/spinner/Spinner';

const Home = () => {
  const [ results, setResults ] = useState([]);
  const [ loading, setLoading ] = useState(false)


  const handleSearch = async (searchTerm) =>{
    console.log("Buscando a:", searchTerm);
    
    setLoading(true)
    const dataAPI = await theAudioDB(searchTerm);
    setResults(dataAPI.artists)
    setLoading(false)
  }

  return (
    <div className='home'>
      <SearchBar onSearch={handleSearch}/>
      
      {loading ? (
        <Spinner></Spinner>
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