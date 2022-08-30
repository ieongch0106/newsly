import React from 'react';


export default function News({ title, image, description, link }) {
  
  return (
    <div>
      <img src={image} alt='news' width='25%'/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
