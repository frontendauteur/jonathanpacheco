import Head from 'next/head'
import React from 'react'

export default class Module extends React.Component {
  render() {
    console.log(React.Fragment)
    return (
      <div>
        <Head><style dangerouslySetInnerHTML={{ __html: this.props.stylesheet }} /></Head>
        {this.props.children}
      </div>
    )
  }
}