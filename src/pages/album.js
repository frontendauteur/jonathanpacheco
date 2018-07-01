import React, { Component } from 'react'
import Link from 'next/link'
import Layout from './../components/Layout'
import fetch from 'isomorphic-unfetch'

const Album = (props) => (
  <Layout title={props.title}>
    <h1>{props.title}</h1>
    <Link as={`/admin/album/${props.id}`} href={`/admin/album?id=${props.id}`}>
      <a>Edit</a>
    </Link>
    {!!props.tracks.length && (
      <ul>
        {props.tracks.map((track, index) => {
          return (
            <li key={index}>
              <Link as={`/track/${track.id}`} href={`/track?id=${track.id}`}>
                <a>{track.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    )}
  </Layout>
)
Album.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`http://localhost:3000/api/album/${id}`)
  const data = await res.json()
  return data.album
}

export { Album as default }