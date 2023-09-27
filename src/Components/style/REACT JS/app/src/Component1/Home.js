import React from 'react'

const Home = ({units}) => {
  return (
    <div>
        {
            units.map(s=>{
                return <h1>{s}</h1>
            })
        }
    </div>
  )
}

export default Home