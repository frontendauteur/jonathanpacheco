const getDataByType = require('./getDataByType')

const getTags = (db) => {
  return getDataByType('Tag', db)
}

module.exports = getTags
