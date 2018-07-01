import express from 'express'
import path from 'path'
import next from 'next'
// import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import getIndex from './routes/index'
import getAlbum from './routes/album'
import getTrack from './routes/track'
import getAdmin from './routes/admin'
import api from './routes/api'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: path.join(__dirname, '/') })
const handle = app.getRequestHandler()


// import create from './routes/create'
// import del from './routes/delete'
// import posts from './routes/posts'
app.prepare()
  .then(() => {
    const server = express()
    // uncomment after placing your favicon in /public
    // server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    server.use(logger('dev'))
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(cookieParser())
    server.use(express.static(path.join(__dirname, '../', 'public')))

    server.use('/', getIndex(app))
    server.use('/album', getAlbum(app))
    server.use('/track', getTrack(app))
    server.use('/admin', getAdmin(app))
    server.use('/api', api)
    // server.use('/create', create)
    // server.use('/delete', del)
    // server.use('/says', posts)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    // catch 404 and forward to error handler
    // server.use(function (req, res, next) {
    //   var err = new Error('Not Found')
    //   err.status = 404
    //   next(err)
    // })

    // // error handler
    // server.use(function (err, req, res, next) {
    //   // set locals, only providing error in development
    //   res.locals.message = err.message
    //   res.locals.error = req.server.get('env') === 'development' ? err : {}

    //   // render the error page
    //   res.status(err.status || 500)
    //   res.render('error')
    // })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })

export { app as default }