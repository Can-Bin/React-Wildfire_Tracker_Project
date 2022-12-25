import React from 'react'
import loading from "./loading.gif"

const Loading = () => {
  return (
    <div className='loading'>
        <img src={loading} alt="loading" />
        <h1>Loading</h1>
    </div>
  )
}

export default Loading