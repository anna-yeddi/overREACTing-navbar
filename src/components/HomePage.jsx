import React from 'react'
import { Helmet } from 'react-helmet'

function HomePage() {
  return (
    <article className="article">
      <Helmet>
        <title>Home | Race Taxi</title>
      </Helmet>
      <h1 className="article__title">Race Taxi</h1>
      <p className="article__paragraph">
        A race taxi ride is a great opportunity to enjoy the speed and the
        skills of Sochi Autodrom professional instructors, and fully enjoy the
        sharp turns of the most modern racing circuit in Russia.
      </p>
    </article>
  )
}

export default HomePage
