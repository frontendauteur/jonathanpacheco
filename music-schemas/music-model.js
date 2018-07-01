exports.Album = {
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

exports.Artist = {
  name: 'Artist',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string'
  }
}

exports.SubTrack = {
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

exports.Tag = {
  name: 'Tag',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string'
  }
}

exports.Track = {
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

exports.Work = {
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

