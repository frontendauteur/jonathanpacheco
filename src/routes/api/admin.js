import express from 'express'
import album from './admin/album'

const router = express.Router()
router.use('/album', album)

export default router
