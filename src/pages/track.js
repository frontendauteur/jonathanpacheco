import fetch from 'isomorphic-unfetch'
import {secondsToTime} from './../utils/date'

const Track = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{secondsToTime(props.duration)}</p>
    {props.spotifyUri !== '' && (
      <iframe src={`https://open.spotify.com/embed?uri=${encodeURIComponent(props.spotifyUri)}`} />
    )}
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </div>
)
Track.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`http://localhost:3000/api/track/${id}`)
  const data = await res.json()
  return data.track
}

export default Track
