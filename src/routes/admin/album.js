import fetch from 'isomorphic-unfetch'
import FormData from 'form-data'
import express from 'express'
import multer from 'multer'

const getAlbum = (nextApp) => {
  const router = express.Router()
  const upload = multer()

  /* GET home page. */
  router.get('/', (req, res, next) => {
    nextApp.render(req, res, '/admin/album')
  })
  router.get('/:id', (req, res, next) => {
    nextApp.render(req, res, '/admin/album', { id: req.params.id })
  })
  router.post('/', upload.single('artwork'), async (req, res, next) => {
    const { file } = req
    const api = await fetch('http://localhost:3000/api/admin/album', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    })
    const data = await api.json()

    nextApp.render(req, res, '/admin/album')
  })
  return router
}
export default getAlbum
