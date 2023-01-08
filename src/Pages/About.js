import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
    <Helmet>
        <title>About Us</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <div>About</div>
    </>
  )
}

export default About