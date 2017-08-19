import express from 'express'
import work from './create/work'
import album from './create/album'
import artist from './create/artist'
import tag from './create/tag'
import track from './create/track'

const router = express.Router()

router.use('/work', work)
router.use('/album', album)
router.use('/artist', artist)
router.use('/tag', tag)
router.use('/track', track)

export {router as default}
