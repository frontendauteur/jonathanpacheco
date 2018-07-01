import express from 'express'
import getDatabase from './../../utils/getDatabase'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  const db = getDatabase()
  res.send({
    albums: db.getAlbums()
  })
})
router.get('/:id', (req, res, next) => {
  const db = getDatabase()
  res.send({
    album: db.getAlbumById(req.params.id)
  })
})
export default router
