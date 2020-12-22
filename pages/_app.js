import React from 'react'
import App from 'next/app'

import 'tailwindcss/tailwind.css'

const Mousetrap = require('mousetrap')

class Geezer extends App {
  // use the common keyboard shortcuts for easier page refresh
  componentDidMount() {
    Mousetrap.bind('space', function () {
      window.location.reload()
    })
    Mousetrap.bind('right', function () {
      window.location.reload()
    })
  }
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default Geezer
