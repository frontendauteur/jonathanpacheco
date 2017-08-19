import express from 'express'
import getDatabase from './../utils/getDatabase'

const router = express.Router()
var db = getDatabase()

router.get('/work/:id', function (req, res, next) {
  db.write(() => {
    const work = db.objects('Work').filtered(`id = '${req.params.id}'`)[0]
    db.delete(work)
  })
  res.redirect('/')
})
router.get('/album/:id', function (req, res, next) {
  db.write(() => {
    const album = db.objects('Album').filtered(`id = '${req.params.id}'`)[0]
    db.delete(album)
  })
  res.redirect('/')
})
router.get('/track/:id', function (req, res, next) {
  db.write(() => {
    const track = db.objects('Track').filtered(`id = '${req.params.id}'`)[0]
    db.delete(track)
  })
  res.redirect('/')
})

export {router as default}
