import React from "react"

function Banner({ url, title }) {
  return (
    <div className="banner">
      <img src={url} alt="Bannière" />
      <h1 className="title">{title}</h1>
    </div>
  )
}

export default Banner