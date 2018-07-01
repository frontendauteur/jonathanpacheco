export const AlbumSchema = {
  name: 'Album',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string',
    releaseDate: 'date',
    artwork: 'string',
    duration: 'int',
    artist: 'Artist',
    work: 'Work'
  }
}

export const ArtistSchema = {
  name: 'Artist',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string'
  }
}

export const SubTrackSchema = {
  name: 'SubTrack',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    duration: 'int',
    number: 'int',
    offset: 'int?',
    fileUrl: 'string?',
    spotifyUri: 'string?',
    track: 'Track'
  }
}

export const TagSchema = {
  name: 'Tag',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string'
  }
}

export const TrackSchema = {
  name: 'Track',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    duration: 'int',
    number: 'int',
    notes: 'string?',
    altTitle: 'string?',
    tags: 'Tag[]',
    fileUrl: 'string?',
    spotifyUri: 'string?',
    album: 'Album'
  }
}

export const WorkSchema = {
  name: 'Work',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    medium: 'string',
    filmType: 'string?',
    saga: 'string?'
  }
}

