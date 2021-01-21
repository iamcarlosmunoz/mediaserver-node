import React from "react"
import "./MainSection.css"

const MainSection = ({ titleSection, children }) => {
  return (
    <div className="main-section">
      {titleSection !== undefined && (
        <h2 className="main-section__title">{titleSection}</h2>
      )}
      {children}
    </div>
  )
}

export default MainSection
