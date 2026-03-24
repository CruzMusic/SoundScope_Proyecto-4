import AlbumItem from '../albumItem/AlbumItem'

const AlbumList = ({albums, className}) => {
    return <ul className={className}>
        {albums.map((album)=>{
        return <AlbumItem key={album.idAlbum} data={album}></AlbumItem>
    })}
    </ul>
}

export default AlbumList