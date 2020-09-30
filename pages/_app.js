import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'

const Mousetrap = require('mousetrap')

class Geezer extends App {
  componentDidMount() {
    Mousetrap.bind("enter", function() {
        window.location.reload()
    })
  }
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default Geezer