export default function (id, type, db) {
  return db.objects(type).filtered(`id = '${id}'`)[0]
}
