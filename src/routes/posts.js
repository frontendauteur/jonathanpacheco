import express from 'express'
import marked from 'marked'
import typogr from 'typogr'
import Realm from 'realm'
import cloneRealmObject from './../utils/cloneRealmObject'
import getDatabase from './../utils/getDatabase'
import {PostSchema} from './../schema'
import titleCase from './../utils/titleCase'
import {formatPostDate, formatPostTimestamp} from './../utils/date'

const router = express.Router()
var db = getDatabase()

/* GET users listing. */
router.get('/:slug', function (req, res, next) {
  let post = db.objects('Post').filtered(`slug = "${req.params.slug}"`)[0]
  let newPost = cloneRealmObject(post, PostSchema)

  newPost.title = titleCase(newPost.title)
  newPost.content = typogr.typogrify(marked(newPost.content))
  newPost.timestamp = {
    datetime: formatPostTimestamp(newPost.timestamp),
    text: formatPostDate(newPost.timestamp)
  }
  res.render('post', newPost)
})
export {router as default}
