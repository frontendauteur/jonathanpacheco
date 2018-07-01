import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Albums = (props) => (
  <div>
    <h1>Albums</h1>
    {!!props.albums.length && (
      <ul>
        {props.albums.map((album, index) => {
          return (
            <li key={index}>
              <Link as={`/album/${album.id}`} href={`/album?id=${album.id}`}>
                <a>{album.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
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
Albums.getInitialProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/album`)
  const data = await res.json()
  return data
}

export default Albums
