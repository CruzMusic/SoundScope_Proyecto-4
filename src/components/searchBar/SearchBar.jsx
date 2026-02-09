import React, { useState } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import "./SearchBar.css"

const SearchBar = ({onSearch}) => {
    const [ search, setSearch ] = useState("")
    
  return (
    <div className='searchBar'>
      <Input className="input" placeholder="Search artist" value={search} type="text" onChange={(e) =>{
        setSearch(e.target.value)
        }} />
      <Button className="button" label="Search" onClick={() => onSearch(search)}/>
    </div>
  )
}

export default SearchBar