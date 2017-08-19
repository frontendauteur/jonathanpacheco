'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TrackSchema = exports.TrackSchema = {
  name: 'Track',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    duration: 'int',
    number: 'int',
    notes: {
      type: 'string',
      optional: true
    },
    altTitle: {
      type: 'string',
      optional: true
    },
    album: 'Album',
    tags: {
      type: 'list',
      objectType: 'Tag'
    },
    subTracks: {
      type: 'linkingObjects',
      objectType: 'SubTrack',
      property: 'track'
    },
    fileUrl: {
      type: 'string',
      optional: true
    },
    spotifyUri: {
      type: 'string',
      optional: true
    }
  }
};
var SubTrackSchema = exports.SubTrackSchema = {
  name: 'SubTrack',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    duration: 'int',
    number: 'int',
    offset: {
      type: 'int',
      optional: true
    },
    track: 'Track',
    fileUrl: {
      type: 'string',
      optional: true
    },
    spotifyUri: {
      type: 'string',
      optional: true
    }
  }
};
var AlbumSchema = exports.AlbumSchema = {
  name: 'Album',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string',
    releaseDate: 'date',
    artwork: 'string',
    duration: 'int',
    tracks: {
      type: 'linkingObjects',
      objectType: 'Track',
      property: 'album'
    },
    artist: 'Artist',
    work: 'Work'
  }
};
var ArtistSchema = exports.ArtistSchema = {
  name: 'Artist',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    albums: {
      type: 'linkingObjects',
      objectType: 'Album',
      property: 'artist'
    }
  }
};
var TagSchema = exports.TagSchema = {
  name: 'Tag',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    tracks: {
      type: 'linkingObjects',
      objectType: 'Track',
      property: 'tags'
    }
  }
};
var WorkSchema = exports.WorkSchema = {
  name: 'Work',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    medium: {
      type: 'string',
      default: 'film'
    },
    filmType: {
      type: 'string',
      optional: true
    },
    saga: {
      type: 'string',
      optional: true
    },
    albums: {
      type: 'linkingObjects',
      objectType: 'Album',
      property: 'work'
    }
  }
};