import getDataById from './getDataById'

const getWorkById = (id, db) => {
  return getDataById(id, 'Work', db)
}

export default getWorkById
