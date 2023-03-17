import React from 'react'
import ' ./Bootstrap.css '
import ' ./css/Loader.css'

function Loader() {
  return (
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loader