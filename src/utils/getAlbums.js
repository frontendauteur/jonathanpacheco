import getDataByType from './getDataByType'
import convertAlbumsData from './convertAlbumsData'

const getAlbums = (db) => {
  return convertAlbumsData(getDataByType('Album', db), db)
}

export default getAlbums
