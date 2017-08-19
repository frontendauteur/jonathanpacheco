import express from 'express'
import shortid from 'shortid'
import getDatabase from './../../utils/getDatabase'

const router = express.Router()
var db = getDatabase()

/* Post Artist form */
router.post('/', function ({body}, res) {
  const {name, id} = body
  db.write(() => {
    db.create('Tag', {
      name,
      id: id || shortid.generate()
    }, !!id)
  })
  res.redirect('/')
})

/* GET Artist form. */
router.get('/', function (req, res, next) {
  res.render('create/tag')
})

export {router as default}
