import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import data from "./data"

function Cards() {
  return (
    <>
      {data.map((item, id) => {
        return (
          <div className="image-card">
            <img src={item.img.src} alt={item.img.alt} />

            <div className="info">
              <h5 key={id}>
                #{item.id} {item.title} ({item.year})
              </h5>
              <h5>{item.distributor}</h5>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Cards
