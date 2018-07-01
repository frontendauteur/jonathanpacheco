import express from 'express'
import getAlbum from './admin/album'

const getAdmin = (nextApp) => {
  const server = express.Router()
  server.use('/album', getAlbum(nextApp))
  return server
}
export default getAdmin
