import express from 'express'
import shortid from 'shortid'
import getDatabase from './../../utils/getDatabase'
import getDataById from './../../utils/getDataById'
import getDataByIds from './../../utils/getDataByIds'
import cloneDataObject from './../../utils/cloneDataObject'
import { secondsToTime, timeToSeconds } from './../../utils/date'
import { TrackSchema } from './../../schema'

const router = express.Router()
var db = getDatabase()

/* Post Artist form */
router.post('/', function ({ body }, res) {
  const {
    title = '',
    duration = '0:00',
    notes = '',
    altTitle = '',
    number = 0,
    fileUrl = '',
    spotifyUri = '',
    id
  } = body
  let { album, tags = [] } = body

  album = album !== '' ? getDataById(album, 'Album', db) : null

  if (tags.length) {
    if (typeof tags === 'string') {
      tags = [tags]
    }
    tags = getDataByIds(tags, 'Tag', db)
  }

  db.write(() => {
    db.create('Track', {
      title,
      altTitle,
      notes,
      fileUrl,
      spotifyUri,
      duration: timeToSeconds(duration),
      number: Number(number),
      album,
      tags,
      id: id || shortid.generate()
    }, !!id)
  })
  res.redirect('/')
})

/* GET Artist form. */
router.get('/', function (req, res, next) {
  res.render('create/track', {
    availableTags: db.objects('Tag'),
    availableAlbums: db.objects('Album')
  })
})
router.get('/:id', function (req, res, next) {
  let data = getDataById(req.params.id, 'Track', db)
  data = cloneDataObject(data, TrackSchema)
  data.availableTags = db.objects('Tag')
  data.availableAlbums = db.objects('Album')
  data.duration = secondsToTime(data.duration)
  res.render('create/track', data)
})

export { router as default }
