import express from 'express'
import shortid from 'shortid'
import getDatabase from './../../utils/getDatabase'
import getDataById from './../../utils/getDataById'

const router = express.Router()
const db = getDatabase()

/* POST work form */
router.post('/', function ({body}, res) {
  db.write(() => {
    const {title, medium, filmType, saga, id} = body
    db.create('Work', {
      title,
      medium,
      filmType,
      saga,
      id: id || shortid.generate()
    }, !!id)
  })
  res.redirect('/')
})

/* GET work form */
router.get('/', function (req, res, next) {
  res.render('createWork')
})
router.get('/:id', function (req, res, next) {
  res.render('createWork', getDataById(req.params.id, 'Work', db))
})

export {router as default}
