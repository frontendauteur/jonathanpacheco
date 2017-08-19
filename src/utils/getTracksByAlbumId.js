export default function (albumId, db) {
  return db.objects('Track').filtered(`album.id = '${albumId}'`)
}
