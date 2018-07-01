import getDataByType from './getDataByType'

const getDataById = (id, type, db) => {
  console.log(id, type, db.objects(type))
  return getDataByType(type, db).filtered(`id = '${id}'`)[0]
}

export { getDataById as default }