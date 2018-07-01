import express from 'express'
import getDatabase from './../../utils/getDatabase'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  const db = getDatabase()
  res.send({
    tracks: db.getTracks()
  })
})
router.get('/:id', (req, res, next) => {
  const db = getDatabase()
  res.send({
    track: db.getTrackById(req.params.id)
  })
})
export default router
