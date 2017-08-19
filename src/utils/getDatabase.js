import Realm from 'realm'
import * as Schema from './../schema'

export default function () {
  return new Realm({
    path: 'music.realm',
    schema: [
      Schema.TrackSchema,
      Schema.SubTrackSchema,
      Schema.AlbumSchema,
      Schema.ArtistSchema,
      Schema.TagSchema,
      Schema.WorkSchema
    ],
    schemaVersion: 6
  })
}
