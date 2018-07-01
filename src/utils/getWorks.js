import getDataByType from './getDataByType'
import convertObjectToArray from './convertObjectToArray'

const getWorks = (db) => {
  return convertObjectToArray(getDataByType('Work', db))
}

export { getWorks as default }