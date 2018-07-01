import getDataByType from './getDataByType'

const getTracks = (db) => {
  return getDataByType('Track', db)
}

export { getTracks as default }
