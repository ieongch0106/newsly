import React from 'react';


export default function News({ title, image, description, link }) {

  return (
    <div className='news'>
      <img src={image} alt='news' />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
