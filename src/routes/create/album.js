import express from 'express'
import path from 'path'
import fs from 'fs'
import shortid from 'shortid'
import multer from 'multer'
import getDatabase from './../../utils/getDatabase'
import getDataById from './../../utils/getDataById'
import getArtworkPath from './../../utils/getArtworkPath'
import {makeJSDate, formatDateForInput} from './../../utils/date'
import cloneRealmObject from './../../utils/cloneRealmObject'
import {AlbumSchema} from './../../schema'

const upload = multer()
const router = express.Router()
const db = getDatabase()

/* POST Album form */
router.post('/', upload.single('artwork'), function (req, res) {
  const {file} = req
  if (file) {
    fs.writeFile(getArtworkPath(file), file.buffer, function (err) {
      if (err) {
        writeAlbum(req)
      } else {
        writeAlbum(req, path.join('images', file.originalname))
      }
    })
  } else {
    writeAlbum(req)
  }
  res.redirect('/')
})

/* GET Album form */
router.get('/', function (req, res, next) {
  res.render('createAlbum', {
    availableWorks: db.objects('Work'),
    availableArtists: db.objects('Artist')
  })
})
router.get('/:id', function (req, res, next) {
  let data = getDataById(req.params.id, 'Album', db)
  data = cloneRealmObject(data, AlbumSchema)
  data.availableWorks = db.objects('Work')
  data.availableArtists = db.objects('Artist')
  data.releaseDate = formatDateForInput(data.releaseDate)
  res.render('createAlbum', data)
})

function writeAlbum ({body}, artwork = '') {
  const {title, description, duration, id} = body
  let {work, artist, releaseDate} = body

  work = work !== '' ? getDataById(work, 'Work', db) : null
  artist = artist !== '' ? getDataById(artist, 'Artist', db) : null
  releaseDate = releaseDate !== '' ? makeJSDate(releaseDate) : ''

  db.write(() => {
    db.create('Album', {
      title,
      description,
      duration: Number(duration),
      releaseDate,
      artwork,
      work,
      artist,
      id: id || shortid.generate()
    }, !!id)
  })
}

export {router as default}
