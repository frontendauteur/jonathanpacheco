import express from 'express'
import marked from 'marked'
import typogr from 'typogr'
import titleCase from './../utils/titleCase'
import getDatabase from './../utils/getDatabase'
import cloneDataObject from './../utils/cloneDataObject'
import convertObjectToArray from './../utils/convertObjectToArray'
import {AlbumSchema} from './../schema'
const router = express.Router()

var db = getDatabase()
// db.close()

/* GET home page. */
router.get('/', function (req, res, next) {
  let posts = db.objects('Work')
  let tracks = db.objects('Track')
  let albums = convertObjectToArray(db.objects('Album')).map(album => {
    const newAlbum = cloneDataObject(album, AlbumSchema)
    newAlbum.tracks = album.tracks.sorted('number')
    return newAlbum
  })

  res.render('index', { title: 'Jonathan Pacheco', posts: posts, albums: albums, tracks })
})
export {router as default}
