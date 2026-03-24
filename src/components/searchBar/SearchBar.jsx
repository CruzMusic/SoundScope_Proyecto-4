import { useState } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import "./SearchBar.css"

const SearchBar = ({onSearch}) => {
    const [ search, setSearch ] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      onSearch(search)
    }
    
  return (
    <form className='searchBar' onSubmit={handleSubmit}>
      <Input className="input" placeholder="Search artist" value={search} type="text" ariaLabel="Search artist by name" onChange={(e) =>{
        setSearch(e.target.value)
        }} />
      <Button className="button" label="Search" type="submit"/>
    </form>
  )
}

export default SearchBar