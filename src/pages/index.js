import Link from 'next/link'
import Layout from './../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout title='Home'>
    <h1>Jonny</h1>
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
    <style jsx>{`
      h1, a {
        font-family: Interface, sans-serif;
      }
      h1 {
        font-weight: 900;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </Layout>
)
Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/all')
  const data = await res.json()
  return data
}

export default Index
