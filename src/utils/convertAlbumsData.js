import convertObjectToArray from './convertObjectToArray'
import convertAlbumData from './convertAlbumData'

const convertAlbumsData = (albums, db) => {
  return convertObjectToArray(albums).map(album => {
    return convertAlbumData(album, db)
  })
}

export { convertAlbumsData as default }
