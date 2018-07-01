import express from 'express'
const getIndex = (nextApp) => {
  const router = express.Router()

  /* GET home page. */
  router.get('/', (req, res, next) => {
    nextApp.render(req, res, '/index')
  })
  return router
}
export default getIndex
