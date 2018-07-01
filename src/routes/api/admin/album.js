import express from 'express'
import getDatabase from './../../../utils/getDatabase'
import {formatDateForInput} from './../../../utils/date'
import multer from 'multer'
import saveAlbum from './../../../utils/saveAlbum'
import getArtworkWritePath from './../../../utils/getArtworkWritePath'
import getArtworkPath from './../../../utils/getArtworkPath'
import fs from 'fs'

const router = express.Router()
const upload = multer()

/* GET home page. */
router.get('/', (req, res, next) => {
  const db = getDatabase()
  const album = {}

  album.availableWorks = db.getWorks()
  album.availableArtists = db.getArtists()
  res.send({
    album: album
  })
})
router.get('/:id', (req, res, next) => {
  const db = getDatabase()
  const album = db.getAlbumById(req.params.id)
  album.availableWorks = db.getWorks()
  album.availableArtists = db.getArtists()
  album.releaseDate = formatDateForInput(album.releaseDate)
  res.send({
    album: album
  })
})
router.post('/', (req, res, next) => {
  const {file} = req
  const db = getDatabase()
  // if (file) {
  //   fs.writeFile(getArtworkWritePath(file), file.buffer, (err) => {
  //     if (err) {
  //       db.saveAlbum(req)
  //       res.send({
  //         message: 'Saved album without artwork'
  //       })
  //     } else {
  //       db.saveAlbum(req, getArtworkPath(file))
  //       res.send({
  //         message: 'Saved album with artwork'
  //       })
  //     }
  //   })
  // } else {
  console.log(req.body)
  db.saveAlbum(req.body)
  res.send({
    message: 'Saved album'
  })
  // }
})
export default router
