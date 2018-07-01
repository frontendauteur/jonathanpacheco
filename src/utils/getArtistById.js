import getDataById from './getDataById'

const getArtistById = (id, db) => {
  return getDataById(id, 'Artist', db)
}

export default getArtistById
