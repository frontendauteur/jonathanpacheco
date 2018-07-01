import Head from 'next/head'

const SiteHead = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link href='https://rsms.me/interface/interface.css' rel='stylesheet' />
  </Head>
)

export default SiteHead
