import getDataByType from './getDataByType'
import convertObjectToArray from './convertObjectToArray'

const getArtists = (db) => {
  return convertObjectToArray(getDataByType('Artist', db))
}

export { getArtists as default }