import getDataById from './getDataById'

export default function (ids, type, db) {
  return ids.map((id) => {
    return getDataById(id, type, db)
  })
}
