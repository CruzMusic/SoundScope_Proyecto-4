import "./AlbumItem.css"

const AlbumItem = ({data}) => {
    const { strAlbum, intYearReleased, strAlbumThumb } = data;
    return <li className="albumItem">
        <h2 className="albumName">{strAlbum}</h2>
        <p>{intYearReleased}</p>
        <img src={strAlbumThumb} alt={`${strAlbum} album cover`} />
           </li>

}

export default AlbumItem