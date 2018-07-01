import getWorkById from './getWorkById'
import getArtistById from './getArtistById'
import {makeJSDate} from './date'
import shortid from 'shortid'

const saveAlbum = (body, artwork = '', db) => {
  const {title, description, duration, id} = body
  let {work, artist, releaseDate} = body

  work = work !== '' ? getWorkById(work, db) : null
  artist = artist !== '' ? getArtistById(artist, db) : null
  releaseDate = releaseDate !== '' ? makeJSDate(releaseDate) : ''

  console.log({
    title,
    description,
    duration: Number(duration),
    releaseDate,
    artwork,
    work,
    artist,
    id: id || shortid.generate()
  }, !!id)

  // db.write(() => {
  //   db.create('Album', {
  //     title,
  //     description,
  //     duration: Number(duration),
  //     releaseDate,
  //     artwork,
  //     work,
  //     artist,
  //     id: id || shortid.generate()
  //   }, !!id)
  // })
}

export default saveAlbum
