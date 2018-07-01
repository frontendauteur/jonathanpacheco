import express from 'express'
import work from './api/work'
import album from './api/album'
import track from './api/track'
import admin from './api/admin'
import getDatabase from './../utils/getDatabase'

const router = express.Router()
router.use('/admin', admin)
router.use('/work', work)
router.use('/track', track)
router.use('/album', album)
router.get('/all', (req, res, next) => {
  const db = getDatabase()
  res.send({
    works: db.getWorks(),
    tracks: db.getTracks(),
    albums: db.getAlbums()
  })
})
export default router
