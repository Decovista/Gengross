import React from 'react'
import resouce from '../../Components/resouce'
import './Media.css' 

function Media() {
  const media = [
    { path: resouce.newMedia },
    { path: resouce.newMedia1 },
    { path: resouce.newMedia2 },
    { path: resouce.newMedia3 },
    { path: resouce.newMedia4 },
  ]

  return (
    <div className='media'>
      <h3>Work Culture</h3>
      <ul className='media-content'>
        {media.map((item, index) => (
          <li key={index}>
            <img src={item.path} alt={`media-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Media
