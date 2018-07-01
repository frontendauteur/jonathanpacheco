import getRealm from './getRealm'
import getArtists from './getArtists'
import getArtistById from './getArtistById'
import getAlbums from './getAlbums'
import getAlbumById from './getAlbumById'
import saveAlbum from './saveAlbum'
import getWorks from './getWorks'
import getWorkById from './getWorkById'
import getTracks from './getTracks'
import getTrackById from './getTrackById'
import getTags from './getTags'

export default class Database {
  constructor() {
    this.db = getRealm()
  }
  getAlbums() {
    return getAlbums(this.db)
  }
  getAlbumById(id) {
    return getAlbumById(id, this.db)
  }
  saveAlbum(body, artwork = '') {
    return saveAlbum(body, artwork, this.db)
  }
  getArtists() {
    return getArtists(this.db)
  }
  getArtistById(id) {
    return getArtistById(id, this.db)
  }
  getWorks() {
    return getWorks(this.db)
  }
  getWorkById(id) {
    return getWorkById(id, this.db)
  }
  getTracks() {
    return getTracks(this.db)
  }
  getTrackById(id) {
    return getTrackById(id, this.db)
  }
  getTags() {
    return getTags(this.db)
  }
}
