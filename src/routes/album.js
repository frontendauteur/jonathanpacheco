import express from 'express'
const getAlbum = (nextApp) => {
  const router = express.Router()

  /* GET home page. */
  router.get('/:id', (req, res, next) => {
    nextApp.render(req, res, '/album', { id: req.params.id })
  })
  return router
}
export default getAlbum
