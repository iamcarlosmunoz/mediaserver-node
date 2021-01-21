import React from "react"

import MainNavigation from "../../components/MainNavigation"
import MainHeader from "../../components/MainHeader"

import "./styles.css"

const AppLayout = ({ children }) => {
  return (
    <div className="imposter imposter--center-x-start imposter--center-y-reverse">
      <MainNavigation />
      <main className="container container--long-width">
        <MainHeader />
        {children}
      </main>
    </div>
  )
}

export default AppLayout
