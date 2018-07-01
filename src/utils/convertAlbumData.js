import convertObjectToArray from './convertObjectToArray'
import cloneDataObject from './cloneDataObject'
import getTracksByAlbumId from './getTracksByAlbumId'
import { AlbumSchema, TrackSchema } from './../schema'

const convertAlbumData = (album, db) => {
  const newAlbum = cloneDataObject(album, AlbumSchema)
  const tracks = convertObjectToArray(getTracksByAlbumId(newAlbum.id, db)).map(track => {
    return cloneDataObject(track, TrackSchema)
  }).sort((a, b) => {
    return a.number - b.number
  })
  newAlbum.tracks = tracks
  return newAlbum
}

export { convertAlbumData as default }
