import getDataById from './getDataById'
import convertAlbumData from './convertAlbumData'

const getAlbumById = (id, db) => {
  return convertAlbumData(getDataById(id, 'Album', db), db)
}

export default getAlbumById
