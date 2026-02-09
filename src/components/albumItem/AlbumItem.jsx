import "./AlbumItem.css"
import React from 'react'

const AlbumItem = ({data}) => {
    const { strAlbum, intYearReleased, strAlbumThumb } = data;
    return <li className="albumItem">
        <h2 className="albumName">{strAlbum}</h2>
        <p>{intYearReleased}</p>
        <img src={strAlbumThumb} alt="Album Image" />
           </li>

}

export default AlbumItem