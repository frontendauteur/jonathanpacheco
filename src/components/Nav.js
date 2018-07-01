import Link from 'next/link'

const Nav = (props) => (
  <nav>
    <h1>Main Navigation</h1>
    <ul>
      <li>
        <Link href='/albums'>
          <a>Albums</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        list-style: none outside none;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </nav>
)

export default Nav
