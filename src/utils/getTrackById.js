import getDataById from './getDataById'

const getTrackById = (id, db) => {
  return getDataById(id, 'Track', db)
}

export { getTrackById as default }
