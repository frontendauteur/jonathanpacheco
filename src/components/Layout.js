import SiteHead from './SiteHead'
import Nav from './Nav'
import Head from 'next/head'
import {stylesheet, classNames} from './Layout.css'

const Layout = (props) => (
  <div className={classNames.wrapper}>
    <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
    <SiteHead title={props.title} />
    <Nav />
    <main className={classNames.main}>
      {props.children}
    </main>
  </div>
)

export default Layout
