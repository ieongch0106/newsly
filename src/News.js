import React from 'react';
import unavailable from './No_Image_Available.png';

export default function News({ title, image, description, link }) {
  console.log(image)
  const imageHandler = (image) => {
    if (image === null) {
      return unavailable;
    }
    if (image.endsWith('mp4') || image.endsWith('webm') || image.endsWith('mov') || image.endsWith('mpg') || image.endsWith('ogg') || image.endsWith('avi')) {
      return unavailable;
    }
    return image;
  }
  return (
    <div className='news' onClick={() => window.location.replace(link)}>
      <img src={imageHandler(image)} alt='news' />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
