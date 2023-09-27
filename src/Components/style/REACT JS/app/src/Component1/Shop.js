import React from 'react'

export default function Shop(users) {
  return (
    <div>
      {
        users.map(hii=>{
          return <h1>{hii}</h1>
        })
      }

    </div>
  )
}