import React from 'react'
import { Helmet } from 'react-helmet'

function DriftPage() {
  return (
    <article className="article">
      <Helmet>
        <title>Drift School | Race Taxi</title>
      </Helmet>
      <h1 className="article__title">Drift School</h1>
      <p className="article__paragraph">
        A master class with FIA Intercontinental Drifting Cup runner-up Arkady
        Tsaregratsev in specially prepared Nissan Silvia S14 cars or your own
        car!
      </p>
      <p className="article__paragraph">
        Drift at Sochi Autodrom will allow you to experience incredible speed,
        as well as find out what living in the fast lane feels like. Absolutely
        everyone can try their hand at drifting. Depending on whether you are a
        rookie or an experienced driver, famous driver and FIA Intercontinental
        Drifting Cup runner-up Arkady Tsaregratsev will find the appropriate
        exercises, teach you how to drift in corners, share safe drift basics
        and even prepare you for competing in drift championships of any level.
      </p>
    </article>
  )
}

export default DriftPage
