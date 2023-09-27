import React from 'react'

export default function Home() {
  return (
    <div>
        <h1>{localStorage.getItem('message')}</h1>
    </div>
  )
}
