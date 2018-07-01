import express from 'express'
const getTrack = (nextApp) => {
  const router = express.Router()

  /* GET home page. */
  router.get('/:id', (req, res, next) => {
    nextApp.render(req, res, '/track', { id: req.params.id })
  })
  return router
}
export default getTrack
