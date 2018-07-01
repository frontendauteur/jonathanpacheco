const getDataByType = (type, db) => {
  return db.objects(type)
}

export { getDataByType as default }
