import React from 'react'
import resouce from '../../Components/resouce'
import '../Media/Media.css' 

function Career() {
  const media = [
    { path: resouce.career1 },
    { path: resouce.career2 },
    { path: resouce.career3 },
    { path: resouce.career4 },
  ]

  return (
    <div className='media'>
      <h3>career</h3>
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

export default Career
