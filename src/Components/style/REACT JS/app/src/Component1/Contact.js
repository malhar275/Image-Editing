import React from 'react'

function Contact ({users}) {
  return (
    <div>
      {
        users.map(e=>{
          return <h1>{e}</h1>
        })
      }
    </div>
  )
}

export default Contact