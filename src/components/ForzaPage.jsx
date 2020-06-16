import React from 'react'
import { Helmet } from 'react-helmet'

function ForzaPage() {
  return (
    <article className="article">
      <Helmet>
        <title>Forza Karting Sochi | Race Taxi</title>
      </Helmet>
      <h1 className="article__title">Forza Karting Sochi</h1>
      <p className="article__paragraph">
        New open-air Forza Karting is the world-class karting centre opened in
        the Sochi Olympic park!
      </p>
      <p className="article__paragraph">
        Here you will find the widest possible track with all safety precautions
        taken care of. The Centre is equipped with lap timing facilities, with a
        list of every participant’s fastest laps presented to them at the end of
        their karting experience. The centre has several modern European go
        karts with a 13bhp engines for guests to drive.
      </p>
      <p className="article__paragraph">
        Do not miss this great opportunity to experience the thrill of driving
        at the Forza Karting centre!
      </p>
    </article>
  )
}

export default ForzaPage
